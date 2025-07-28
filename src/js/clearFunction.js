export default function health(indicators) {
  if (indicators.health > 50) {
    return "healthy";
  }
  if ((indicators.health <= 50) & (indicators.health > 15)) {
    return "wounded";
  }
  if (indicators.health <= 15) {
    return "critical";
  }
}
