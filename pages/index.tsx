import React from 'react';
import Header from '../components/Header/Header'
import menu from '../img/drawer-menu.svg';
import user from '../img/user.svg';
import cart from '../img/cart.svg';
import envato from '../img/envato.svg';
import signIn from '../img/sign-in.svg';
import Insta from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';
import Dribble from '../img/dribble.svg';
import Youtube from '../img/youtube.svg';
import Github from '../img/github.svg';
import Hero from '../components/Hero/Hero';
import MainCardsContainer from '../components/Sections/MainCardsContainer/MainCardsContainer'
import SubCardsContainer1 from '../components/Sections/SubCardsContainer1/SubCardsContainer1'
import SubCardsContainer2 from '../components/Sections/SubCardsContainer2/SubCardsContainer2'
import Footer1 from '../components/Footer/Footer1'
import './index.less'

let TopMenuItems = [ { menuTxt: 'Forums', href: '#' }, { menuTxt: 'Start Selling', href: '#' },]

let Options = [
  {
  optionTxt: 'Digital Assets Subscription',
  href: '#',
  logoInOption:
    'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-elements-4de52b67c96ca63c1b764d39b573a7af.svg',
  },
  {
    optionTxt: 'Hire a freelancer',
    href: '#',
    logoInOption:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-studio-df1d5447eb8bd2d54ef22aa4b03d160a.svg',
  }
]

