export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.log(
          "No se pudo obtener la ubicación del usuario. Por favor, habilite la ubicación en su dispositivo."
        );
      }
    );
  });
};
