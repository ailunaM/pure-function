const gamePlayer = {
  name: "Маг",
  health: 90,
};
console.log(gamePlayer);
export default function healthIndicator(health) {
  if (health > 50) {
    return "healthy";
  } else if (health > 15) {
    return "wounded";
  } else {
    return "critical";
  }
}
