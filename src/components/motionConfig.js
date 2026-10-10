export function getMobileMenuMotion(reduceMotion) {
  return {
    initial: reduceMotion ? false : { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: reduceMotion ? undefined : { opacity: 0, height: 0 },
    transition: { duration: reduceMotion ? 0 : 0.24 },
  }
}
