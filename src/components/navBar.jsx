import './navBar.css';


const NavBar = () => {
    return (
        <div className='navBar'>
            <h1>The Vacation Outfits</h1>
            
            <a href="women.html"> Woman </a>
            <a href="men.html"> Men </a>
            <a href="kids.html"> Shoes </a>
            <a href="accessories.html">Accessories</a>
            <a href="activewear.html">ActiveWear</a>
            <button><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag-full.png"/></button> 
            <button><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
        </div>

    );

};


export default NavBar;

