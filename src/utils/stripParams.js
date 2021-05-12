import { cloneDeep } from 'lodash'

export default function stripParams (params, toStrip) {
  const val = cloneDeep(params)
  for (let i = 0; i < toStrip.length; i++) {
    delete val[toStrip[i]]
  }
  return val
}