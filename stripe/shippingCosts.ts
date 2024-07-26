export const shippingCost = (
  inputString: string,
  source: string,
  dest: string,
  shipper: string
): any | null => {
  const shippingArray = inputString.split(",");
  //TODO fix any
  let shippingObject: any = {};
  const sourceArray: string[] = [];
  const destArray: string[] = [];

  shippingArray.forEach((entry) => {
    const entryArray = entry.split(":");
    const [entrySource, entryDest, carrier, cost] = entryArray;
    if (!shippingObject[entrySource]) {
      shippingObject[entrySource] = {
        [entryDest]: {
          [carrier]: Number(cost),
        },
      };
    } else if (!shippingObject[entrySource][entryDest]) {
      shippingObject[entrySource][entryDest] = {
        [carrier]: Number(cost),
      };
    } else {
      shippingObject[entrySource][entryDest][carrier] = Number(cost);
    }
  });

  if (
    shippingObject[source] &&
    shippingObject[source][dest] &&
    shippingObject[source][dest][shipper]
  )
    return {
      route: `${source} => ${dest}`,
      method: shipper,
      cost: shippingObject[source][dest][shipper],
    };

  if (shippingObject[source] && !shippingObject[source][dest]) {
    for (const key in shippingObject[source]) {
      if (shippingObject[key]) {
        const secondaryKeys = Object.keys(shippingObject[key]);
        console.log({ secondaryKeys });
        if (secondaryKeys.includes(dest)) {
          const shipper1 = Object.keys(shippingObject[source][key])[0];
          const shipper2 = Object.keys(shippingObject[key][dest])[0];

          return {
            route: `${source} => ${key} => ${dest}`,
            method: `${shipper1} -> ${shipper2}`,
            cost:
              shippingObject[source][key][shipper1] +
              shippingObject[key][dest][shipper2],
          };
        }
      }
    }
  }

  return null;
};

const inputString =
  "US:UK:FedEx:5,UK:US:UPS:4,UK:CA:FedEx:7,US:CA:DHL:10,UK:FR:DHL:2";
// console.log(shippingCost(inputString, 'US', 'UK', 'FedEx'))
console.log(shippingCost(inputString, "US", "FR", "DHL"));
// console.log(shippingCost(inputString, 'US', 'MX', 'DHL'))
