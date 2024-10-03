export async function getAddressFromCoordinates(latitude: number, longitude: number) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=id`);
        const data = await response.json();
        
        if (data && data.address) {
            return data.address;
        } else {
            return null; 
        }
    } catch (error) {
        console.error("Error fetching data location:", error);
        console.error("Terjadi kesalahan saat mendapatkan data lokasi.");
        return null;
    }
}
