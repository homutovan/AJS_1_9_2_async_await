import GameSavingLoader from '../gamesavingloader';
import { saveData } from '../reader';
import GameSaving from '../gamesaving';

const testData = '{"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Rembo", "level": 10, "points":2000}}';
const hitman = new GameSaving(JSON.parse(saveData));
const rembo = new GameSaving(JSON.parse(testData));

test('Test case №1', async () => {
  const save = await GameSavingLoader.load();
  expect(save).toEqual(hitman);
});

test('Test case №2', async () => {
  const save = await GameSavingLoader.load();
  expect(save).not.toEqual(rembo);
});
