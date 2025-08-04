export function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function generateGrid<T>(items: T[], correctIdx: number): T[] {
  const correct = items[correctIdx];
  const wrongItems = items
    .filter((_, i) => i !== correctIdx)
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);
  return shuffleArray([...wrongItems, correct]);
}

export function getRandomLightColor(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.random() * 20;
  const lightness = 75 + Math.random() * 15;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
