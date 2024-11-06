const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  // Handle null and non-objects
  if (value === null || typeof value !== 'object') {
    return false
  }

  // Get the prototype
  const proto = Object.getPrototypeOf(value)

  // Handle objects with null prototype (very rare)
  if (proto === null) {
    return true
  }

  // Check if the object is created by Object constructor
  // This means checking if it has the base Object prototype or null prototype
  const Ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor

  // Check if constructor is a function and has the correct prototype chain
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor && // Checks if constructor was created by Function constructor
    Function.prototype.toString.call(Ctor) ===
      Function.prototype.toString.call(Object)
  )
}

export const flattenObject = (
  o: object,
  r: Record<string, string> = {},
  path: string[] = [],
  separator = '.',
) => {
  for (const [k, v] of Object.entries(o)) {
    if (isPlainObject(v)) {
      flattenObject(v, r, [...path, k], separator)
      continue
    }
    r[[...path, k].join(separator)] = v
  }
  return r
}
