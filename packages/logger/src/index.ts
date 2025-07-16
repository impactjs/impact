import ora from "ora";

export enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  DEBUG = "debug",
  SUCCESS = "success",
}

const order = [
  LogLevel.DEBUG,
  LogLevel.INFO,
  LogLevel.SUCCESS,
  LogLevel.WARN,
  LogLevel.ERROR,
];

class Logger {
  private logLevel: LogLevel = LogLevel.INFO;

  private shouldLog(logLevel: LogLevel) {
    return order.indexOf(logLevel) >= order.indexOf(this.logLevel);
  }

  public setLogLevel(logLevel?: LogLevel) {
    if (!logLevel) {
      return;
    }
    this.logLevel = logLevel;
  }

  public info(message: string, ...args: unknown[]) {
    if (this.shouldLog(LogLevel.INFO)) {
      const prefix = this.colorizePrefix("[info]", "cyan");
      console.log(
        "%s %s",
        prefix,
        message,
        ...args.map((item) => (item instanceof Error ? item.message : item)),
      );
    }
  }

  public spinner(message: string) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log("[debug:spinner]: %s", message);
      return {
        set text(value: string) {
          console.log("[debug:spinner:update]: %s", value);
        },
        start(message: string) {
          console.log("[debug:spinner:start]: %s", message);
        },
        succeed(message: string) {
          console.log("[debug:spinner:succeed]: %s", message);
        },
        fail(message: string) {
          console.log("[debug:spinner:fail]: %s", message);
        },
        warn(message: string) {
          console.log("[debug:spinner:warn]: %s", message);
        },
      };
    }

    const spinner = ora(message);
    if (this.shouldLog(LogLevel.SUCCESS)) {
      spinner.start();
    }
    return spinner;
  }

  public success(message: string, raw?: boolean) {
    if (this.shouldLog(LogLevel.SUCCESS)) {
      if (raw) {
        console.log(message);
        return;
      }
      const prefix = this.colorizePrefix("[success]", "green");
      console.log("%s %s", prefix, message);
    }
  }

  public warn(message: string, ...args: unknown[]) {
    if (this.shouldLog(LogLevel.WARN)) {
      const prefix = this.colorizePrefix("[warn]", "yellow");
      console.warn(
        "%s %s",
        prefix,
        message,
        ...args.map((item) => (item instanceof Error ? item.message : item)),
      );
    }
  }

  public error(message: string, ...args: unknown[]) {
    if (this.shouldLog(LogLevel.ERROR)) {
      const prefix = this.colorizePrefix("[error]", "red");
      console.error(
        "%s %s",
        prefix,
        message,
        ...args.map((item) => (item instanceof Error ? item.message : item)),
      );
    }
  }

  private colorizePrefix(
    prefix: string,
    color: "green" | "yellow" | "red" | "cyan",
  ) {
    const supportsColor =
      typeof process !== "undefined" &&
      process.stdout &&
      process.stdout.isTTY &&
      !process.env.NO_COLOR &&
      !process.env.FORCE_NO_COLOR;
    if (!supportsColor) {
      return prefix;
    }
    const colorCodes: Record<string, [string, string]> = {
      green: ["\x1b[32m", "\x1b[0m"],
      yellow: ["\x1b[33m", "\x1b[0m"],
      red: ["\x1b[31m", "\x1b[0m"],
      cyan: ["\x1b[36m", "\x1b[0m"],
    };
    const [start, end] = colorCodes[color] || ["", ""];
    return `${start}${prefix}${end}`;
  }

  public debug(message: string | (() => string), ...args: unknown[]) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(
        "[debug]: %s",
        typeof message === "function" ? message() : message,
      );
    }
  }
}

export const logger = new Logger();
