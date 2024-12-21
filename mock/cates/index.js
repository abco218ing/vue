let arr = [
  { cat_id: 1, name: "零食", pid: 0, level: 1 },
  { cat_id: 2, name: "生活用品", pid: 0, level: 1 },
  { cat_id: 3, name: "攻城狮", pid: 0, level: 1 },

  { cat_id: 4, name: "方便面", pid: 1, level: 2 },
  { cat_id: 5, name: "汽水", pid: 1, level: 2 },
  { cat_id: 6, name: "薯条", pid: 1, level: 2 },

  { cat_id: 7, name: "床单", pid: 2, level: 2 },
  { cat_id: 8, name: "枕头", pid: 2, level: 2 },
  { cat_id: 9, name: "洗发水", pid: 2, level: 2 },

  { cat_id: 10, name: "WEB大前端", pid: 3, level: 2 },
  { cat_id: 11, name: "JAVA", pid: 3, level: 2 },
  { cat_id: 12, name: "PYTHON", pid: 3, level: 2 },

  { cat_id: 13, name: "JS变量", pid: 10, level: 3 },
  { cat_id: 14, name: "JS判断", pid: 10, level: 3 },
  { cat_id: 15, name: "JS循环", pid: 10, level: 3 },

  { cat_id: 16, name: "JAVA变量", pid: 11, level: 3 },
  { cat_id: 17, name: "JAVA判断", pid: 11, level: 3 },
  { cat_id: 18, name: "JAVA循环", pid: 11, level: 3 },
];

function findById(cat_id) {
  let child = [];
  arr.forEach((value) => {
    if (value.pid == cat_id) {
      child.push(value);
    }
  });
  return child;
}

function getTree(cat_id = 0) {
  let dataArr = findById(cat_id);
  if (dataArr.length <= 0) {
    return null;
  } else {
    dataArr.forEach((value) => {
      if (getTree(value.cat_id) != null) {
        value["children"] = getTree(value.cat_id);
      }
    });
  }
  return dataArr;
}

// console.log(getTree());
export default getTree();
