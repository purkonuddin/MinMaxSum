function minMaxSum(params) {
  let data = params;

  const sum = data.reduce((a, total) => a + total, 0);
  let arrCount = [];
  // jumla data dikurangi tiap satu angka sesuai index, dan push ke dalam arrCount
  for (let i = 1; i <= data.length; i++) {
    const element = data[data.length - i];
    const sumElement = sum - element;
    //   console.log(`${sum} - data ke ${i} (${element}) =`, sumElement);
    arrCount.push(sumElement);
  }

  // tentukan nilai max dan min dari arrCount
  const maxCount = Math.max(...arrCount);
  const minCount = Math.min(...arrCount);
  console.log(minCount, maxCount);
}

minMaxSum([6, 3, 10, 27, 1]);
minMaxSum([5, 19, 11, 14, 15]);
minMaxSum([7, 1, 2, 22, 15]);
minMaxSum([4, 15, 5, 14, 42]);
minMaxSum([4, 15, 5, 14, 42]);

minMaxSum([30, 19, 18, 57, 21]);
minMaxSum([26, 31, 10, 16, 37]);
minMaxSum([16, 11, 39, 16, 68]);
minMaxSum([10, 30, 32, 34, 62]);
minMaxSum([13, 29, 46, 11, 69]);

minMaxSum([94, 176, 223, 361, 117]);
minMaxSum([31, 107, 90, 346, 184]);
minMaxSum([18, 178, 291, 5, 350]);
minMaxSum([41, 105, 177, 200, 384]);
minMaxSum([93, 104, 92, 114, 411]);
