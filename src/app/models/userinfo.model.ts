interface ICompany {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}
interface IGeo {
    lat?: string;
    lng?: string;
}
interface IAddress {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: IGeo      
}
export interface IUserInfo {
    address?: IAddress;
    website?: string;
    company?: ICompany;

}