export interface GeoLocation {
    latitude: number;
    longitude: number;
}

export interface GeoLocationService {
    getGeoLocation(): Promise<GeoLocation>;
}