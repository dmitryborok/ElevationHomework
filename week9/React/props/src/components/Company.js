import SubCompany from './SubCompany';

function Company({name, earnings}) {
    return (  
        <SubCompany name={name} earnings={earnings}/>
    );
}

export default Company;