function iconSelection(record) {

  switch (record.category) {
    case '家居物業':
      record["icon"] = "<i class='fas fa-home'></i>";
      break;
    case '交通出行':
      record["icon"] = "<i class='fas fa-shuttle-van'></i>";
      break;
    case '休閒娛樂':
      record["icon"] = "<i class='fas fa-grin-beam'></i>";
      break;
    case '餐飲食品':
      record["icon"] = "<i class='fas fa-utensils'></i>";
      break;
    case '其他':
      record["icon"] = "<i class='fas fa-pen'></i>";
      break;
  }

  return record
}
module.exports = iconSelection
// iconSelection()
