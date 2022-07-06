import logging
import os

from enums import EnvironmentVariable

log_level = os.getenv(EnvironmentVariable.LOG_LEVEL, "DEBUG").upper()

logger = logging.getLogger("Backend")

console_handler = logging.StreamHandler()
console_handler.setLevel(log_level)
console_handler.setFormatter(
    logging.Formatter(
        fmt="%(asctime)s - %(name)s - %(levelname)s - %(message)s (%(filename)s:%(lineno)d)"
    )
)

logger.addHandler(console_handler)