let NavMenuItems = [
{ menuTxt: 'Web Themes and Templates', href: '#', key: 'key1' },
{ menuTxt: 'Code', href: '#', key: 'key2' },
{ menuTxt: 'Video', href: '#', key: 'key3' },
{ menuTxt: 'Audio', href: '#', key: 'key4' },
{ menuTxt: 'Graphics', href: '#', key: 'key5' },
{ menuTxt: 'Photos', href: '#', key: 'key6' },
{ menuTxt: '3D Files', href: '#', key: 'key7' }
]

 let DropdownItems = [
    {
      dropdownTitle: 'All items',
      SubNavOptions: [
        { optionTxt: 'Popular Files', href: '#' },
        { optionTxt: 'Featured Files', href: '#' },
        { optionTxt: 'Top New Files', href: '#' },
        { optionTxt: 'Follow feed', href: '#' },
        { optionTxt: 'Top Authors', href: '#' },
        { optionTxt: 'Top New Authors', href: '#' },
        { optionTxt: 'Public Collections', href: '#' },
        { optionTxt: 'View All Categories', href: '#' },
      ],
    },
    {
      dropdownTitle: 'WordPress',
      SubNavOptions: [
        { optionTxt: 'Show All PHP Scripts', href: '#' },
        { optionTxt: 'Polpular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Calendars', href: '#' },
        { optionTxt: 'Countdowns', href: '#' },
        { optionTxt: 'Datebase Abstractions', href: '#' },
        { optionTxt: 'Forms', href: '#' },
        { optionTxt: 'Help and Support Tools', href: '#' },
        { optionTxt: 'Images and Media', href: '#' },
        { optionTxt: 'Loaders and Uploaders', href: '#' },
        { optionTxt: 'Navigation', href: '#' },
        { optionTxt: 'News Tickers', href: '#' },
        { optionTxt: 'Polls', href: '#' },
        { optionTxt: 'Project Management Tools', href: '#' },
        { optionTxt: 'Ratings and Charts', href: '#' },
        { optionTxt: 'Search', href: '#' },
        { optionTxt: 'Shopping Carts', href: '#' },
        { optionTxt: 'Social Networking', href: '#' },
        { optionTxt: 'Miscellaneous', href: '#' },
      ],
    },
    {
      dropdownTitle: 'Template Kits',
      SubNavOptions: [
        { optionTxt: 'Show All WordPress', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
        { optionTxt: 'Forums', href: '#' },
        { optionTxt: 'Galleries', href: '#' },
        { optionTxt: 'Interface Elements', href: '#' },
        { optionTxt: 'Media', href: '#' },
        { optionTxt: 'Membership', href: '#' },
        { optionTxt: 'Newsletters', href: '#' },
        { optionTxt: 'SEO', href: '#' },
        { optionTxt: 'Social Networking', href: '#' },
        { optionTxt: 'Utilities', href: '#' },
        { optionTxt: 'Widgets', href: '#' },
        { optionTxt: 'Miscellaneous', href: '#' },
        { optionTxt: 'WordPress Themes on ThemeForest', href: '#' },
      ],
    },
    {
      dropdownTitle: 'Hosting',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'HTML',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'Marketing',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'CMS',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'eCommerce',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'UI Templates',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'Plugins',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'Logo Maker',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
    {
      dropdownTitle: 'More',
      SubNavOptions: [
        { optionTxt: 'Show All eCommerce', href: '#' },
        { optionTxt: 'Popular Items', href: '#' },
        { optionTxt: 'Add-ons', href: '#' },
        { optionTxt: 'Advertising', href: '#' },
        { optionTxt: 'Calandars', href: '#' },
        { optionTxt: 'eCommerce', href: '#' },
        { optionTxt: 'Elementor', href: '#' },
        { optionTxt: 'Forms', href: '#' },
      ],
    },
  ]

let SelectOptions = [ 
{ optionTxt: 'Web Themes & Template', href: '#' },
{ optionTxt: 'Code', href: '#' },
{ optionTxt: 'Video', href: '#' },
{ optionTxt: 'Audio', href: '#' },
{ optionTxt: 'Photos', href: '#' },
{ optionTxt: '3D Files', href: '#' }
]

let Panels =[
  {
    panelHeader: 'All Items',
    PanelChildren: [
      { panelLink: 'Poular Files', href: '#' },
      { panelLink: 'Featured Files', href: '#' },
      { panelLink: 'Top New Files', href: '#' },
      { panelLink: 'Follow feed', href: '#' },
      { panelLink: 'Top Authors', href: '#' },
      { panelLink: 'Top New Authors', href: '#' },
      { panelLink: 'Public Collections', href: '#' },
      { panelLink: 'View All Categories', href: '#' },
    ],
    key: "1"
  },
  {
    panelHeader: 'PHP Scripts',
    PanelChildren: [
      { panelLink: 'Show All PHP Scripts', href: '#' },
      { panelLink: 'Polpular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Calendars', href: '#' },
      { panelLink: 'Countdowns', href: '#' },
      { panelLink: 'Datebase Abstractions', href: '#' },
      { panelLink: 'Forms', href: '#' },
      { panelLink: 'Help and Support Tools', href: '#' },
      { panelLink: 'Images and Media', href: '#' },
      { panelLink: 'Loaders and Uploaders', href: '#' },
      { panelLink: 'Navigation', href: '#' },
      { panelLink: 'News Tickers', href: '#' },
      { panelLink: 'Polls', href: '#' },
      { panelLink: 'Project Management Tools', href: '#' },
      { panelLink: 'Ratings and Charts', href: '#' },
      { panelLink: 'Search', href: '#' },
      { panelLink: 'Shopping Carts', href: '#' },
      { panelLink: 'Social Networking', href: '#' },
      { panelLink: 'Miscellaneous', href: '#' },
    ],
    key: "2"
  },
  {
    panelHeader: 'WordPress',
    PanelChildren: [
      { panelLink: 'Show All WordPress', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
      { panelLink: 'Forums', href: '#' },
      { panelLink: 'Galleries', href: '#' },
      { panelLink: 'Interface Elements', href: '#' },
      { panelLink: 'Media', href: '#' },
      { panelLink: 'Membership', href: '#' },
      { panelLink: 'Newsletters', href: '#' },
      { panelLink: 'SEO', href: '#' },
      { panelLink: 'Social Networking', href: '#' },
      { panelLink: 'Utilities', href: '#' },
      { panelLink: 'Widgets', href: '#' },
      { panelLink: 'Miscellaneous', href: '#' },
      { panelLink: 'WordPress Themes on ThemeForest', href: '#' },
    ],
    key: "3"
  },
  {
    panelHeader: 'eCommerce',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "4"
  },
  {
    panelHeader: 'Javascript',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "5"
  },
  {
    panelHeader: 'CSS',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "6"
  },
  {
    panelHeader: 'Mobile',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "7"
  },
  {
    panelHeader: 'HTML5',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "8"
  },
  {
    panelHeader: 'Skins',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "9"
  },
  {
    panelHeader: 'WP Themes',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "10"
  },
  {
    panelHeader: 'Plugins',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "11"
  },
  {
    panelHeader: 'Mockup Generator',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "12"
  },
  {
    panelHeader: 'More',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "13"
  }
]

let RightMenuItems =[
  { menuTxt: 'Guest Cart', href: '#', iconImgSrc: cart },
  { menuTxt: 'Create an Envato Account', href: '#', iconImgSrc: envato },
  { menuTxt: 'Sign In', href: '#', iconImgSrc: signIn },
]

let MainCardsContainerItems =[
  {
    titleHref: '#',
    titleTxt: 'WordPress Themes',
    paraTxt: 'Thousands of WordPress themes',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/wordpress-c4a4c90a55e94cdf642e0d8e6b58795b144aa04d143ac4f010058190a543122f.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-wordpress-802eded4e9613dd2af036a89c30f89137d4b085704137a8c7049ba3dc08a762c.png',
    cardImgAlt: 'WordPress Themes',
  },
  {
    titleHref: '#',
    titleTxt: 'eCommerce Templates',
    paraTxt: 'Beautiful website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/ecommerce-d29cfac809c6b1f7ccc32afc149bef5f1e2a401138811b817a2dee80215c8bc9.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-ecommerce-18342ace866d1ee725057aa0674532adc7bd391fa23ed0c140a8d97ab52a61c3.png',
    cardImgAlt: 'eCommerce Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Site Templates',
    paraTxt: 'HTML and website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/site-templates-45d4d1c09aed48fb32c10ff9ae265250c62023e584a98fc80280f0014ff922ad.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-site-templates-2435295dad697854145e340d3dc130f2265e14881d9f936bee34dfc73b3a6c73.png',
    cardImgAlt: 'Site Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Marketing Templates',
    paraTxt: 'Email, newsletter and landing page templates.',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/marketing-6da58cc5ee144983487963114930eb683157422436d12076b8c4a7f36df14d89.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-marketing-f496a6f8c6684f9becb4f9bcdad23734ae8801663f31b1d9048763ddb1dcddf4.png',
    cardImgAlt: 'Marketing Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'CMS Templates',
    paraTxt: 'Over 1,700 CMS website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/cms-themes-8fd2d0354a939e03d55825ef92e579367d60c1c051a3fe588295cea21cfbedd8.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-cms-themes-35746d842196e741e0fadfdcb8cf32383392137c46da0cfe0413ca4620cbab2f.png',
    cardImgAlt: 'CMS Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Blogging',
    paraTxt: 'Blogger templates and themes',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/blogging-a66e0853408aee82becbeb35f98f8edc35dee1a9475682b7fbc7428ff547400d.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-blogging-7b37c1a9941589af94f8d4225c9fbad018a541c60338704506b00d7005b159bc.png',
    cardImgAlt: 'Blogging',
  }
]

let SubCardsContainer1Items =[
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d',
    imgHref: '#',
    metaTitle: 'Kalles - Clean, Versatile, Responsive Shopify Theme - RTL support',
    metaDes: 'by The4',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
    imgHref: '#',
    metaTitle: 'Discy - Social Questions and Answers WordPress Theme',
    metaDes: 'by 2codeThemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
    imgHref: '#',
    metaTitle: 'Avone - Multipurpose Shopify Theme',
    metaDes: 'by adornthemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
    imgHref: '#',
    metaTitle: 'Rey - Fashion & Clothing, Furniture',
    metaDes: 'by ThemeFuzz',
  },
]
let SubCardsContainer2Items =[
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d',
    imgHref: '#',
    metaTitle: 'Kalles - Clean, Versatile, Responsive Shopify Theme - RTL support',
    metaDes: 'by The4',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
    imgHref: '#',
    metaTitle: 'Discy - Social Questions and Answers WordPress Theme',
    metaDes: 'by 2codeThemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
    imgHref: '#',
    metaTitle: 'Avone - Multipurpose Shopify Theme',
    metaDes: 'by adornthemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
    imgHref: '#',
    metaTitle: 'Rey - Fashion & Clothing, Furniture',
    metaDes: 'by ThemeFuzz',
  }
]


export default function MyApp() {
  return (
    <div  className="body" style={{backgroundColor: '#eceef5'}}>
      <Header 
        TopMenuItems= {TopMenuItems}
        logo= {'https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg'}
        dropdownTxt= {'Our Products'}
        Options={Options}
        menuIconTxt= {'Sign In'}
        NavMenuItems = {NavMenuItems}
        DropdownItems={DropdownItems}
        imgSrcIconLeft= {menu} 
        SelectOptions={SelectOptions}
        Panels={Panels}
        imgSrcIconRight= {user}
        RightMenuItems= {RightMenuItems}
      />
      <div className="mainWrapper">
        <Hero 
          headingTxt={'51,541 WordPress Themes & Website Templates From $2'}
          paraTxt={
            'WordPress themes, web templates and more. Brought to you by the largest global community of creatives.'}
          imgSrc={
            'https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/experiments/hero-image--popular-items-45e049c6e45b12f43ecafdc960d7bb581203b40857dfce5938af6f43627731d4.png'}
          imgAlt={'Best selling themes'}
          btnTxt={'Search'}
          placeholder={'e.g. responsive WordPress'}
        />
        <MainCardsContainer 
            MainCardsContainerItems={MainCardsContainerItems}
            btnTxt={'View All Categories'}
        />
        <SubCardsContainer1 
            SubCardsContainer1Items= {SubCardsContainer1Items}
            btnTxt= {'View all themes'}
        />

        <SubCardsContainer2 
            SubCardsContainer2Items= {SubCardsContainer2Items}
            title= {'Were the largest theme marketplace in the world'}
            card1Txt= {'Home of the most popular themes in the world'}
            card1ImgSrc=
              {'https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/popular-0e4b4113a86af83586b8bfec31da9b73f773837dd936168f719a8ab3c3d3bf9a.svg'}
            card2Txt= {'Clear documentation and theme support available'}
            card2ImgSrc=
              {'https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/support-8f9ed08357bca18207252cd261f5ab3990a1ac33dbec78751eaa480ad89d3ac4.svg'}
            card3Txt= {'Quality reviewed creators and items'}
            card3ImgSrc=
              {'https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/quality-cdf81e8e618357620fcc22f6474aa4c47de3c439a239de26b9dcf13c74b1a96e.svg'}
        />
      </div>
      <Footer1 
         copyRightTxt={'© 2021 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.'}
         HrefsWithImgSrcs= {[
           { imgSrc: Twitter, href: 'https://twitter.com/' },
           { imgSrc: Insta, href: 'https://instagram.com/' },
           { imgSrc: Dribble, href: 'https://dribble.com/' },
           { imgSrc: Youtube, href: 'https://youtube.com/' },
           { imgSrc: Github, href: 'https//github.com' },
         ]}
      />
    </div>
  );
}