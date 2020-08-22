export class User {
    name: string;
    picture: string;
    phone: string;
    email: string;
    uid: string;
    age: string;
    qtyKids: string;
    ageKids: string;

    constructor(name: string, picture: string, email: string, uid: string,
        age: string, qtyKids: string, ageKids: string, phone?: string) {
        this.name = name;
        this.picture = picture;
        this.email = email;
        this.uid = uid;
        this.phone = phone;
        this.age = age;
        this.ageKids = ageKids;
        this.qtyKids = qtyKids;
    }
}