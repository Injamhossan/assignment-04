function totalFine(fare) {
    
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

       let surcharge = fare * 0.20; 
    let serviceCharge = 30;     
    let total = fare + surcharge + serviceCharge;

    return total;
}
