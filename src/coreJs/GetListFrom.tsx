import { userTypes, users } from "./data";


function asGroupBy(jsonData: userTypes[], keys: string[], asObject: boolean) {

  const grp = []
  for (let data of jsonData) {
    const det = []
    const asCurlyObject = {}
    for (let key of keys) {
      if (data[key] && !asObject) {
        det.push(data[key])
      }
      else if (data[key] && asObject) {
        asCurlyObject[key] = data[key]
      }
    }
    if (asObject) {
      grp.push(asCurlyObject)
    }
  }
  return grp
}

export function getArrayFrom(jsonData: userTypes[], keys: String[], asGroup: boolean = false, asObject: boolean = false) {
  const result: String[] = []
  if (asGroup) {
    return asGroupBy(jsonData, keys, asObject)
  }

  for (let key of keys) {
    let kval: String = key
    jsonData.map((data: userTypes, idx: number) => {
      let grp: string[] = []
      if (data[kval] && !asGroup) {
        result.push(data[kval])
      }
      if (data[kval] && asGroup) {
        grp.push(data[kval])
      }
    })
  }

  return result

}


