//FORM ASSIGN
const loan_form = document.getElementById('loan-form');
//LISTEN FOR SUBMIT
loan_form.addEventListener('submit', function(e){
    //show loading
    document.getElementById('loading').style.display = 'block';
    //hide result
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 2000);

    e.preventDefault();

});

//CACULATE RESULT
function calculateResults(){
    console.log('loading....');

    //UI VAR
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100 /12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthy payment
    const x =Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        //show result
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';



    }else{
        showError('please check you number');
    }


    // e.preventDefault();
}
    
//show error
function showError(error){
    //hide loading
    document.getElementById('loading').style.display = 'none';
    //hide results
    document.getElementById('results').style.display = 'none';

    const errorDIv = document.createElement('div');
    errorDIv.className = 'alert alert-danger'; //add class

    errorDIv.appendChild(document.createTextNode(error));// create text node & append to div

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //insert error before heading
    card.insertBefore(errorDIv, heading);

}
