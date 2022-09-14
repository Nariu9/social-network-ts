export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProps: any) => {
  return   items.map(i => i[objPropName] === itemId ? {...i, ...newObjProps} : i)
}