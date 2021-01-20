const items = buildItems()
console.log("Сортировка по цене даёт")
testGreedy(items, 20, cmpValue)
console.log("Сортировка по обратному весу")
testGreedy(items, 20, cmpWeightInverse)
console.log("Сортировка по удельной цене:")
testGreedy(items, 20, cmpDensity)

function testGreedy(items, maxWeight, cmpFunction)
{
		const res = greedy(items, maxWeight, cmpFunction)
		console.log("Полная цена = ", res.totalValue)
		console.log("Взяли:", res.taken)
}
function greedy(items, maxWeight, cmpFunction)
{
	items.sort(cmpFunction)
	items.reverse()
	let totalValue = 0
	let totalWeight = 0
	const taken = []
	for (let i = 0; i < items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i]["weight"]
			totalValue += items[i]["value"]
		}
	}
	return {totalValue: totalValue, taken: taken}
}
items.sort(cmpValue)
items.reverse()
for (let i = 0; i < items.length; i++)

console.log(items[i])

function buildItems()
{
	const names = ['часы', 'картина', 'радио', 'ваза', 'книга', 'компьютер']
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push(
			{
			name:names[i],
			value: values[i],
			weight: weights[i]
		})
	}
	return items
}

function cmpValue(itemA, itemB)
{
	let r = itemA.value - itemB.value
	return r
}
function cmpWeightInverse(a, b)
{
	r = 1/a.weight - 1/b.weight
	return r
}

function cmpDensity(a, b)
{
	let r = a.value/a.weight - b.value/b.weight
	return r
}
