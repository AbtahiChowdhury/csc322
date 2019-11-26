import { CartItem } from './cart-item';
import { Payment } from './payment';

export interface Order 
{
    uid?:string;
    orderedBy:string;
    orderedOn:any;
    orderDestination:string;
    paymentDetails:Payment;
    cookedBy?:string;
    deliveredBy?:string;
    foodRating?:number;
    deliveredOn?:any;
    deliveryRating?:number;
    customerRating?:number;
    contents:CartItem[];
    subtotal:number;
    tax:number;
    discount:number;
    total:number;
    currentBid?:number;
    currentBidder?:string;
    currentBidderName?:string;
    status:string;
}
