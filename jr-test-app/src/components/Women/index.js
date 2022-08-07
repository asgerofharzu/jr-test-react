import './women.css';
import Svg from "./Svg";
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
function Women() {
    return(
        <>
            <nav className="navbar">
                <div className="flex-start">
                    <ul>
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>KIDS</li>
                    </ul>
                </div>
                <div className="center">
                    <Svg/>
                </div>
                <div className="flex-end">
                    <div> <span>$</span> </div>
                </div>
            </nav>
            <main>
                <div className='category-name'>Category Name </div>
                <div className='card-content'>
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>
                <div className='card-content'>
                    <Card3/>
                    <Card2/>
                    <Card1/>
                </div>

            </main>
        </>
    );
}


export default Women;