import { GeoLocation, GeoLocationService } from "./GeoLocationService";

export class NavigatorGeoLocationService implements GeoLocationService {
    getGeoLocation(): Promise<GeoLocation> {
        let promise = new Promise(function(resolve: (location: GeoLocation) => void, reject: (e: any) => void) {
            navigator.geolocation.getCurrentPosition(function(position: Position) {
                resolve(position.coords)
            }, function(error: any) {
                reject(error);
            });
        });
        return promise;
    }
    
}