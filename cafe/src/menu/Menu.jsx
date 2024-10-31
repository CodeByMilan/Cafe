import React from "react";
import Section from "./components/Section";

const Menu = () => {
    const menuData = [
        {
            title: "Pizza",
            items: [
                {
                    title: "Pizza Margherita",
                    description: "Tomato base, mozzarella, fresh basil",
                },
                {
                    title: "Pizza Hawaii",
                    description: "Tomato base, mozzarella, pineapple, ham",
                },
                {
                    title: "Pizza Prosciutto, Rucola e Parmigiano - Chef’s Special",
                    description: "Tomato base, mozzarella, finely shaved prosciutto, rocket, grated parmesan & drizzle of EVO oil",
                },
                {
                    title: "Pizza Diavola",
                    description: "Tomato base, mozzarella, hot cacciatore salami, chilli flakes",
                },
                {
                    title: "Pizza Napoli",
                    description: "Tomato base, mozzarella, anchovies, capers, black olives",
                },
                {
                    title: "Pizza Reggina",
                    description: "Tomato base, mozzarella, mushrooms, ham, black olives",
                },
                {
                    title: "Pizza all’Ortolana",
                    description: "Tomato base, mozzarella, mushrooms, capsicums, onions, olives, artichokes, asparagus",
                },
                {
                    title: "Pizza Marinara",
                    description: "Tomato base, mixed seafood (clams, mussels, small prawns, squid), garlic, herbs",
                },
                {
                    title: "Pizza Quattro Stagioni",
                    description: "Tomato base, mozzarella, black olives, artichokes, mushrooms, grilled zucchini",
                },
                {
                    title: "Pizza al Tonno",
                    description: "Tomato base, mozzarella, tuna, onions, capers",
                },
                {
                    title: "Pizza Mare e Monti",
                    description: "Tomato base, mozzarella, mushrooms, grilled zucchini, small garlic prawns",
                },
                {
                    title: "Pizza Vegetariana",
                    description: "Tomato base, mozzarella, grilled eggplant and zucchini, black olives",
                },
                {
                    title: "Pizza Prosciutto Cotto e Würstel",
                    description: "Tomato base, mozzarella, ham, German sausages",
                },
                {
                    title: "Pizza Prosciutto Cotto e Funghi",
                    description: "Tomato base, mozzarella, ham, mushrooms",
                },
                {
                    title: "Pizza Salame",
                    description: "Tomato base, mozzarella, mild Hungarian salami",
                },
                {
                    title: "Sciuto’s Favourite",
                    description: "Tomato base, mozzarella, grilled eggplant, black olives, grated Italian parmesan",
                },
                {
                    title: "La Gimont",
                    description: "Tomato base, mozzarella, anchovies, sundried tomatoes, mushrooms, onions, fresh basil",
                },
                {
                    title: "Meat Lovers",
                    description: "Tomato base, mozzarella, ham, Hungarian salami, hot cacciatore salami, German bacon",
                },
                {
                    title: "Pizza Nino",
                    description: "Tomato base, mozzarella, ham, Hungarian salami, mushrooms, German sausages",
                },
                {
                    title: "Calzone",
                    description: "Folded pizza with tomatoes, mozzarella, ham",
                },
                {
                    title: "German Flammenkuchen",
                    description: "White sour cream base, German smoked bacon, onions",
                },
                {
                    title: "Pizza Quattro Formaggi",
                    description: "Tomato mozzarella base with four delicious international cheeses",
                },
                {
                    title: "Supreme",
                    description: "Tomato base, mozzarella, ham, mushrooms, pineapple, hot cacciatore, bacon, capsicum, German sausages",
                },
                {
                    title: "The Greek",
                    description: "Tomato base, mozzarella, feta, ham, kalamata olives, sundried tomatoes, grilled eggplant, basil",
                },
            ],
        },
        {
            title: "Starters",
            items: [
                {
                    title: "Small Side Salad",
                    description: "Leafy salad mix with 4 cherry tomatoes and a balsamic vinegar and olive oil vinaigrette",
                },
                {
                    title: "Chef's Salad",
                    description: "Rocket and mixed salad leaves with Kalamata olives, capers, and shaved Grana Padano. Finished with a drizzle of EVO oil.",
                },
                {
                    title: "Bruschetta",
                    description: "2 homemade bread slices with tomatoes, basil, herbs, extra virgin olive oil, parmesan & balsamic glaze.",
                },
                {
                    title: "Garlic Bread",
                    description: "2 homemade bread slices served with fresh homemade garlic butter and herbs.",
                },
                {
                    title: "Garlic Bread/Bruschetta Mix",
                    description: "1 slice of our delicious garlic bread and 1 slice of our bruschetta.",
                },
                {
                    title: "Antipasti Misti",
                    description: "Sundried tomatoes, marinated olives, grilled eggplant & zucchini, Italian parmesan and mild cacciatore salami served with homemade bread and extra virgin olive oil.",
                },
                {
                    title: "White Pizza",
                    description: "Garlic, herbs and mozzarella – A perfect starter to share with friends or family.",
                },
                {
                    title: "Fried Cacciatore Salami",
                    description: "Served with homemade bread and EVO oil.",
                },
                {
                    title: "Bowl of Olives with Fried Salami",
                    description: "Pan-fried cacciatore salami with our own marinated olives. Served with homemade sliced bread.",
                },
            ],
        },
        {
            title: "Pasta",
            items: [
                {
                    title: "Spaghetti Pomodoro",
                    description: "Homemade tomato sauce and freshly grated Grana Padano.",
                },
                {
                    title: "Spaghetti Bolognese",
                    description: "Homemade Bolognese sauce and freshly grated Grana Padano.",
                },
                {
                    title: "Spaghetti Carbonara",
                    description: "Creamy sauce made with smoked bacon, Lirravale free range egg, freshly grated Grana Padano and spices.",
                },
                {
                    title: "Rossini – Chef’s Pasta Special",
                    description: "Cut gerello, pork and beef filet chunks, mushrooms, Grana Padano, garlic in a brandy, cream and tomato based sauce.",
                },
                {
                    title: "Spaghetti Marinara",
                    description: "Garlic, herbs, freshly cut tomatoes, Shark Bay clams, fresh black mussels, small prawns, squid and wild Australian caught tiger prawns. Finished with grated Grana Padano and fresh gremolata.",
                },
                {
                    title: "Creamy Marinara",
                    description: "Garlic, onions, herbs, Shark Bay clams, fresh black mussels and wild Australian caught tiger prawns in a creamy white wine sauce. Finished with grated Grana Padano and fresh gremolata.",
                },
                {
                    title: "Tarantina",
                    description: "Freshly chopped WA mussels, extra virgin olive oil, garlic, birds eye chilli, herbs.",
                },
                {
                    title: "Aglio, Olio e Peperoncino",
                    description: "Garlic, extra virgin olive oil, birds eye chilli, freshly cut tomatoes, parmesan.",
                },
                {
                    title: "Spaghetti Chilli Mussels",
                    description: "Fresh black mussels, EVO oil, onions, white wine, chilli & herbs in a spicy tomato sauce.",
                },
            ],
        },
        {
            title: "Penne",
            items: [
                {
                    title: "Pomodoro",
                    description: "Homemade tomato sauce and Italian parmesan",
                },
                {
                    title: "Bolognese",
                    description: "Homemade Bolognese sauce and Italian parmesan",
                },
                {
                    title: "Puttanesca",
                    description: "Garlic, herbs, chilli, capers, olives & anchovies in a rich tomato sauce with Grana Padano",
                },
                {
                    title: "Arrabbiata",
                    description: "Homemade tomato sauce, hot cacciatore salami, smoked bacon, birds eye chilli and garlic",
                },
                {
                    title: "Boscaiola",
                    description: "Tomato and cream based sauce with mushrooms, peas, Virginia ham, Italian parmesan and garlic",
                },
                {
                    title: "Broccoli",
                    description: "Creamy broccoli sauce with smoked bacon, parmesan, garlic and fresh herbs",
                },
                {
                    title: "Quattro Formaggi",
                    description: "Cheesy cream sauce made with 4 different International cheeses",
                },
            ],
        },
        {
            title: "Fettuccine",
            items: [
                {
                    title: "Pomodoro",
                    description: "Homemade tomato sauce and Italian parmesan",
                },
                {
                    title: "Bolognese",
                    description: "Homemade Bolognese sauce and Italian parmesan",
                },
                {
                    title: "Al Salmone",
                    description: "Freshly chopped garlic, smoked salmon, Italian parmesan in a fine cream sauce",
                },
                {
                    title: "Alla Vodka",
                    description: "Onions, herbs and wild Australian caught tiger prawns in a delicious creamy Vodka sauce. Finished with freshly grated Grana Padano and fresh gremolata.",
                },
                {
                    title: "Funghi",
                    description: "Mixed mushrooms, garlic, fresh herbs and Italian parmesan in a fine cream sauce",
                },
                {
                    title: "Alfredo",
                    description: "The classic creamy sauce made with fresh cream, garlic and grated Grana Padano",
                },
            ],
        },
    ];

    return (
        <div className="m-10 mt-3 p-3">
            {menuData.map((section, index) => (
                <Section key={index} title={section.title} items={section.items} />
            ))}
        </div>
    );
};

export default Menu;
