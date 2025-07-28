export default function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error("Expected an array of heroes");
  }
  return [...heroes].sort((a, b) => b.health - a.health);
}
