export const serviceList = [
  { name: "products", url: "http://localhost:4001" },
  { name: "labels", url: "http://localhost:4002" },
];

export function getPortFor(name: string) {
  const { url } = serviceList.find((service) => service.name === name);

  return new URL(url).port;
}
