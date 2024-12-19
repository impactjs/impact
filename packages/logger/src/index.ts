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
  private logLevel: LogLevel = LogLevel.SUCCESS;

  private shouldLog(logLevel: LogLevel) {
    return order.indexOf(logLevel) >= order.indexOf(this.logLevel);
  }

  public setLogLevel(logLevel?: LogLevel) {
    if (!logLevel) {
      return;
    }
    this.logLevel = logLevel;
  }

  public info(message: string) {
    if (this.shouldLog(LogLevel.INFO)) {
      console.log("[info]: %s", message);
    }
  }

  public spinner(message: string) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log("[debug:spinner]: %s", message);
      return {
        set text(value: string) {
          console.log("[debug:spinner:update]: %s", value);
        },
        succeed(message: string) {
          console.log("[debug:spinner:succeed]: %s", message);
        },
        fail(message: string) {
          console.log("[debug:spinner:fail]: %s", message);
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
      console.log("[success]: %s", message);
    }
  }

  public warn(message: string) {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn("[warn]: %s", message);
    }
  }

  public error(message: string) {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error("[error]: %s", message);
    }
  }

  public debug(message: string | (() => string)) {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.debug(
        "[debug]: %s",
        typeof message === "function" ? message() : message,
      );
    }
  }
}

export const logger = new Logger();
