// import { Cloud, fetchSimpleIcons } from "react-icon-cloud";
// import { renderSimpleIcon, ICloud, SimpleIcon } from "react-icon-cloud";
// import { skills } from "./skills";
// import React from "react";

// export const cloudProps: Omit<ICloud, 'children'> = {
//   containerProps: {
//     style: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     paddingTop: 40
//     }
//   },
//   // https://www.goat1000.com/tagcanvas-options.php
//   options: {
//     clickToFront: 500,
//     depth: 1,
//     imageScale: 2,
//     initial: [0.1, -0.1],
//     outlineColour: "#0000",
//     reverse: true,
//     tooltip: "native",
//     tooltipDelay: 0,
//     wheelZoom: false
//   }
// }

// export const invertBg = (color: string) => "black";

// export const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
//   return renderSimpleIcon({
//     icon,
//     minContrastRatio: 2,
//     bgHex: bg,
//     size: 42,
//     fallbackHex: invertBg(bg),
//     aProps: {
//       href: undefined,
//       target: undefined,
//       rel: undefined,
//       onClick: (e) => e.preventDefault()
//     }
//   })
// }

// const dummy = {
//     "simpleIcons": {
//         "javascript": {
//             "slug": "javascript",
//             "hex": "#F7DF1E",
//             "title": "JavaScript",
//             "path": "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
//         },
//         "java": {
//             "slug": "java",
//             "hex": "#000",
//             "title": "icon",
//             "path": "Co"
//         },
//         "dart": {
//             "slug": "dart",
//             "hex": "#0175C2",
//             "title": "Dart",
//             "path": "M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"
//         },
//         "typescript": {
//             "slug": "typescript",
//             "hex": "#3178C6",
//             "title": "TypeScript",
//             "path": "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
//         }
//     },
//     "allIcon": {
//         "42": {
//             "hex": "#000000",
//             "title": "42",
//             "slug": "42"
//         },
//         "dotenv": {
//             "hex": "#ECD53F",
//             "title": ".ENV",
//             "slug": "dotenv"
//         },
//         "dotnet": {
//             "hex": "#512BD4",
//             "title": ".NET",
//             "slug": "dotnet"
//         },
//         "e": {
//             "hex": "#000000",
//             "title": "/e/",
//             "slug": "e"
//         },
//         "1dot1dot1dot1": {
//             "hex": "#221E68",
//             "title": "1.1.1.1",
//             "slug": "1dot1dot1dot1"
//         },
//         "1and1": {
//             "hex": "#003D8F",
//             "title": "1&1",
//             "slug": "1and1"
//         },
//         "1001tracklists": {
//             "hex": "#40AEF0",
//             "title": "1001Tracklists",
//             "slug": "1001tracklists"
//         },
//         "1panel": {
//             "hex": "#0854C1",
//             "title": "1Panel",
//             "slug": "1panel"
//         },
//         "1password": {
//             "hex": "#3B66BC",
//             "title": "1Password",
//             "slug": "1password"
//         },
//         "2fas": {
//             "hex": "#EC1C24",
//             "title": "2FAS",
//             "slug": "2fas"
//         },
//         "2k": {
//             "hex": "#DD0700",
//             "title": "2K",
//             "slug": "2k"
//         },
//         "30secondsofcode": {
//             "hex": "#5395FD",
//             "title": "30 seconds of code",
//             "slug": "30secondsofcode"
//         },
//         "365datascience": {
//             "hex": "#000C1F",
//             "title": "365 Data Science",
//             "slug": "365datascience"
//         },
//         "3m": {
//             "hex": "#FF0000",
//             "title": "3M",
//             "slug": "3m"
//         },
//         "4chan": {
//             "hex": "#006600",
//             "title": "4chan",
//             "slug": "4chan"
//         },
//         "4d": {
//             "hex": "#004088",
//             "title": "4D",
//             "slug": "4d"
//         },
//         "500px": {
//             "hex": "#222222",
//             "title": "500px",
//             "slug": "500px"
//         },
//         "7zip": {
//             "hex": "#000000",
//             "title": "7Zip",
//             "slug": "7zip"
//         },
//         "99designs": {
//             "hex": "#FE5F50",
//             "title": "99designs",
//             "slug": "99designs"
//         },
//         "9gag": {
//             "hex": "#000000",
//             "title": "9GAG",
//             "slug": "9gag"
//         },
//         "aframe": {
//             "hex": "#EF2D5E",
//             "title": "A-Frame",
//             "slug": "aframe"
//         },
//         "abbrobotstudio": {
//             "hex": "#FF9E0F",
//             "title": "ABB RobotStudio",
//             "slug": "abbrobotstudio"
//         },
//         "abbott": {
//             "hex": "#008FC7",
//             "title": "Abbott",
//             "slug": "abbott"
//         },
//         "abbvie": {
//             "hex": "#071D49",
//             "title": "Abbvie",
//             "slug": "abbvie"
//         },
//         "aboutdotme": {
//             "hex": "#333333",
//             "title": "About.me",
//             "slug": "aboutdotme"
//         },
//         "abstract": {
//             "hex": "#191A1B",
//             "title": "Abstract",
//             "slug": "abstract"
//         },
//         "abusedotch": {
//             "hex": "#00465B",
//             "title": "abuse.ch",
//             "slug": "abusedotch"
//         },
//         "academia": {
//             "hex": "#41454A",
//             "title": "Academia",
//             "slug": "academia"
//         },
//         "accenture": {
//             "hex": "#A100FF",
//             "title": "Accenture",
//             "slug": "accenture"
//         },
//         "accusoft": {
//             "hex": "#A9225C",
//             "title": "Accusoft",
//             "slug": "accusoft"
//         },
//         "accuweather": {
//             "hex": "#FF6600",
//             "title": "AccuWeather",
//             "slug": "accuweather"
//         },
//         "acer": {
//             "hex": "#83B81A",
//             "title": "Acer",
//             "slug": "acer"
//         },
//         "acm": {
//             "hex": "#0085CA",
//             "title": "ACM",
//             "slug": "acm"
//         },
//         "actigraph": {
//             "hex": "#0B2C4A",
//             "title": "ActiGraph",
//             "slug": "actigraph"
//         },
//         "activision": {
//             "hex": "#000000",
//             "title": "Activision",
//             "slug": "activision"
//         },
//         "activitypub": {
//             "hex": "#F1007E",
//             "title": "ActivityPub",
//             "slug": "activitypub"
//         },
//         "actix": {
//             "hex": "#000000",
//             "title": "Actix",
//             "slug": "actix"
//         },
//         "actualbudget": {
//             "hex": "#6B46C1",
//             "title": "Actual Budget",
//             "slug": "actualbudget"
//         },
//         "acura": {
//             "hex": "#000000",
//             "title": "Acura",
//             "slug": "acura"
//         },
//         "adafruit": {
//             "hex": "#000000",
//             "title": "Adafruit",
//             "slug": "adafruit"
//         },
//         "adblock": {
//             "hex": "#F40D12",
//             "title": "AdBlock",
//             "slug": "adblock"
//         },
//         "adblockplus": {
//             "hex": "#C70D2C",
//             "title": "Adblock Plus",
//             "slug": "adblockplus"
//         },
//         "addydotio": {
//             "hex": "#19216C",
//             "title": "addy.io",
//             "slug": "addydotio"
//         },
//         "adguard": {
//             "hex": "#68BC71",
//             "title": "AdGuard",
//             "slug": "adguard"
//         },
//         "adidas": {
//             "hex": "#000000",
//             "title": "Adidas",
//             "slug": "adidas"
//         },
//         "adminer": {
//             "hex": "#34567C",
//             "title": "Adminer",
//             "slug": "adminer"
//         },
//         "adonisjs": {
//             "hex": "#5A45FF",
//             "title": "AdonisJS",
//             "slug": "adonisjs"
//         },
//         "adp": {
//             "hex": "#D0271D",
//             "title": "ADP",
//             "slug": "adp"
//         },
//         "adroll": {
//             "hex": "#0DBDFF",
//             "title": "Adroll",
//             "slug": "adroll"
//         },
//         "adventofcode": {
//             "hex": "#FFFF66",
//             "title": "Advent Of Code",
//             "slug": "adventofcode"
//         },
//         "adyen": {
//             "hex": "#0ABF53",
//             "title": "Adyen",
//             "slug": "adyen"
//         },
//         "aegisauthenticator": {
//             "hex": "#005E9D",
//             "title": "Aegis Authenticator",
//             "slug": "aegisauthenticator"
//         },
//         "aerlingus": {
//             "hex": "#006272",
//             "title": "Aer Lingus",
//             "slug": "aerlingus"
//         },
//         "aeroflot": {
//             "hex": "#02458D",
//             "title": "Aeroflot",
//             "slug": "aeroflot"
//         },
//         "aeromexico": {
//             "hex": "#0B2343",
//             "title": "Aeroméxico",
//             "slug": "aeromexico"
//         },
//         "aerospike": {
//             "hex": "#C22127",
//             "title": "Aerospike",
//             "slug": "aerospike"
//         },
//         "aew": {
//             "hex": "#000000",
//             "title": "AEW",
//             "slug": "aew"
//         },
//         "afdian": {
//             "hex": "#946CE6",
//             "title": "AFDIAN",
//             "slug": "afdian"
//         },
//         "affine": {
//             "hex": "#1E96EB",
//             "title": "AFFiNE",
//             "slug": "affine"
//         },
//         "affinity": {
//             "hex": "#222324",
//             "title": "Affinity",
//             "slug": "affinity"
//         },
//         "affinitydesigner": {
//             "hex": "#134881",
//             "title": "Affinity Designer",
//             "slug": "affinitydesigner"
//         },
//         "affinityphoto": {
//             "hex": "#4E3188",
//             "title": "Affinity Photo",
//             "slug": "affinityphoto"
//         },
//         "affinitypublisher": {
//             "hex": "#891B26",
//             "title": "Affinity Publisher",
//             "slug": "affinitypublisher"
//         },
//         "afterpay": {
//             "hex": "#B2FCE4",
//             "title": "Afterpay",
//             "slug": "afterpay"
//         },
//         "aftership": {
//             "hex": "#FF6B2B",
//             "title": "AfterShip",
//             "slug": "aftership"
//         },
//         "agora": {
//             "hex": "#099DFD",
//             "title": "Agora",
//             "slug": "agora"
//         },
//         "aidungeon": {
//             "hex": "#000000",
//             "title": "AI Dungeon",
//             "slug": "aidungeon"
//         },
//         "aib": {
//             "hex": "#7F2B7B",
//             "title": "AIB",
//             "slug": "aib"
//         },
//         "aiohttp": {
//             "hex": "#2C5BB4",
//             "title": "AIOHTTP",
//             "slug": "aiohttp"
//         },
//         "aiqfome": {
//             "hex": "#7A1FA2",
//             "title": "Aiqfome",
//             "slug": "aiqfome"
//         },
//         "aircanada": {
//             "hex": "#F01428",
//             "title": "Air Canada",
//             "slug": "aircanada"
//         },
//         "airchina": {
//             "hex": "#E30E17",
//             "title": "Air China",
//             "slug": "airchina"
//         },
//         "airfrance": {
//             "hex": "#002157",
//             "title": "Air France",
//             "slug": "airfrance"
//         },
//         "airindia": {
//             "hex": "#DA0E29",
//             "title": "Air India",
//             "slug": "airindia"
//         },
//         "airserbia": {
//             "hex": "#0E203F",
//             "title": "Air Serbia",
//             "slug": "airserbia"
//         },
//         "airtransat": {
//             "hex": "#172B54",
//             "title": "Air Transat",
//             "slug": "airtransat"
//         },
//         "airasia": {
//             "hex": "#FF0000",
//             "title": "AirAsia",
//             "slug": "airasia"
//         },
//         "airbnb": {
//             "hex": "#FF5A5F",
//             "title": "Airbnb",
//             "slug": "airbnb"
//         },
//         "airbrake": {
//             "hex": "#FFA500",
//             "title": "Airbrake",
//             "slug": "airbrake"
//         },
//         "airbus": {
//             "hex": "#00205B",
//             "title": "Airbus",
//             "slug": "airbus"
//         },
//         "airbyte": {
//             "hex": "#615EFF",
//             "title": "Airbyte",
//             "slug": "airbyte"
//         },
//         "aircall": {
//             "hex": "#00B388",
//             "title": "Aircall",
//             "slug": "aircall"
//         },
//         "airplayaudio": {
//             "hex": "#000000",
//             "title": "AirPlay Audio",
//             "slug": "airplayaudio"
//         },
//         "airplayvideo": {
//             "hex": "#000000",
//             "title": "AirPlay Video",
//             "slug": "airplayvideo"
//         },
//         "airtable": {
//             "hex": "#18BFFF",
//             "title": "Airtable",
//             "slug": "airtable"
//         },
//         "airtel": {
//             "hex": "#E40000",
//             "title": "Airtel",
//             "slug": "airtel"
//         },
//         "ajv": {
//             "hex": "#23C8D2",
//             "title": "Ajv",
//             "slug": "ajv"
//         },
//         "akamai": {
//             "hex": "#0096D6",
//             "title": "Akamai",
//             "slug": "akamai"
//         },
//         "akasaair": {
//             "hex": "#FF6300",
//             "title": "Akasa Air",
//             "slug": "akasaair"
//         },
//         "akaunting": {
//             "hex": "#6DA252",
//             "title": "Akaunting",
//             "slug": "akaunting"
//         },
//         "akiflow": {
//             "hex": "#AF38F9",
//             "title": "Akiflow",
//             "slug": "akiflow"
//         },
//         "alacritty": {
//             "hex": "#F46D01",
//             "title": "Alacritty",
//             "slug": "alacritty"
//         },
//         "alamy": {
//             "hex": "#00FF7B",
//             "title": "Alamy",
//             "slug": "alamy"
//         },
//         "albertheijn": {
//             "hex": "#04ACE6",
//             "title": "Albert Heijn",
//             "slug": "albertheijn"
//         },
//         "alby": {
//             "hex": "#FFDF6F",
//             "title": "Alby",
//             "slug": "alby"
//         },
//         "alchemy": {
//             "hex": "#0C0C0E",
//             "title": "Alchemy",
//             "slug": "alchemy"
//         },
//         "aldinord": {
//             "hex": "#2490D7",
//             "title": "Aldi Nord",
//             "slug": "aldinord"
//         },
//         "aldisud": {
//             "hex": "#00005F",
//             "title": "Aldi Süd",
//             "slug": "aldisud"
//         },
//         "alfaromeo": {
//             "hex": "#981E32",
//             "title": "Alfa Romeo",
//             "slug": "alfaromeo"
//         },
//         "alfred": {
//             "hex": "#5C1F87",
//             "title": "Alfred",
//             "slug": "alfred"
//         },
//         "algolia": {
//             "hex": "#003DFF",
//             "title": "Algolia",
//             "slug": "algolia"
//         },
//         "algorand": {
//             "hex": "#000000",
//             "title": "Algorand",
//             "slug": "algorand"
//         },
//         "alibabacloud": {
//             "hex": "#FF6A00",
//             "title": "Alibaba Cloud",
//             "slug": "alibabacloud"
//         },
//         "alibabadotcom": {
//             "hex": "#FF6A00",
//             "title": "Alibaba.com",
//             "slug": "alibabadotcom"
//         },
//         "alienware": {
//             "hex": "#541BAE",
//             "title": "Alienware",
//             "slug": "alienware"
//         },
//         "aliexpress": {
//             "hex": "#FF4747",
//             "title": "AliExpress",
//             "slug": "aliexpress"
//         },
//         "alipay": {
//             "hex": "#1677FF",
//             "title": "Alipay",
//             "slug": "alipay"
//         },
//         "allegro": {
//             "hex": "#FF5A00",
//             "title": "Allegro",
//             "slug": "allegro"
//         },
//         "alliedmodders": {
//             "hex": "#1578D3",
//             "title": "AlliedModders",
//             "slug": "alliedmodders"
//         },
//         "allocine": {
//             "hex": "#FECC00",
//             "title": "AlloCiné",
//             "slug": "allocine"
//         },
//         "alltrails": {
//             "hex": "#142800",
//             "title": "AllTrails",
//             "slug": "alltrails"
//         },
//         "almalinux": {
//             "hex": "#000000",
//             "title": "AlmaLinux",
//             "slug": "almalinux"
//         },
//         "alpinelinux": {
//             "hex": "#0D597F",
//             "title": "Alpine Linux",
//             "slug": "alpinelinux"
//         },
//         "alpinedotjs": {
//             "hex": "#8BC0D0",
//             "title": "Alpine.js",
//             "slug": "alpinedotjs"
//         },
//         "alternativeto": {
//             "hex": "#0289D5",
//             "title": "AlternativeTo",
//             "slug": "alternativeto"
//         },
//         "alteryx": {
//             "hex": "#0078C0",
//             "title": "Alteryx",
//             "slug": "alteryx"
//         },
//         "altiumdesigner": {
//             "hex": "#A5915F",
//             "title": "Altium Designer",
//             "slug": "altiumdesigner"
//         },
//         "alwaysdata": {
//             "hex": "#E9568E",
//             "title": "Alwaysdata",
//             "slug": "alwaysdata"
//         },
//         "alx": {
//             "hex": "#002B56",
//             "title": "ALX",
//             "slug": "alx"
//         },
//         "amazon": {
//             "hex": "#FF9900",
//             "title": "Amazon",
//             "slug": "amazon"
//         },
//         "amazonalexa": {
//             "hex": "#00CAFF",
//             "title": "Amazon Alexa",
//             "slug": "amazonalexa"
//         },
//         "amazonapigateway": {
//             "hex": "#FF4F8B",
//             "title": "Amazon API Gateway",
//             "slug": "amazonapigateway"
//         },
//         "amazoncloudwatch": {
//             "hex": "#FF4F8B",
//             "title": "Amazon CloudWatch",
//             "slug": "amazoncloudwatch"
//         },
//         "amazoncognito": {
//             "hex": "#DD344C",
//             "title": "Amazon Cognito",
//             "slug": "amazoncognito"
//         },
//         "amazondocumentdb": {
//             "hex": "#C925D1",
//             "title": "Amazon DocumentDB",
//             "slug": "amazondocumentdb"
//         },
//         "amazondynamodb": {
//             "hex": "#4053D6",
//             "title": "Amazon DynamoDB",
//             "slug": "amazondynamodb"
//         },
//         "amazonec2": {
//             "hex": "#FF9900",
//             "title": "Amazon EC2",
//             "slug": "amazonec2"
//         },
//         "amazonecs": {
//             "hex": "#FF9900",
//             "title": "Amazon ECS",
//             "slug": "amazonecs"
//         },
//         "amazoneks": {
//             "hex": "#FF9900",
//             "title": "Amazon EKS",
//             "slug": "amazoneks"
//         },
//         "amazonelasticache": {
//             "hex": "#C925D1",
//             "title": "Amazon ElastiCache",
//             "slug": "amazonelasticache"
//         },
//         "amazonfiretv": {
//             "hex": "#FC4C02",
//             "title": "Amazon Fire TV",
//             "slug": "amazonfiretv"
//         },
//         "amazongames": {
//             "hex": "#FF9900",
//             "title": "Amazon Games",
//             "slug": "amazongames"
//         },
//         "amazonidentityaccessmanagement": {
//             "hex": "#DD344C",
//             "title": "Amazon Identity Access Management",
//             "slug": "amazonidentityaccessmanagement"
//         },
//         "amazonlumberyard": {
//             "hex": "#66459B",
//             "title": "Amazon Lumberyard",
//             "slug": "amazonlumberyard"
//         },
//         "amazonluna": {
//             "hex": "#9146FF",
//             "title": "Amazon Luna",
//             "slug": "amazonluna"
//         },
//         "amazonmusic": {
//             "hex": "#46C3D0",
//             "title": "Amazon Music",
//             "slug": "amazonmusic"
//         },
//         "amazonpay": {
//             "hex": "#FF9900",
//             "title": "Amazon Pay",
//             "slug": "amazonpay"
//         },
//         "amazonprime": {
//             "hex": "#00A8E1",
//             "title": "Amazon Prime",
//             "slug": "amazonprime"
//         },
//         "amazonrds": {
//             "hex": "#527FFF",
//             "title": "Amazon RDS",
//             "slug": "amazonrds"
//         },
//         "amazonredshift": {
//             "hex": "#8C4FFF",
//             "title": "Amazon Redshift",
//             "slug": "amazonredshift"
//         },
//         "amazonroute53": {
//             "hex": "#8C4FFF",
//             "title": "Amazon Route 53",
//             "slug": "amazonroute53"
//         },
//         "amazons3": {
//             "hex": "#569A31",
//             "title": "Amazon S3",
//             "slug": "amazons3"
//         },
//         "amazonsimpleemailservice": {
//             "hex": "#DD344C",
//             "title": "Amazon Simple Email Service",
//             "slug": "amazonsimpleemailservice"
//         },
//         "amazonsqs": {
//             "hex": "#FF4F8B",
//             "title": "Amazon SQS",
//             "slug": "amazonsqs"
//         },
//         "amazonwebservices": {
//             "hex": "#232F3E",
//             "title": "Amazon Web Services",
//             "slug": "amazonwebservices"
//         },
//         "amd": {
//             "hex": "#ED1C24",
//             "title": "AMD",
//             "slug": "amd"
//         },
//         "ameba": {
//             "hex": "#2D8C3C",
//             "title": "Ameba",
//             "slug": "ameba"
//         },
//         "americanairlines": {
//             "hex": "#0078D2",
//             "title": "American Airlines",
//             "slug": "americanairlines"
//         },
//         "americanexpress": {
//             "hex": "#2E77BC",
//             "title": "American Express",
//             "slug": "americanexpress"
//         },
//         "amg": {
//             "hex": "#000000",
//             "title": "AMG",
//             "slug": "amg"
//         },
//         "amp": {
//             "hex": "#005AF0",
//             "title": "AMP",
//             "slug": "amp"
//         },
//         "amul": {
//             "hex": "#ED1D24",
//             "title": "Amul",
//             "slug": "amul"
//         },
//         "ana": {
//             "hex": "#13448F",
//             "title": "ANA",
//             "slug": "ana"
//         },
//         "anaconda": {
//             "hex": "#44A833",
//             "title": "Anaconda",
//             "slug": "anaconda"
//         },
//         "analogue": {
//             "hex": "#1A1A1A",
//             "title": "Analogue",
//             "slug": "analogue"
//         },
//         "andela": {
//             "hex": "#173B3F",
//             "title": "Andela",
//             "slug": "andela"
//         },
//         "android": {
//             "hex": "#34A853",
//             "title": "Android",
//             "slug": "android"
//         },
//         "androidauto": {
//             "hex": "#3DDC84",
//             "title": "Android Auto",
//             "slug": "androidauto"
//         },
//         "androidstudio": {
//             "hex": "#3DDC84",
//             "title": "Android Studio",
//             "slug": "androidstudio"
//         },
//         "angular": {
//             "hex": "#0F0F11",
//             "title": "Angular",
//             "slug": "angular"
//         },
//         "anilist": {
//             "hex": "#02A9FF",
//             "title": "AniList",
//             "slug": "anilist"
//         },
//         "animalplanet": {
//             "hex": "#0073FF",
//             "title": "Animal Planet",
//             "slug": "animalplanet"
//         },
//         "ankermake": {
//             "hex": "#88F387",
//             "title": "AnkerMake",
//             "slug": "ankermake"
//         },
//         "anki": {
//             "hex": "#80C2EE",
//             "title": "Anki",
//             "slug": "anki"
//         },
//         "ansible": {
//             "hex": "#EE0000",
//             "title": "Ansible",
//             "slug": "ansible"
//         },
//         "answer": {
//             "hex": "#0033FF",
//             "title": "Answer",
//             "slug": "answer"
//         },
//         "ansys": {
//             "hex": "#FFB71B",
//             "title": "Ansys",
//             "slug": "ansys"
//         },
//         "antdesign": {
//             "hex": "#0170FE",
//             "title": "Ant Design",
//             "slug": "antdesign"
//         },
//         "anta": {
//             "hex": "#D70010",
//             "title": "Anta",
//             "slug": "anta"
//         },
//         "antena3": {
//             "hex": "#FF7328",
//             "title": "Antena 3",
//             "slug": "antena3"
//         },
//         "anthropic": {
//             "hex": "#191919",
//             "title": "Anthropic",
//             "slug": "anthropic"
//         },
//         "antv": {
//             "hex": "#8B5DFF",
//             "title": "AntV",
//             "slug": "antv"
//         },
//         "anycubic": {
//             "hex": "#476695",
//             "title": "Anycubic",
//             "slug": "anycubic"
//         },
//         "anydesk": {
//             "hex": "#EF443B",
//             "title": "AnyDesk",
//             "slug": "anydesk"
//         },
//         "anytype": {
//             "hex": "#FF6A7B",
//             "title": "Anytype",
//             "slug": "anytype"
//         },
//         "aol": {
//             "hex": "#3399FF",
//             "title": "AOL",
//             "slug": "aol"
//         },
//         "apache": {
//             "hex": "#D22128",
//             "title": "Apache",
//             "slug": "apache"
//         },
//         "apacheairflow": {
//             "hex": "#017CEE",
//             "title": "Apache Airflow",
//             "slug": "apacheairflow"
//         },
//         "apacheant": {
//             "hex": "#A81C7D",
//             "title": "Apache Ant",
//             "slug": "apacheant"
//         },
//         "apachecassandra": {
//             "hex": "#1287B1",
//             "title": "Apache Cassandra",
//             "slug": "apachecassandra"
//         },
//         "apachecloudstack": {
//             "hex": "#2AA5DC",
//             "title": "Apache CloudStack",
//             "slug": "apachecloudstack"
//         },
//         "apachecordova": {
//             "hex": "#E8E8E8",
//             "title": "Apache Cordova",
//             "slug": "apachecordova"
//         },
//         "apachecouchdb": {
//             "hex": "#E42528",
//             "title": "Apache CouchDB",
//             "slug": "apachecouchdb"
//         },
//         "apachedolphinscheduler": {
//             "hex": "#85CDF0",
//             "title": "Apache DolphinScheduler",
//             "slug": "apachedolphinscheduler"
//         },
//         "apachedruid": {
//             "hex": "#29F1FB",
//             "title": "Apache Druid",
//             "slug": "apachedruid"
//         },
//         "apacheecharts": {
//             "hex": "#AA344D",
//             "title": "Apache ECharts",
//             "slug": "apacheecharts"
//         },
//         "apacheflink": {
//             "hex": "#E6526F",
//             "title": "Apache Flink",
//             "slug": "apacheflink"
//         },
//         "apachefreemarker": {
//             "hex": "#326CAC",
//             "title": "Apache FreeMarker",
//             "slug": "apachefreemarker"
//         },
//         "apachegroovy": {
//             "hex": "#4298B8",
//             "title": "Apache Groovy",
//             "slug": "apachegroovy"
//         },
//         "apacheguacamole": {
//             "hex": "#578B34",
//             "title": "Apache Guacamole",
//             "slug": "apacheguacamole"
//         },
//         "apachehadoop": {
//             "hex": "#66CCFF",
//             "title": "Apache Hadoop",
//             "slug": "apachehadoop"
//         },
//         "apachehbase": {
//             "hex": "#BE160C",
//             "title": "Apache HBase",
//             "slug": "apachehbase"
//         },
//         "apachehive": {
//             "hex": "#FDEE21",
//             "title": "Apache Hive",
//             "slug": "apachehive"
//         },
//         "apachejmeter": {
//             "hex": "#D22128",
//             "title": "Apache JMeter",
//             "slug": "apachejmeter"
//         },
//         "apachekafka": {
//             "hex": "#231F20",
//             "title": "Apache Kafka",
//             "slug": "apachekafka"
//         },
//         "apachekylin": {
//             "hex": "#F09D13",
//             "title": "Apache Kylin",
//             "slug": "apachekylin"
//         },
//         "apachelucene": {
//             "hex": "#019B8F",
//             "title": "Apache Lucene",
//             "slug": "apachelucene"
//         },
//         "apachemaven": {
//             "hex": "#C71A36",
//             "title": "Apache Maven",
//             "slug": "apachemaven"
//         },
//         "apachenetbeanside": {
//             "hex": "#1B6AC6",
//             "title": "Apache NetBeans IDE",
//             "slug": "apachenetbeanside"
//         },
//         "apachenifi": {
//             "hex": "#728E9B",
//             "title": "Apache NiFi",
//             "slug": "apachenifi"
//         },
//         "apacheopenoffice": {
//             "hex": "#0E85CD",
//             "title": "Apache OpenOffice",
//             "slug": "apacheopenoffice"
//         },
//         "apacheparquet": {
//             "hex": "#50ABF1",
//             "title": "Apache Parquet",
//             "slug": "apacheparquet"
//         },
//         "apachepulsar": {
//             "hex": "#188FFF",
//             "title": "Apache Pulsar",
//             "slug": "apachepulsar"
//         },
//         "apacherocketmq": {
//             "hex": "#D77310",
//             "title": "Apache RocketMQ",
//             "slug": "apacherocketmq"
//         },
//         "apachesolr": {
//             "hex": "#D9411E",
//             "title": "Apache Solr",
//             "slug": "apachesolr"
//         },
//         "apachespark": {
//             "hex": "#E25A1C",
//             "title": "Apache Spark",
//             "slug": "apachespark"
//         },
//         "apachestorm": {
//             "hex": "#225593",
//             "title": "Apache Storm",
//             "slug": "apachestorm"
//         },
//         "apachesuperset": {
//             "hex": "#20A6C9",
//             "title": "Apache Superset",
//             "slug": "apachesuperset"
//         },
//         "apachetomcat": {
//             "hex": "#F8DC75",
//             "title": "Apache Tomcat",
//             "slug": "apachetomcat"
//         },
//         "aparat": {
//             "hex": "#ED145B",
//             "title": "Aparat",
//             "slug": "aparat"
//         },
//         "apifox": {
//             "hex": "#F44A53",
//             "title": "Apifox",
//             "slug": "apifox"
//         },
//         "apmterminals": {
//             "hex": "#FF6441",
//             "title": "APM Terminals",
//             "slug": "apmterminals"
//         },
//         "apollographql": {
//             "hex": "#311C87",
//             "title": "Apollo GraphQL",
//             "slug": "apollographql"
//         },
//         "apostrophe": {
//             "hex": "#6236FF",
//             "title": "Apostrophe",
//             "slug": "apostrophe"
//         },
//         "appstore": {
//             "hex": "#0D96F6",
//             "title": "App Store",
//             "slug": "appstore"
//         },
//         "appgallery": {
//             "hex": "#FF0000",
//             "title": "AppGallery",
//             "slug": "appgallery"
//         },
//         "appian": {
//             "hex": "#2322F0",
//             "title": "Appian",
//             "slug": "appian"
//         },
//         "appium": {
//             "hex": "#EE376D",
//             "title": "Appium",
//             "slug": "appium"
//         },
//         "apple": {
//             "hex": "#000000",
//             "title": "Apple",
//             "slug": "apple"
//         },
//         "applearcade": {
//             "hex": "#000000",
//             "title": "Apple Arcade",
//             "slug": "applearcade"
//         },
//         "applemusic": {
//             "hex": "#FA243C",
//             "title": "Apple Music",
//             "slug": "applemusic"
//         },
//         "applenews": {
//             "hex": "#FD415E",
//             "title": "Apple News",
//             "slug": "applenews"
//         },
//         "applepay": {
//             "hex": "#000000",
//             "title": "Apple Pay",
//             "slug": "applepay"
//         },
//         "applepodcasts": {
//             "hex": "#9933CC",
//             "title": "Apple Podcasts",
//             "slug": "applepodcasts"
//         },
//         "appletv": {
//             "hex": "#000000",
//             "title": "Apple TV",
//             "slug": "appletv"
//         },
//         "appsignal": {
//             "hex": "#21375A",
//             "title": "AppSignal",
//             "slug": "appsignal"
//         },
//         "appsmith": {
//             "hex": "#2A2F3D",
//             "title": "Appsmith",
//             "slug": "appsmith"
//         },
//         "appveyor": {
//             "hex": "#00B3E0",
//             "title": "AppVeyor",
//             "slug": "appveyor"
//         },
//         "appwrite": {
//             "hex": "#FD366E",
//             "title": "Appwrite",
//             "slug": "appwrite"
//         },
//         "aqua": {
//             "hex": "#1904DA",
//             "title": "Aqua",
//             "slug": "aqua"
//         },
//         "aral": {
//             "hex": "#0063CB",
//             "title": "ARAL",
//             "slug": "aral"
//         },
//         "arangodb": {
//             "hex": "#DDE072",
//             "title": "ArangoDB",
//             "slug": "arangodb"
//         },
//         "arc": {
//             "hex": "#FCBFBD",
//             "title": "Arc",
//             "slug": "arc"
//         },
//         "arcgis": {
//             "hex": "#2C7AC3",
//             "title": "ArcGIS",
//             "slug": "arcgis"
//         },
//         "archlinux": {
//             "hex": "#1793D1",
//             "title": "Arch Linux",
//             "slug": "archlinux"
//         },
//         "archicad": {
//             "hex": "#2D50A5",
//             "title": "Archicad",
//             "slug": "archicad"
//         },
//         "archiveofourown": {
//             "hex": "#990000",
//             "title": "Archive of Our Own",
//             "slug": "archiveofourown"
//         },
//         "ardour": {
//             "hex": "#C61C3E",
//             "title": "Ardour",
//             "slug": "ardour"
//         },
//         "arduino": {
//             "hex": "#00878F",
//             "title": "Arduino",
//             "slug": "arduino"
//         },
//         "argo": {
//             "hex": "#EF7B4D",
//             "title": "Argo",
//             "slug": "argo"
//         },
//         "argos": {
//             "hex": "#DA291C",
//             "title": "Argos",
//             "slug": "argos"
//         },
//         "ariakit": {
//             "hex": "#007ACC",
//             "title": "Ariakit",
//             "slug": "ariakit"
//         },
//         "arkecosystem": {
//             "hex": "#C9292C",
//             "title": "ARK Ecosystem",
//             "slug": "arkecosystem"
//         },
//         "arlo": {
//             "hex": "#49B48A",
//             "title": "Arlo",
//             "slug": "arlo"
//         },
//         "arm": {
//             "hex": "#0091BD",
//             "title": "Arm",
//             "slug": "arm"
//         },
//         "armkeil": {
//             "hex": "#394049",
//             "title": "Arm Keil",
//             "slug": "armkeil"
//         },
//         "arstechnica": {
//             "hex": "#FF4E00",
//             "title": "Ars Technica",
//             "slug": "arstechnica"
//         },
//         "artifacthub": {
//             "hex": "#417598",
//             "title": "Artifact Hub",
//             "slug": "artifacthub"
//         },
//         "artixlinux": {
//             "hex": "#10A0CC",
//             "title": "Artix Linux",
//             "slug": "artixlinux"
//         },
//         "artstation": {
//             "hex": "#13AFF0",
//             "title": "ArtStation",
//             "slug": "artstation"
//         },
//         "arxiv": {
//             "hex": "#B31B1B",
//             "title": "arXiv",
//             "slug": "arxiv"
//         },
//         "asahilinux": {
//             "hex": "#A61200",
//             "title": "Asahi Linux",
//             "slug": "asahilinux"
//         },
//         "asana": {
//             "hex": "#F06A6A",
//             "title": "Asana",
//             "slug": "asana"
//         },
//         "asciidoctor": {
//             "hex": "#E40046",
//             "title": "Asciidoctor",
//             "slug": "asciidoctor"
//         },
//         "asciinema": {
//             "hex": "#D40000",
//             "title": "asciinema",
//             "slug": "asciinema"
//         },
//         "asda": {
//             "hex": "#68A51C",
//             "title": "ASDA",
//             "slug": "asda"
//         },
//         "aseprite": {
//             "hex": "#7D929E",
//             "title": "Aseprite",
//             "slug": "aseprite"
//         },
//         "assemblyscript": {
//             "hex": "#007AAC",
//             "title": "AssemblyScript",
//             "slug": "assemblyscript"
//         },
//         "asterisk": {
//             "hex": "#F68F1E",
//             "title": "Asterisk",
//             "slug": "asterisk"
//         },
//         "astonmartin": {
//             "hex": "#00665E",
//             "title": "Aston Martin",
//             "slug": "astonmartin"
//         },
//         "astra": {
//             "hex": "#5C2EDE",
//             "title": "Astra",
//             "slug": "astra"
//         },
//         "astral": {
//             "hex": "#261230",
//             "title": "Astral",
//             "slug": "astral"
//         },
//         "astro": {
//             "hex": "#BC52EE",
//             "title": "Astro",
//             "slug": "astro"
//         },
//         "asus": {
//             "hex": "#000000",
//             "title": "ASUS",
//             "slug": "asus"
//         },
//         "atandt": {
//             "hex": "#009FDB",
//             "title": "AT&T",
//             "slug": "atandt"
//         },
//         "atari": {
//             "hex": "#E4202E",
//             "title": "Atari",
//             "slug": "atari"
//         },
//         "atlasos": {
//             "hex": "#1A91FF",
//             "title": "AtlasOS",
//             "slug": "atlasos"
//         },
//         "atlassian": {
//             "hex": "#0052CC",
//             "title": "Atlassian",
//             "slug": "atlassian"
//         },
//         "auchan": {
//             "hex": "#D6180B",
//             "title": "Auchan",
//             "slug": "auchan"
//         },
//         "audacity": {
//             "hex": "#0000CC",
//             "title": "Audacity",
//             "slug": "audacity"
//         },
//         "audi": {
//             "hex": "#BB0A30",
//             "title": "Audi",
//             "slug": "audi"
//         },
//         "audible": {
//             "hex": "#F8991C",
//             "title": "Audible",
//             "slug": "audible"
//         },
//         "audiotechnica": {
//             "hex": "#000000",
//             "title": "Audio-Technica",
//             "slug": "audiotechnica"
//         },
//         "audiobookshelf": {
//             "hex": "#82612C",
//             "title": "Audiobookshelf",
//             "slug": "audiobookshelf"
//         },
//         "audioboom": {
//             "hex": "#007CE2",
//             "title": "Audioboom",
//             "slug": "audioboom"
//         },
//         "audiomack": {
//             "hex": "#FFA200",
//             "title": "Audiomack",
//             "slug": "audiomack"
//         },
//         "aurelia": {
//             "hex": "#ED2B88",
//             "title": "Aurelia",
//             "slug": "aurelia"
//         },
//         "auth0": {
//             "hex": "#EB5424",
//             "title": "Auth0",
//             "slug": "auth0"
//         },
//         "authelia": {
//             "hex": "#113155",
//             "title": "Authelia",
//             "slug": "authelia"
//         },
//         "authentik": {
//             "hex": "#FD4B2D",
//             "title": "Authentik",
//             "slug": "authentik"
//         },
//         "authy": {
//             "hex": "#EC1C24",
//             "title": "Authy",
//             "slug": "authy"
//         },
//         "autocad": {
//             "hex": "#E51050",
//             "title": "AutoCAD",
//             "slug": "autocad"
//         },
//         "autocannon": {
//             "hex": "#3BA4B7",
//             "title": "AutoCannon",
//             "slug": "autocannon"
//         },
//         "autodesk": {
//             "hex": "#000000",
//             "title": "Autodesk",
//             "slug": "autodesk"
//         },
//         "autodeskmaya": {
//             "hex": "#37A5CC",
//             "title": "Autodesk Maya",
//             "slug": "autodeskmaya"
//         },
//         "autodeskrevit": {
//             "hex": "#186BFF",
//             "title": "Autodesk Revit",
//             "slug": "autodeskrevit"
//         },
//         "autohotkey": {
//             "hex": "#334455",
//             "title": "AutoHotkey",
//             "slug": "autohotkey"
//         },
//         "autoit": {
//             "hex": "#5D83AC",
//             "title": "AutoIt",
//             "slug": "autoit"
//         },
//         "automattic": {
//             "hex": "#3499CD",
//             "title": "Automattic",
//             "slug": "automattic"
//         },
//         "autoprefixer": {
//             "hex": "#DD3735",
//             "title": "Autoprefixer",
//             "slug": "autoprefixer"
//         },
//         "autozone": {
//             "hex": "#D52B1E",
//             "title": "AutoZone",
//             "slug": "autozone"
//         },
//         "avajs": {
//             "hex": "#4B4B77",
//             "title": "avajs",
//             "slug": "avajs"
//         },
//         "avast": {
//             "hex": "#FF7800",
//             "title": "Avast",
//             "slug": "avast"
//         },
//         "avianca": {
//             "hex": "#FF0000",
//             "title": "avianca",
//             "slug": "avianca"
//         },
//         "avira": {
//             "hex": "#E02027",
//             "title": "Avira",
//             "slug": "avira"
//         },
//         "awesomelists": {
//             "hex": "#FC60A8",
//             "title": "Awesome Lists",
//             "slug": "awesomelists"
//         },
//         "awesomewm": {
//             "hex": "#535D6C",
//             "title": "awesomeWM",
//             "slug": "awesomewm"
//         },
//         "awsamplify": {
//             "hex": "#FF9900",
//             "title": "AWS Amplify",
//             "slug": "awsamplify"
//         },
//         "awselasticloadbalancing": {
//             "hex": "#8C4FFF",
//             "title": "AWS Elastic Load Balancing",
//             "slug": "awselasticloadbalancing"
//         },
//         "awsfargate": {
//             "hex": "#FF9900",
//             "title": "AWS Fargate",
//             "slug": "awsfargate"
//         },
//         "awslambda": {
//             "hex": "#FF9900",
//             "title": "AWS Lambda",
//             "slug": "awslambda"
//         },
//         "awsorganizations": {
//             "hex": "#E7157B",
//             "title": "AWS Organizations",
//             "slug": "awsorganizations"
//         },
//         "awssecretsmanager": {
//             "hex": "#DD344C",
//             "title": "AWS Secrets Manager",
//             "slug": "awssecretsmanager"
//         },
//         "awwwards": {
//             "hex": "#222222",
//             "title": "Awwwards",
//             "slug": "awwwards"
//         },
//         "axios": {
//             "hex": "#5A29E4",
//             "title": "Axios",
//             "slug": "axios"
//         },
//         "bandrautomation": {
//             "hex": "#FF8800",
//             "title": "B&R Automation",
//             "slug": "bandrautomation"
//         },
//         "babel": {
//             "hex": "#F9DC3E",
//             "title": "Babel",
//             "slug": "babel"
//         },
//         "babelio": {
//             "hex": "#FBB91E",
//             "title": "Babelio",
//             "slug": "babelio"
//         },
//         "babylondotjs": {
//             "hex": "#BB464B",
//             "title": "Babylon.js",
//             "slug": "babylondotjs"
//         },
//         "backblaze": {
//             "hex": "#E21E29",
//             "title": "Backblaze",
//             "slug": "backblaze"
//         },
//         "backbone": {
//             "hex": "#000000",
//             "title": "Backbone",
//             "slug": "backbone"
//         },
//         "backbonedotjs": {
//             "hex": "#0071B5",
//             "title": "Backbone.js",
//             "slug": "backbonedotjs"
//         },
//         "backendless": {
//             "hex": "#1D77BD",
//             "title": "Backendless",
//             "slug": "backendless"
//         },
//         "backstage": {
//             "hex": "#9BF0E1",
//             "title": "Backstage",
//             "slug": "backstage"
//         },
//         "badoo": {
//             "hex": "#783BF9",
//             "title": "Badoo",
//             "slug": "badoo"
//         },
//         "baidu": {
//             "hex": "#2932E1",
//             "title": "Baidu",
//             "slug": "baidu"
//         },
//         "bakalari": {
//             "hex": "#00A2E2",
//             "title": "Bakaláři",
//             "slug": "bakalari"
//         },
//         "bamboo": {
//             "hex": "#0052CC",
//             "title": "Bamboo",
//             "slug": "bamboo"
//         },
//         "bambulab": {
//             "hex": "#00AE42",
//             "title": "Bambu Lab",
//             "slug": "bambulab"
//         },
//         "bandcamp": {
//             "hex": "#408294",
//             "title": "Bandcamp",
//             "slug": "bandcamp"
//         },
//         "bandlab": {
//             "hex": "#F12C18",
//             "title": "BandLab",
//             "slug": "bandlab"
//         },
//         "bandsintown": {
//             "hex": "#00CEC8",
//             "title": "Bandsintown",
//             "slug": "bandsintown"
//         },
//         "bankofamerica": {
//             "hex": "#012169",
//             "title": "Bank of America",
//             "slug": "bankofamerica"
//         },
//         "barclays": {
//             "hex": "#00AEEF",
//             "title": "Barclays",
//             "slug": "barclays"
//         },
//         "baremetrics": {
//             "hex": "#6078FF",
//             "title": "Baremetrics",
//             "slug": "baremetrics"
//         },
//         "barmenia": {
//             "hex": "#009FE3",
//             "title": "Barmenia",
//             "slug": "barmenia"
//         },
//         "basecamp": {
//             "hex": "#1D2D35",
//             "title": "Basecamp",
//             "slug": "basecamp"
//         },
//         "baserow": {
//             "hex": "#5190EF",
//             "title": "Baserow",
//             "slug": "baserow"
//         },
//         "basicattentiontoken": {
//             "hex": "#80247B",
//             "title": "Basic Attention Token",
//             "slug": "basicattentiontoken"
//         },
//         "bastyon": {
//             "hex": "#00A4FF",
//             "title": "Bastyon",
//             "slug": "bastyon"
//         },
//         "bat": {
//             "hex": "#31369E",
//             "title": "bat",
//             "slug": "bat"
//         },
//         "bata": {
//             "hex": "#DD282E",
//             "title": "Bata",
//             "slug": "bata"
//         },
//         "battledotnet": {
//             "hex": "#4381C3",
//             "title": "Battle.net",
//             "slug": "battledotnet"
//         },
//         "bazel": {
//             "hex": "#43A047",
//             "title": "Bazel",
//             "slug": "bazel"
//         },
//         "beatport": {
//             "hex": "#01FF95",
//             "title": "Beatport",
//             "slug": "beatport"
//         },
//         "beats": {
//             "hex": "#005571",
//             "title": "Beats",
//             "slug": "beats"
//         },
//         "beatsbydre": {
//             "hex": "#E01F3D",
//             "title": "Beats by Dre",
//             "slug": "beatsbydre"
//         },
//         "beatstars": {
//             "hex": "#EB0000",
//             "title": "BeatStars",
//             "slug": "beatstars"
//         },
//         "beekeeperstudio": {
//             "hex": "#FAD83B",
//             "title": "Beekeeper Studio",
//             "slug": "beekeeperstudio"
//         },
//         "behance": {
//             "hex": "#1769FF",
//             "title": "Behance",
//             "slug": "behance"
//         },
//         "beijingsubway": {
//             "hex": "#004A9D",
//             "title": "Beijing Subway",
//             "slug": "beijingsubway"
//         },
//         "bem": {
//             "hex": "#000000",
//             "title": "BEM",
//             "slug": "bem"
//         },
//         "bentley": {
//             "hex": "#333333",
//             "title": "Bentley",
//             "slug": "bentley"
//         },
//         "bento": {
//             "hex": "#768CFF",
//             "title": "Bento",
//             "slug": "bento"
//         },
//         "bentobox": {
//             "hex": "#F15541",
//             "title": "BentoBox",
//             "slug": "bentobox"
//         },
//         "bentoml": {
//             "hex": "#000000",
//             "title": "BentoML",
//             "slug": "bentoml"
//         },
//         "bereal": {
//             "hex": "#000000",
//             "title": "BeReal",
//             "slug": "bereal"
//         },
//         "betfair": {
//             "hex": "#FFB80B",
//             "title": "Betfair",
//             "slug": "betfair"
//         },
//         "betterstack": {
//             "hex": "#000000",
//             "title": "Better Stack",
//             "slug": "betterstack"
//         },
//         "bevy": {
//             "hex": "#232326",
//             "title": "Bevy",
//             "slug": "bevy"
//         },
//         "bigcartel": {
//             "hex": "#222222",
//             "title": "Big Cartel",
//             "slug": "bigcartel"
//         },
//         "bigbasket": {
//             "hex": "#A5CD39",
//             "title": "bigbasket",
//             "slug": "bigbasket"
//         },
//         "bigbluebutton": {
//             "hex": "#283274",
//             "title": "BigBlueButton",
//             "slug": "bigbluebutton"
//         },
//         "bigcommerce": {
//             "hex": "#121118",
//             "title": "BigCommerce",
//             "slug": "bigcommerce"
//         },
//         "bilibili": {
//             "hex": "#00A1D6",
//             "title": "Bilibili",
//             "slug": "bilibili"
//         },
//         "billboard": {
//             "hex": "#000000",
//             "title": "Billboard",
//             "slug": "billboard"
//         },
//         "bim": {
//             "hex": "#EB1928",
//             "title": "BIM",
//             "slug": "bim"
//         },
//         "binance": {
//             "hex": "#F0B90B",
//             "title": "Binance",
//             "slug": "binance"
//         },
//         "biolink": {
//             "hex": "#000000",
//             "title": "Bio Link",
//             "slug": "biolink"
//         },
//         "biome": {
//             "hex": "#60A5FA",
//             "title": "Biome",
//             "slug": "biome"
//         },
//         "bisecthosting": {
//             "hex": "#0D1129",
//             "title": "BisectHosting",
//             "slug": "bisecthosting"
//         },
//         "bit": {
//             "hex": "#592EC1",
//             "title": "Bit",
//             "slug": "bit"
//         },
//         "bitbucket": {
//             "hex": "#0052CC",
//             "title": "Bitbucket",
//             "slug": "bitbucket"
//         },
//         "bitcoin": {
//             "hex": "#F7931A",
//             "title": "Bitcoin",
//             "slug": "bitcoin"
//         },
//         "bitcoincash": {
//             "hex": "#0AC18E",
//             "title": "Bitcoin Cash",
//             "slug": "bitcoincash"
//         },
//         "bitcoinsv": {
//             "hex": "#EAB300",
//             "title": "Bitcoin SV",
//             "slug": "bitcoinsv"
//         },
//         "bitcomet": {
//             "hex": "#F49923",
//             "title": "BitComet",
//             "slug": "bitcomet"
//         },
//         "bitdefender": {
//             "hex": "#ED1C24",
//             "title": "Bitdefender",
//             "slug": "bitdefender"
//         },
//         "bitly": {
//             "hex": "#EE6123",
//             "title": "Bitly",
//             "slug": "bitly"
//         },
//         "bitrise": {
//             "hex": "#683D87",
//             "title": "Bitrise",
//             "slug": "bitrise"
//         },
//         "bittorrent": {
//             "hex": "#050505",
//             "title": "BitTorrent",
//             "slug": "bittorrent"
//         },
//         "bitwarden": {
//             "hex": "#175DDC",
//             "title": "Bitwarden",
//             "slug": "bitwarden"
//         },
//         "bitwig": {
//             "hex": "#FF5A00",
//             "title": "Bitwig",
//             "slug": "bitwig"
//         },
//         "blackberry": {
//             "hex": "#000000",
//             "title": "Blackberry",
//             "slug": "blackberry"
//         },
//         "blackmagicdesign": {
//             "hex": "#FFA200",
//             "title": "Blackmagic Design",
//             "slug": "blackmagicdesign"
//         },
//         "blazemeter": {
//             "hex": "#CA2133",
//             "title": "Blazemeter",
//             "slug": "blazemeter"
//         },
//         "blazor": {
//             "hex": "#512BD4",
//             "title": "Blazor",
//             "slug": "blazor"
//         },
//         "blender": {
//             "hex": "#E87D0D",
//             "title": "Blender",
//             "slug": "blender"
//         },
//         "blockbench": {
//             "hex": "#1E93D9",
//             "title": "Blockbench",
//             "slug": "blockbench"
//         },
//         "blockchaindotcom": {
//             "hex": "#121D33",
//             "title": "Blockchain.com",
//             "slug": "blockchaindotcom"
//         },
//         "blogger": {
//             "hex": "#FF5722",
//             "title": "Blogger",
//             "slug": "blogger"
//         },
//         "bloglovin": {
//             "hex": "#000000",
//             "title": "Bloglovin",
//             "slug": "bloglovin"
//         },
//         "blueprint": {
//             "hex": "#137CBD",
//             "title": "Blueprint",
//             "slug": "blueprint"
//         },
//         "bluesky": {
//             "hex": "#0285FF",
//             "title": "Bluesky",
//             "slug": "bluesky"
//         },
//         "bluesound": {
//             "hex": "#0F131E",
//             "title": "Bluesound",
//             "slug": "bluesound"
//         },
//         "bluetooth": {
//             "hex": "#0082FC",
//             "title": "Bluetooth",
//             "slug": "bluetooth"
//         },
//         "bmcsoftware": {
//             "hex": "#FE5000",
//             "title": "BMC Software",
//             "slug": "bmcsoftware"
//         },
//         "bmw": {
//             "hex": "#0066B1",
//             "title": "BMW",
//             "slug": "bmw"
//         },
//         "bnbchain": {
//             "hex": "#F0B90B",
//             "title": "BNB Chain",
//             "slug": "bnbchain"
//         },
//         "boardgamegeek": {
//             "hex": "#FF5100",
//             "title": "BoardGameGeek",
//             "slug": "boardgamegeek"
//         },
//         "boat": {
//             "hex": "#E20722",
//             "title": "boAt",
//             "slug": "boat"
//         },
//         "boehringeringelheim": {
//             "hex": "#00E47C",
//             "title": "Boehringer Ingelheim",
//             "slug": "boehringeringelheim"
//         },
//         "boeing": {
//             "hex": "#1D439C",
//             "title": "Boeing",
//             "slug": "boeing"
//         },
//         "bombardier": {
//             "hex": "#000000",
//             "title": "Bombardier",
//             "slug": "bombardier"
//         },
//         "bookalope": {
//             "hex": "#DC2829",
//             "title": "Bookalope",
//             "slug": "bookalope"
//         },
//         "bookbub": {
//             "hex": "#F44336",
//             "title": "BookBub",
//             "slug": "bookbub"
//         },
//         "bookmeter": {
//             "hex": "#64BC4B",
//             "title": "Bookmeter",
//             "slug": "bookmeter"
//         },
//         "bookmyshow": {
//             "hex": "#C4242B",
//             "title": "BookMyShow",
//             "slug": "bookmyshow"
//         },
//         "bookstack": {
//             "hex": "#0288D1",
//             "title": "BookStack",
//             "slug": "bookstack"
//         },
//         "boost": {
//             "hex": "#F7901E",
//             "title": "Boost",
//             "slug": "boost"
//         },
//         "boosty": {
//             "hex": "#F15F2C",
//             "title": "Boosty",
//             "slug": "boosty"
//         },
//         "boots": {
//             "hex": "#05054B",
//             "title": "Boots",
//             "slug": "boots"
//         },
//         "bootstrap": {
//             "hex": "#7952B3",
//             "title": "Bootstrap",
//             "slug": "bootstrap"
//         },
//         "borgbackup": {
//             "hex": "#00DD00",
//             "title": "BorgBackup",
//             "slug": "borgbackup"
//         },
//         "bosch": {
//             "hex": "#EA0016",
//             "title": "Bosch",
//             "slug": "bosch"
//         },
//         "bose": {
//             "hex": "#000000",
//             "title": "Bose",
//             "slug": "bose"
//         },
//         "botblecms": {
//             "hex": "#205081",
//             "title": "Botble CMS",
//             "slug": "botblecms"
//         },
//         "boulanger": {
//             "hex": "#FD5300",
//             "title": "boulanger",
//             "slug": "boulanger"
//         },
//         "bower": {
//             "hex": "#EF5734",
//             "title": "Bower",
//             "slug": "bower"
//         },
//         "box": {
//             "hex": "#0061D5",
//             "title": "Box",
//             "slug": "box"
//         },
//         "boxysvg": {
//             "hex": "#3584E3",
//             "title": "Boxy SVG",
//             "slug": "boxysvg"
//         },
//         "braintree": {
//             "hex": "#000000",
//             "title": "Braintree",
//             "slug": "braintree"
//         },
//         "brandfolder": {
//             "hex": "#40D1F5",
//             "title": "Brandfolder",
//             "slug": "brandfolder"
//         },
//         "brave": {
//             "hex": "#FB542B",
//             "title": "Brave",
//             "slug": "brave"
//         },
//         "breaker": {
//             "hex": "#003DAD",
//             "title": "Breaker",
//             "slug": "breaker"
//         },
//         "brenntag": {
//             "hex": "#1A0033",
//             "title": "Brenntag",
//             "slug": "brenntag"
//         },
//         "brevo": {
//             "hex": "#0B996E",
//             "title": "Brevo",
//             "slug": "brevo"
//         },
//         "brex": {
//             "hex": "#212121",
//             "title": "Brex",
//             "slug": "brex"
//         },
//         "bricks": {
//             "hex": "#FFD54D",
//             "title": "Bricks",
//             "slug": "bricks"
//         },
//         "britishairways": {
//             "hex": "#2E5C99",
//             "title": "British Airways",
//             "slug": "britishairways"
//         },
//         "broadcom": {
//             "hex": "#E31837",
//             "title": "Broadcom",
//             "slug": "broadcom"
//         },
//         "bruno": {
//             "hex": "#F4AA41",
//             "title": "Bruno",
//             "slug": "bruno"
//         },
//         "bsd": {
//             "hex": "#AB2B28",
//             "title": "BSD",
//             "slug": "bsd"
//         },
//         "bspwm": {
//             "hex": "#2E2E2E",
//             "title": "bspwm",
//             "slug": "bspwm"
//         },
//         "bt": {
//             "hex": "#6400AA",
//             "title": "BT",
//             "slug": "bt"
//         },
//         "buddy": {
//             "hex": "#1A86FD",
//             "title": "Buddy",
//             "slug": "buddy"
//         },
//         "budibase": {
//             "hex": "#000000",
//             "title": "Budibase",
//             "slug": "budibase"
//         },
//         "buefy": {
//             "hex": "#7957D5",
//             "title": "Buefy",
//             "slug": "buefy"
//         },
//         "buffer": {
//             "hex": "#231F20",
//             "title": "Buffer",
//             "slug": "buffer"
//         },
//         "bugatti": {
//             "hex": "#000000",
//             "title": "Bugatti",
//             "slug": "bugatti"
//         },
//         "bugcrowd": {
//             "hex": "#F26822",
//             "title": "Bugcrowd",
//             "slug": "bugcrowd"
//         },
//         "bugsnag": {
//             "hex": "#4949E4",
//             "title": "Bugsnag",
//             "slug": "bugsnag"
//         },
//         "buhl": {
//             "hex": "#023E84",
//             "title": "Buhl",
//             "slug": "buhl"
//         },
//         "buildkite": {
//             "hex": "#14CC80",
//             "title": "Buildkite",
//             "slug": "buildkite"
//         },
//         "builtbybit": {
//             "hex": "#2D87C3",
//             "title": "BuiltByBit",
//             "slug": "builtbybit"
//         },
//         "bukalapak": {
//             "hex": "#E31E52",
//             "title": "Bukalapak",
//             "slug": "bukalapak"
//         },
//         "bulma": {
//             "hex": "#00D1B2",
//             "title": "Bulma",
//             "slug": "bulma"
//         },
//         "bun": {
//             "hex": "#000000",
//             "title": "Bun",
//             "slug": "bun"
//         },
//         "bungie": {
//             "hex": "#0075BB",
//             "title": "Bungie",
//             "slug": "bungie"
//         },
//         "bunq": {
//             "hex": "#3394D7",
//             "title": "bunq",
//             "slug": "bunq"
//         },
//         "burgerking": {
//             "hex": "#D62300",
//             "title": "Burger King",
//             "slug": "burgerking"
//         },
//         "burpsuite": {
//             "hex": "#FF6633",
//             "title": "Burp Suite",
//             "slug": "burpsuite"
//         },
//         "burton": {
//             "hex": "#000000",
//             "title": "Burton",
//             "slug": "burton"
//         },
//         "buymeacoffee": {
//             "hex": "#FFDD00",
//             "title": "Buy Me A Coffee",
//             "slug": "buymeacoffee"
//         },
//         "buysellads": {
//             "hex": "#EB4714",
//             "title": "BuySellAds",
//             "slug": "buysellads"
//         },
//         "buzzfeed": {
//             "hex": "#EE3322",
//             "title": "BuzzFeed",
//             "slug": "buzzfeed"
//         },
//         "bvg": {
//             "hex": "#F0D722",
//             "title": "BVG",
//             "slug": "bvg"
//         },
//         "byjus": {
//             "hex": "#813588",
//             "title": "Byju's",
//             "slug": "byjus"
//         },
//         "bytedance": {
//             "hex": "#3C8CFF",
//             "title": "ByteDance",
//             "slug": "bytedance"
//         },
//         "c": {
//             "hex": "#A8B9CC",
//             "title": "C",
//             "slug": "c"
//         },
//         "cplusplus": {
//             "hex": "#00599C",
//             "title": "C++",
//             "slug": "cplusplus"
//         },
//         "cplusplusbuilder": {
//             "hex": "#E62431",
//             "title": "C++ Builder",
//             "slug": "cplusplusbuilder"
//         },
//         "cachet": {
//             "hex": "#7ED321",
//             "title": "Cachet",
//             "slug": "cachet"
//         },
//         "caddy": {
//             "hex": "#1F88C0",
//             "title": "Caddy",
//             "slug": "caddy"
//         },
//         "cadillac": {
//             "hex": "#000000",
//             "title": "Cadillac",
//             "slug": "cadillac"
//         },
//         "cafepress": {
//             "hex": "#58A616",
//             "title": "CafePress",
//             "slug": "cafepress"
//         },
//         "cairographics": {
//             "hex": "#F39914",
//             "title": "Cairo Graphics",
//             "slug": "cairographics"
//         },
//         "cairometro": {
//             "hex": "#C10C0C",
//             "title": "Cairo Metro",
//             "slug": "cairometro"
//         },
//         "caixabank": {
//             "hex": "#007EAE",
//             "title": "CaixaBank",
//             "slug": "caixabank"
//         },
//         "cakephp": {
//             "hex": "#D33C43",
//             "title": "CakePHP",
//             "slug": "cakephp"
//         },
//         "caldotcom": {
//             "hex": "#292929",
//             "title": "Cal.com",
//             "slug": "caldotcom"
//         },
//         "calendly": {
//             "hex": "#006BFF",
//             "title": "Calendly",
//             "slug": "calendly"
//         },
//         "calibreweb": {
//             "hex": "#45B29D",
//             "title": "Calibre-Web",
//             "slug": "calibreweb"
//         },
//         "campaignmonitor": {
//             "hex": "#111324",
//             "title": "Campaign Monitor",
//             "slug": "campaignmonitor"
//         },
//         "camunda": {
//             "hex": "#FC5D0D",
//             "title": "Camunda",
//             "slug": "camunda"
//         },
//         "canonical": {
//             "hex": "#E95420",
//             "title": "Canonical",
//             "slug": "canonical"
//         },
//         "canva": {
//             "hex": "#00C4CC",
//             "title": "Canva",
//             "slug": "canva"
//         },
//         "canvas": {
//             "hex": "#E72429",
//             "title": "Canvas",
//             "slug": "canvas"
//         },
//         "capacitor": {
//             "hex": "#119EFF",
//             "title": "Capacitor",
//             "slug": "capacitor"
//         },
//         "caprover": {
//             "hex": "#ED5B26",
//             "title": "CapRover",
//             "slug": "caprover"
//         },
//         "carthrottle": {
//             "hex": "#FF9C42",
//             "title": "Car Throttle",
//             "slug": "carthrottle"
//         },
//         "cardano": {
//             "hex": "#0133AD",
//             "title": "Cardano",
//             "slug": "cardano"
//         },
//         "carlsberggroup": {
//             "hex": "#00321E",
//             "title": "Carlsberg Group",
//             "slug": "carlsberggroup"
//         },
//         "carrd": {
//             "hex": "#596CAF",
//             "title": "Carrd",
//             "slug": "carrd"
//         },
//         "carrefour": {
//             "hex": "#004E9F",
//             "title": "Carrefour",
//             "slug": "carrefour"
//         },
//         "carto": {
//             "hex": "#EB1510",
//             "title": "Carto",
//             "slug": "carto"
//         },
//         "cashapp": {
//             "hex": "#00C244",
//             "title": "Cash App",
//             "slug": "cashapp"
//         },
//         "castbox": {
//             "hex": "#F55B23",
//             "title": "Castbox",
//             "slug": "castbox"
//         },
//         "castorama": {
//             "hex": "#0078D7",
//             "title": "Castorama",
//             "slug": "castorama"
//         },
//         "castro": {
//             "hex": "#00B265",
//             "title": "Castro",
//             "slug": "castro"
//         },
//         "caterpillar": {
//             "hex": "#FFCD11",
//             "title": "Caterpillar",
//             "slug": "caterpillar"
//         },
//         "cbc": {
//             "hex": "#E60505",
//             "title": "CBC",
//             "slug": "cbc"
//         },
//         "cbs": {
//             "hex": "#033963",
//             "title": "CBS",
//             "slug": "cbs"
//         },
//         "ccc": {
//             "hex": "#000000",
//             "title": "CCC",
//             "slug": "ccc"
//         },
//         "ccleaner": {
//             "hex": "#CB2D29",
//             "title": "CCleaner",
//             "slug": "ccleaner"
//         },
//         "cdprojekt": {
//             "hex": "#DC0D15",
//             "title": "CD Projekt",
//             "slug": "cdprojekt"
//         },
//         "ce": {
//             "hex": "#000000",
//             "title": "CE",
//             "slug": "ce"
//         },
//         "celery": {
//             "hex": "#37814A",
//             "title": "Celery",
//             "slug": "celery"
//         },
//         "celestron": {
//             "hex": "#F47216",
//             "title": "Celestron",
//             "slug": "celestron"
//         },
//         "centos": {
//             "hex": "#262577",
//             "title": "CentOS",
//             "slug": "centos"
//         },
//         "ceph": {
//             "hex": "#EF5C55",
//             "title": "Ceph",
//             "slug": "ceph"
//         },
//         "cesium": {
//             "hex": "#6CADDF",
//             "title": "Cesium",
//             "slug": "cesium"
//         },
//         "chai": {
//             "hex": "#A30701",
//             "title": "Chai",
//             "slug": "chai"
//         },
//         "chainguard": {
//             "hex": "#4445E7",
//             "title": "Chainguard",
//             "slug": "chainguard"
//         },
//         "chainlink": {
//             "hex": "#375BD2",
//             "title": "Chainlink",
//             "slug": "chainlink"
//         },
//         "chakraui": {
//             "hex": "#319795",
//             "title": "Chakra UI",
//             "slug": "chakraui"
//         },
//         "channel4": {
//             "hex": "#AAFF89",
//             "title": "Channel 4",
//             "slug": "channel4"
//         },
//         "charles": {
//             "hex": "#F3F5F5",
//             "title": "Charles",
//             "slug": "charles"
//         },
//         "chartdotjs": {
//             "hex": "#FF6384",
//             "title": "Chart.js",
//             "slug": "chartdotjs"
//         },
//         "chartmogul": {
//             "hex": "#13324B",
//             "title": "ChartMogul",
//             "slug": "chartmogul"
//         },
//         "chase": {
//             "hex": "#117ACA",
//             "title": "Chase",
//             "slug": "chase"
//         },
//         "chatbot": {
//             "hex": "#0066FF",
//             "title": "ChatBot",
//             "slug": "chatbot"
//         },
//         "chatwoot": {
//             "hex": "#1F93FF",
//             "title": "Chatwoot",
//             "slug": "chatwoot"
//         },
//         "checkio": {
//             "hex": "#008DB6",
//             "title": "CheckiO",
//             "slug": "checkio"
//         },
//         "checkmarx": {
//             "hex": "#54B848",
//             "title": "Checkmarx",
//             "slug": "checkmarx"
//         },
//         "checkmk": {
//             "hex": "#15D1A0",
//             "title": "Checkmk",
//             "slug": "checkmk"
//         },
//         "chedraui": {
//             "hex": "#E0832F",
//             "title": "Chedraui",
//             "slug": "chedraui"
//         },
//         "cheerio": {
//             "hex": "#E88C1F",
//             "title": "Cheerio",
//             "slug": "cheerio"
//         },
//         "chef": {
//             "hex": "#F09820",
//             "title": "Chef",
//             "slug": "chef"
//         },
//         "chemex": {
//             "hex": "#4D2B1A",
//             "title": "Chemex",
//             "slug": "chemex"
//         },
//         "chessdotcom": {
//             "hex": "#81B64C",
//             "title": "Chess.com",
//             "slug": "chessdotcom"
//         },
//         "chevrolet": {
//             "hex": "#CD9834",
//             "title": "Chevrolet",
//             "slug": "chevrolet"
//         },
//         "chianetwork": {
//             "hex": "#5ECE71",
//             "title": "Chia Network",
//             "slug": "chianetwork"
//         },
//         "chinaeasternairlines": {
//             "hex": "#1A2477",
//             "title": "China Eastern Airlines",
//             "slug": "chinaeasternairlines"
//         },
//         "chinasouthernairlines": {
//             "hex": "#008BCB",
//             "title": "China Southern Airlines",
//             "slug": "chinasouthernairlines"
//         },
//         "chocolatey": {
//             "hex": "#80B5E3",
//             "title": "Chocolatey",
//             "slug": "chocolatey"
//         },
//         "chromatic": {
//             "hex": "#FC521F",
//             "title": "Chromatic",
//             "slug": "chromatic"
//         },
//         "chromewebstore": {
//             "hex": "#4285F4",
//             "title": "Chrome Web Store",
//             "slug": "chromewebstore"
//         },
//         "chromecast": {
//             "hex": "#999999",
//             "title": "Chromecast",
//             "slug": "chromecast"
//         },
//         "chrysler": {
//             "hex": "#000000",
//             "title": "Chrysler",
//             "slug": "chrysler"
//         },
//         "chupachups": {
//             "hex": "#CF103E",
//             "title": "Chupa Chups",
//             "slug": "chupachups"
//         },
//         "cilium": {
//             "hex": "#F8C517",
//             "title": "Cilium",
//             "slug": "cilium"
//         },
//         "cinema4d": {
//             "hex": "#011A6A",
//             "title": "Cinema 4D",
//             "slug": "cinema4d"
//         },
//         "cinnamon": {
//             "hex": "#DC682E",
//             "title": "Cinnamon",
//             "slug": "cinnamon"
//         },
//         "circle": {
//             "hex": "#8669AE",
//             "title": "Circle",
//             "slug": "circle"
//         },
//         "circleci": {
//             "hex": "#343434",
//             "title": "CircleCI",
//             "slug": "circleci"
//         },
//         "circuitverse": {
//             "hex": "#42B883",
//             "title": "CircuitVerse",
//             "slug": "circuitverse"
//         },
//         "cirrusci": {
//             "hex": "#4051B5",
//             "title": "Cirrus CI",
//             "slug": "cirrusci"
//         },
//         "cisco": {
//             "hex": "#1BA0D7",
//             "title": "Cisco",
//             "slug": "cisco"
//         },
//         "citrix": {
//             "hex": "#452170",
//             "title": "Citrix",
//             "slug": "citrix"
//         },
//         "citroen": {
//             "hex": "#DA291C",
//             "title": "Citroën",
//             "slug": "citroen"
//         },
//         "civicrm": {
//             "hex": "#81C459",
//             "title": "CiviCRM",
//             "slug": "civicrm"
//         },
//         "civo": {
//             "hex": "#239DFF",
//             "title": "Civo",
//             "slug": "civo"
//         },
//         "clarifai": {
//             "hex": "#1955FF",
//             "title": "Clarifai",
//             "slug": "clarifai"
//         },
//         "claris": {
//             "hex": "#000000",
//             "title": "Claris",
//             "slug": "claris"
//         },
//         "clarivate": {
//             "hex": "#93FF9E",
//             "title": "Clarivate",
//             "slug": "clarivate"
//         },
//         "claude": {
//             "hex": "#D97757",
//             "title": "Claude",
//             "slug": "claude"
//         },
//         "clerk": {
//             "hex": "#6C47FF",
//             "title": "Clerk",
//             "slug": "clerk"
//         },
//         "clevercloud": {
//             "hex": "#171C36",
//             "title": "Clever Cloud",
//             "slug": "clevercloud"
//         },
//         "clickhouse": {
//             "hex": "#FFCC01",
//             "title": "ClickHouse",
//             "slug": "clickhouse"
//         },
//         "clickup": {
//             "hex": "#7B68EE",
//             "title": "ClickUp",
//             "slug": "clickup"
//         },
//         "clion": {
//             "hex": "#000000",
//             "title": "CLion",
//             "slug": "clion"
//         },
//         "clockify": {
//             "hex": "#03A9F4",
//             "title": "Clockify",
//             "slug": "clockify"
//         },
//         "clojure": {
//             "hex": "#5881D8",
//             "title": "Clojure",
//             "slug": "clojure"
//         },
//         "cloud66": {
//             "hex": "#3C72B9",
//             "title": "Cloud 66",
//             "slug": "cloud66"
//         },
//         "cloudfoundry": {
//             "hex": "#0C9ED5",
//             "title": "Cloud Foundry",
//             "slug": "cloudfoundry"
//         },
//         "cloudbees": {
//             "hex": "#1997B5",
//             "title": "CloudBees",
//             "slug": "cloudbees"
//         },
//         "cloudcannon": {
//             "hex": "#407AFC",
//             "title": "CloudCannon",
//             "slug": "cloudcannon"
//         },
//         "cloudera": {
//             "hex": "#F96702",
//             "title": "Cloudera",
//             "slug": "cloudera"
//         },
//         "cloudflare": {
//             "hex": "#F38020",
//             "title": "Cloudflare",
//             "slug": "cloudflare"
//         },
//         "cloudflarepages": {
//             "hex": "#F38020",
//             "title": "Cloudflare Pages",
//             "slug": "cloudflarepages"
//         },
//         "cloudflareworkers": {
//             "hex": "#F38020",
//             "title": "Cloudflare Workers",
//             "slug": "cloudflareworkers"
//         },
//         "cloudinary": {
//             "hex": "#3448C5",
//             "title": "Cloudinary",
//             "slug": "cloudinary"
//         },
//         "cloudron": {
//             "hex": "#03A9F4",
//             "title": "Cloudron",
//             "slug": "cloudron"
//         },
//         "cloudsmith": {
//             "hex": "#2A6FE1",
//             "title": "Cloudsmith",
//             "slug": "cloudsmith"
//         },
//         "cloudways": {
//             "hex": "#2C39BD",
//             "title": "Cloudways",
//             "slug": "cloudways"
//         },
//         "clubforce": {
//             "hex": "#191176",
//             "title": "Clubforce",
//             "slug": "clubforce"
//         },
//         "clubhouse": {
//             "hex": "#FFE450",
//             "title": "Clubhouse",
//             "slug": "clubhouse"
//         },
//         "clyp": {
//             "hex": "#3CBDB1",
//             "title": "Clyp",
//             "slug": "clyp"
//         },
//         "cmake": {
//             "hex": "#064F8C",
//             "title": "CMake",
//             "slug": "cmake"
//         },
//         "cncf": {
//             "hex": "#231F20",
//             "title": "CNCF",
//             "slug": "cncf"
//         },
//         "cnet": {
//             "hex": "#E71D1D",
//             "title": "CNET",
//             "slug": "cnet"
//         },
//         "cnn": {
//             "hex": "#CC0000",
//             "title": "CNN",
//             "slug": "cnn"
//         },
//         "coop": {
//             "hex": "#00B1E7",
//             "title": "Co-op",
//             "slug": "coop"
//         },
//         "cocacola": {
//             "hex": "#D00013",
//             "title": "Coca-Cola",
//             "slug": "cocacola"
//         },
//         "cockpit": {
//             "hex": "#0066CC",
//             "title": "Cockpit",
//             "slug": "cockpit"
//         },
//         "cockroachlabs": {
//             "hex": "#6933FF",
//             "title": "Cockroach Labs",
//             "slug": "cockroachlabs"
//         },
//         "cocoapods": {
//             "hex": "#EE3322",
//             "title": "CocoaPods",
//             "slug": "cocoapods"
//         },
//         "cocos": {
//             "hex": "#55C2E1",
//             "title": "Cocos",
//             "slug": "cocos"
//         },
//         "coda": {
//             "hex": "#F46A54",
//             "title": "Coda",
//             "slug": "coda"
//         },
//         "codacy": {
//             "hex": "#222F29",
//             "title": "Codacy",
//             "slug": "codacy"
//         },
//         "codeclimate": {
//             "hex": "#000000",
//             "title": "Code Climate",
//             "slug": "codeclimate"
//         },
//         "codeblocks": {
//             "hex": "#41AD48",
//             "title": "Code::Blocks",
//             "slug": "codeblocks"
//         },
//         "codeberg": {
//             "hex": "#2185D0",
//             "title": "Codeberg",
//             "slug": "codeberg"
//         },
//         "codecademy": {
//             "hex": "#1F4056",
//             "title": "Codecademy",
//             "slug": "codecademy"
//         },
//         "codeceptjs": {
//             "hex": "#F6E05E",
//             "title": "CodeceptJS",
//             "slug": "codeceptjs"
//         },
//         "codechef": {
//             "hex": "#5B4638",
//             "title": "CodeChef",
//             "slug": "codechef"
//         },
//         "codecov": {
//             "hex": "#F01F7A",
//             "title": "Codecov",
//             "slug": "codecov"
//         },
//         "codecrafters": {
//             "hex": "#171920",
//             "title": "CodeCrafters",
//             "slug": "codecrafters"
//         },
//         "codefactor": {
//             "hex": "#F44A6A",
//             "title": "CodeFactor",
//             "slug": "codefactor"
//         },
//         "codeforces": {
//             "hex": "#1F8ACB",
//             "title": "Codeforces",
//             "slug": "codeforces"
//         },
//         "codefresh": {
//             "hex": "#08B1AB",
//             "title": "Codefresh",
//             "slug": "codefresh"
//         },
//         "codeigniter": {
//             "hex": "#EF4223",
//             "title": "CodeIgniter",
//             "slug": "codeigniter"
//         },
//         "codeium": {
//             "hex": "#09B6A2",
//             "title": "Codeium",
//             "slug": "codeium"
//         },
//         "codemagic": {
//             "hex": "#F45E3F",
//             "title": "Codemagic",
//             "slug": "codemagic"
//         },
//         "codementor": {
//             "hex": "#003648",
//             "title": "Codementor",
//             "slug": "codementor"
//         },
//         "codemirror": {
//             "hex": "#D30707",
//             "title": "CodeMirror",
//             "slug": "codemirror"
//         },
//         "codenewbie": {
//             "hex": "#9013FE",
//             "title": "CodeNewbie",
//             "slug": "codenewbie"
//         },
//         "codepen": {
//             "hex": "#000000",
//             "title": "CodePen",
//             "slug": "codepen"
//         },
//         "codeproject": {
//             "hex": "#FF9900",
//             "title": "CodeProject",
//             "slug": "codeproject"
//         },
//         "coder": {
//             "hex": "#000000",
//             "title": "Coder",
//             "slug": "coder"
//         },
//         "codersrank": {
//             "hex": "#67A4AC",
//             "title": "CodersRank",
//             "slug": "codersrank"
//         },
//         "coderwall": {
//             "hex": "#3E8DCC",
//             "title": "Coderwall",
//             "slug": "coderwall"
//         },
//         "codesandbox": {
//             "hex": "#151515",
//             "title": "CodeSandbox",
//             "slug": "codesandbox"
//         },
//         "codeship": {
//             "hex": "#004466",
//             "title": "Codeship",
//             "slug": "codeship"
//         },
//         "codesignal": {
//             "hex": "#1062FB",
//             "title": "CodeSignal",
//             "slug": "codesignal"
//         },
//         "codestream": {
//             "hex": "#008C99",
//             "title": "CodeStream",
//             "slug": "codestream"
//         },
//         "codewars": {
//             "hex": "#B1361E",
//             "title": "Codewars",
//             "slug": "codewars"
//         },
//         "codingninjas": {
//             "hex": "#DD6620",
//             "title": "Coding Ninjas",
//             "slug": "codingninjas"
//         },
//         "codingame": {
//             "hex": "#F2BB13",
//             "title": "CodinGame",
//             "slug": "codingame"
//         },
//         "codio": {
//             "hex": "#4574E0",
//             "title": "Codio",
//             "slug": "codio"
//         },
//         "coffeescript": {
//             "hex": "#2F2625",
//             "title": "CoffeeScript",
//             "slug": "coffeescript"
//         },
//         "coggle": {
//             "hex": "#9ED56B",
//             "title": "Coggle",
//             "slug": "coggle"
//         },
//         "cognizant": {
//             "hex": "#1A4CA1",
//             "title": "Cognizant",
//             "slug": "cognizant"
//         },
//         "cohost": {
//             "hex": "#83254F",
//             "title": "cohost",
//             "slug": "cohost"
//         },
//         "coinbase": {
//             "hex": "#0052FF",
//             "title": "Coinbase",
//             "slug": "coinbase"
//         },
//         "coinmarketcap": {
//             "hex": "#17181B",
//             "title": "CoinMarketCap",
//             "slug": "coinmarketcap"
//         },
//         "collaboraonline": {
//             "hex": "#5C2983",
//             "title": "Collabora Online",
//             "slug": "collaboraonline"
//         },
//         "comicfury": {
//             "hex": "#79BD42",
//             "title": "ComicFury",
//             "slug": "comicfury"
//         },
//         "comma": {
//             "hex": "#51FF00",
//             "title": "comma",
//             "slug": "comma"
//         },
//         "commerzbank": {
//             "hex": "#FFCC33",
//             "title": "Commerzbank",
//             "slug": "commerzbank"
//         },
//         "commitlint": {
//             "hex": "#000000",
//             "title": "commitlint",
//             "slug": "commitlint"
//         },
//         "commodore": {
//             "hex": "#1E2A4E",
//             "title": "Commodore",
//             "slug": "commodore"
//         },
//         "commonworkflowlanguage": {
//             "hex": "#B5314C",
//             "title": "Common Workflow Language",
//             "slug": "commonworkflowlanguage"
//         },
//         "compilerexplorer": {
//             "hex": "#67C52A",
//             "title": "Compiler Explorer",
//             "slug": "compilerexplorer"
//         },
//         "composer": {
//             "hex": "#885630",
//             "title": "Composer",
//             "slug": "composer"
//         },
//         "comptia": {
//             "hex": "#C8202F",
//             "title": "CompTIA",
//             "slug": "comptia"
//         },
//         "comsol": {
//             "hex": "#368CCB",
//             "title": "Comsol",
//             "slug": "comsol"
//         },
//         "conan": {
//             "hex": "#6699CB",
//             "title": "Conan",
//             "slug": "conan"
//         },
//         "concourse": {
//             "hex": "#3398DC",
//             "title": "Concourse",
//             "slug": "concourse"
//         },
//         "condaforge": {
//             "hex": "#000000",
//             "title": "Conda-Forge",
//             "slug": "condaforge"
//         },
//         "conekta": {
//             "hex": "#0A1837",
//             "title": "Conekta",
//             "slug": "conekta"
//         },
//         "confluence": {
//             "hex": "#172B4D",
//             "title": "Confluence",
//             "slug": "confluence"
//         },
//         "construct3": {
//             "hex": "#00FFDA",
//             "title": "Construct 3",
//             "slug": "construct3"
//         },
//         "consul": {
//             "hex": "#F24C53",
//             "title": "Consul",
//             "slug": "consul"
//         },
//         "contabo": {
//             "hex": "#00AAEB",
//             "title": "Contabo",
//             "slug": "contabo"
//         },
//         "contactlesspayment": {
//             "hex": "#000000",
//             "title": "Contactless Payment",
//             "slug": "contactlesspayment"
//         },
//         "containerd": {
//             "hex": "#575757",
//             "title": "containerd",
//             "slug": "containerd"
//         },
//         "contao": {
//             "hex": "#F47C00",
//             "title": "Contao",
//             "slug": "contao"
//         },
//         "contentful": {
//             "hex": "#2478CC",
//             "title": "Contentful",
//             "slug": "contentful"
//         },
//         "contentstack": {
//             "hex": "#E74C3D",
//             "title": "Contentstack",
//             "slug": "contentstack"
//         },
//         "continente": {
//             "hex": "#E31E24",
//             "title": "Continente",
//             "slug": "continente"
//         },
//         "contributorcovenant": {
//             "hex": "#5E0D73",
//             "title": "Contributor Covenant",
//             "slug": "contributorcovenant"
//         },
//         "conventionalcommits": {
//             "hex": "#FE5196",
//             "title": "Conventional Commits",
//             "slug": "conventionalcommits"
//         },
//         "convertio": {
//             "hex": "#FF3333",
//             "title": "Convertio",
//             "slug": "convertio"
//         },
//         "cookiecutter": {
//             "hex": "#D4AA00",
//             "title": "Cookiecutter",
//             "slug": "cookiecutter"
//         },
//         "coolermaster": {
//             "hex": "#1E1E28",
//             "title": "Cooler Master",
//             "slug": "coolermaster"
//         },
//         "copaairlines": {
//             "hex": "#0032A0",
//             "title": "Copa Airlines",
//             "slug": "copaairlines"
//         },
//         "coppel": {
//             "hex": "#0266AE",
//             "title": "Coppel",
//             "slug": "coppel"
//         },
//         "cora": {
//             "hex": "#E61845",
//             "title": "Cora",
//             "slug": "cora"
//         },
//         "coreldraw": {
//             "hex": "#000000",
//             "title": "CorelDRAW",
//             "slug": "coreldraw"
//         },
//         "coronaengine": {
//             "hex": "#F96F29",
//             "title": "Corona Engine",
//             "slug": "coronaengine"
//         },
//         "coronarenderer": {
//             "hex": "#E6502A",
//             "title": "Corona Renderer",
//             "slug": "coronarenderer"
//         },
//         "corsair": {
//             "hex": "#000000",
//             "title": "Corsair",
//             "slug": "corsair"
//         },
//         "couchbase": {
//             "hex": "#EA2328",
//             "title": "Couchbase",
//             "slug": "couchbase"
//         },
//         "counterstrike": {
//             "hex": "#000000",
//             "title": "Counter-Strike",
//             "slug": "counterstrike"
//         },
//         "countingworkspro": {
//             "hex": "#2E3084",
//             "title": "CountingWorks PRO",
//             "slug": "countingworkspro"
//         },
//         "coursera": {
//             "hex": "#0056D2",
//             "title": "Coursera",
//             "slug": "coursera"
//         },
//         "coveralls": {
//             "hex": "#3F5767",
//             "title": "Coveralls",
//             "slug": "coveralls"
//         },
//         "coze": {
//             "hex": "#4D53E8",
//             "title": "Coze",
//             "slug": "coze"
//         },
//         "cpanel": {
//             "hex": "#FF6C2C",
//             "title": "cPanel",
//             "slug": "cpanel"
//         },
//         "craftcms": {
//             "hex": "#E5422B",
//             "title": "Craft CMS",
//             "slug": "craftcms"
//         },
//         "craftsman": {
//             "hex": "#D6001C",
//             "title": "Craftsman",
//             "slug": "craftsman"
//         },
//         "cratedb": {
//             "hex": "#009DC7",
//             "title": "CrateDB",
//             "slug": "cratedb"
//         },
//         "crayon": {
//             "hex": "#FF6A4C",
//             "title": "Crayon",
//             "slug": "crayon"
//         },
//         "creality": {
//             "hex": "#000000",
//             "title": "Creality",
//             "slug": "creality"
//         },
//         "createreactapp": {
//             "hex": "#09D3AC",
//             "title": "Create React App",
//             "slug": "createreactapp"
//         },
//         "creativecommons": {
//             "hex": "#ED592F",
//             "title": "Creative Commons",
//             "slug": "creativecommons"
//         },
//         "creativetechnology": {
//             "hex": "#000000",
//             "title": "Creative Technology",
//             "slug": "creativetechnology"
//         },
//         "credly": {
//             "hex": "#FF6B00",
//             "title": "Credly",
//             "slug": "credly"
//         },
//         "crehana": {
//             "hex": "#4B22F4",
//             "title": "Crehana",
//             "slug": "crehana"
//         },
//         "crewunited": {
//             "hex": "#000000",
//             "title": "Crew United",
//             "slug": "crewunited"
//         },
//         "criticalrole": {
//             "hex": "#000000",
//             "title": "Critical Role",
//             "slug": "criticalrole"
//         },
//         "crowdin": {
//             "hex": "#2E3340",
//             "title": "Crowdin",
//             "slug": "crowdin"
//         },
//         "crowdsource": {
//             "hex": "#4285F4",
//             "title": "Crowdsource",
//             "slug": "crowdsource"
//         },
//         "crunchbase": {
//             "hex": "#0288D1",
//             "title": "Crunchbase",
//             "slug": "crunchbase"
//         },
//         "crunchyroll": {
//             "hex": "#F47521",
//             "title": "Crunchyroll",
//             "slug": "crunchyroll"
//         },
//         "cryengine": {
//             "hex": "#000000",
//             "title": "CRYENGINE",
//             "slug": "cryengine"
//         },
//         "cryptomator": {
//             "hex": "#49B04A",
//             "title": "Cryptomator",
//             "slug": "cryptomator"
//         },
//         "cryptpad": {
//             "hex": "#0087FF",
//             "title": "CryptPad",
//             "slug": "cryptpad"
//         },
//         "crystal": {
//             "hex": "#000000",
//             "title": "Crystal",
//             "slug": "crystal"
//         },
//         "csdn": {
//             "hex": "#FC5531",
//             "title": "CSDN",
//             "slug": "csdn"
//         },
//         "css": {
//             "hex": "#663399",
//             "title": "CSS",
//             "slug": "css"
//         },
//         "cssdesignawards": {
//             "hex": "#280FEE",
//             "title": "CSS Design Awards",
//             "slug": "cssdesignawards"
//         },
//         "cssmodules": {
//             "hex": "#000000",
//             "title": "CSS Modules",
//             "slug": "cssmodules"
//         },
//         "csswizardry": {
//             "hex": "#F43059",
//             "title": "CSS Wizardry",
//             "slug": "csswizardry"
//         },
//         "css3": {
//             "hex": "#1572B6",
//             "title": "CSS3",
//             "slug": "css3"
//         },
//         "cts": {
//             "hex": "#E53236",
//             "title": "CTS",
//             "slug": "cts"
//         },
//         "cucumber": {
//             "hex": "#23D96C",
//             "title": "Cucumber",
//             "slug": "cucumber"
//         },
//         "cultura": {
//             "hex": "#1D2C54",
//             "title": "Cultura",
//             "slug": "cultura"
//         },
//         "curl": {
//             "hex": "#073551",
//             "title": "curl",
//             "slug": "curl"
//         },
//         "curseforge": {
//             "hex": "#F16436",
//             "title": "CurseForge",
//             "slug": "curseforge"
//         },
//         "customink": {
//             "hex": "#4051B5",
//             "title": "Custom Ink",
//             "slug": "customink"
//         },
//         "cyberdefenders": {
//             "hex": "#335EEA",
//             "title": "CyberDefenders",
//             "slug": "cyberdefenders"
//         },
//         "cycling74": {
//             "hex": "#111111",
//             "title": "Cycling '74",
//             "slug": "cycling74"
//         },
//         "cypress": {
//             "hex": "#69D3A7",
//             "title": "Cypress",
//             "slug": "cypress"
//         },
//         "cytoscapedotjs": {
//             "hex": "#F7DF1E",
//             "title": "Cytoscape.js",
//             "slug": "cytoscapedotjs"
//         },
//         "d": {
//             "hex": "#B03931",
//             "title": "D",
//             "slug": "d"
//         },
//         "dedge": {
//             "hex": "#432975",
//             "title": "D-EDGE",
//             "slug": "dedge"
//         },
//         "dwavesystems": {
//             "hex": "#008CD7",
//             "title": "D-Wave Systems",
//             "slug": "dwavesystems"
//         },
//         "d3": {
//             "hex": "#F9A03C",
//             "title": "D3",
//             "slug": "d3"
//         },
//         "dacia": {
//             "hex": "#646B52",
//             "title": "Dacia",
//             "slug": "dacia"
//         },
//         "daf": {
//             "hex": "#00529B",
//             "title": "DAF",
//             "slug": "daf"
//         },
//         "dailydotdev": {
//             "hex": "#CE3DF3",
//             "title": "daily.dev",
//             "slug": "dailydotdev"
//         },
//         "dailymotion": {
//             "hex": "#0A0A0A",
//             "title": "Dailymotion",
//             "slug": "dailymotion"
//         },
//         "daisyui": {
//             "hex": "#1AD1A5",
//             "title": "DaisyUI",
//             "slug": "daisyui"
//         },
//         "dapr": {
//             "hex": "#0D2192",
//             "title": "Dapr",
//             "slug": "dapr"
//         },
//         "darkreader": {
//             "hex": "#141E24",
//             "title": "Dark Reader",
//             "slug": "darkreader"
//         },
//         "dart": {
//             "hex": "#0175C2",
//             "title": "Dart",
//             "slug": "dart"
//         },
//         "darty": {
//             "hex": "#EB1B23",
//             "title": "Darty",
//             "slug": "darty"
//         },
//         "daserste": {
//             "hex": "#001A4B",
//             "title": "Das Erste",
//             "slug": "daserste"
//         },
//         "dash": {
//             "hex": "#008DE4",
//             "title": "Dash",
//             "slug": "dash"
//         },
//         "dashlane": {
//             "hex": "#0E353D",
//             "title": "Dashlane",
//             "slug": "dashlane"
//         },
//         "dask": {
//             "hex": "#FC6E6B",
//             "title": "Dask",
//             "slug": "dask"
//         },
//         "dassaultsystemes": {
//             "hex": "#005386",
//             "title": "Dassault Systèmes",
//             "slug": "dassaultsystemes"
//         },
//         "datadotai": {
//             "hex": "#000000",
//             "title": "data.ai",
//             "slug": "datadotai"
//         },
//         "databricks": {
//             "hex": "#FF3621",
//             "title": "Databricks",
//             "slug": "databricks"
//         },
//         "datacamp": {
//             "hex": "#03EF62",
//             "title": "DataCamp",
//             "slug": "datacamp"
//         },
//         "datadog": {
//             "hex": "#632CA6",
//             "title": "Datadog",
//             "slug": "datadog"
//         },
//         "datagrip": {
//             "hex": "#000000",
//             "title": "DataGrip",
//             "slug": "datagrip"
//         },
//         "dataiku": {
//             "hex": "#2AB1AC",
//             "title": "Dataiku",
//             "slug": "dataiku"
//         },
//         "datastax": {
//             "hex": "#000000",
//             "title": "DataStax",
//             "slug": "datastax"
//         },
//         "datefns": {
//             "hex": "#770C56",
//             "title": "date-fns",
//             "slug": "datefns"
//         },
//         "datev": {
//             "hex": "#9BD547",
//             "title": "DATEV",
//             "slug": "datev"
//         },
//         "datocms": {
//             "hex": "#FF7751",
//             "title": "DatoCMS",
//             "slug": "datocms"
//         },
//         "datto": {
//             "hex": "#199ED9",
//             "title": "Datto",
//             "slug": "datto"
//         },
//         "davinciresolve": {
//             "hex": "#233A51",
//             "title": "DaVinci Resolve",
//             "slug": "davinciresolve"
//         },
//         "dazhongdianping": {
//             "hex": "#FF6633",
//             "title": "Dazhong Dianping",
//             "slug": "dazhongdianping"
//         },
//         "dazn": {
//             "hex": "#F8F8F5",
//             "title": "DAZN",
//             "slug": "dazn"
//         },
//         "dbeaver": {
//             "hex": "#382923",
//             "title": "DBeaver",
//             "slug": "dbeaver"
//         },
//         "dblp": {
//             "hex": "#004F9F",
//             "title": "dblp",
//             "slug": "dblp"
//         },
//         "dbt": {
//             "hex": "#FF694B",
//             "title": "dbt",
//             "slug": "dbt"
//         },
//         "dcentertainment": {
//             "hex": "#0078F0",
//             "title": "DC Entertainment",
//             "slug": "dcentertainment"
//         },
//         "delonghi": {
//             "hex": "#072240",
//             "title": "De'Longhi",
//             "slug": "delonghi"
//         },
//         "debian": {
//             "hex": "#A81D33",
//             "title": "Debian",
//             "slug": "debian"
//         },
//         "debridlink": {
//             "hex": "#264E70",
//             "title": "Debrid-Link",
//             "slug": "debridlink"
//         },
//         "decapcms": {
//             "hex": "#FF0082",
//             "title": "Decap CMS",
//             "slug": "decapcms"
//         },
//         "decentraland": {
//             "hex": "#FF2D55",
//             "title": "Decentraland",
//             "slug": "decentraland"
//         },
//         "deepcool": {
//             "hex": "#068584",
//             "title": "DeepCool",
//             "slug": "deepcool"
//         },
//         "deepgram": {
//             "hex": "#13EF93",
//             "title": "Deepgram",
//             "slug": "deepgram"
//         },
//         "deepin": {
//             "hex": "#007CFF",
//             "title": "deepin",
//             "slug": "deepin"
//         },
//         "deepl": {
//             "hex": "#0F2B46",
//             "title": "DeepL",
//             "slug": "deepl"
//         },
//         "deepnote": {
//             "hex": "#3793EF",
//             "title": "Deepnote",
//             "slug": "deepnote"
//         },
//         "deliveroo": {
//             "hex": "#00CCBC",
//             "title": "Deliveroo",
//             "slug": "deliveroo"
//         },
//         "dell": {
//             "hex": "#007DB8",
//             "title": "Dell",
//             "slug": "dell"
//         },
//         "delphi": {
//             "hex": "#E62431",
//             "title": "Delphi",
//             "slug": "delphi"
//         },
//         "delta": {
//             "hex": "#003366",
//             "title": "Delta",
//             "slug": "delta"
//         },
//         "deluge": {
//             "hex": "#094491",
//             "title": "Deluge",
//             "slug": "deluge"
//         },
//         "deno": {
//             "hex": "#70FFAF",
//             "title": "Deno",
//             "slug": "deno"
//         },
//         "denon": {
//             "hex": "#0B131A",
//             "title": "Denon",
//             "slug": "denon"
//         },
//         "dependabot": {
//             "hex": "#025E8C",
//             "title": "Dependabot",
//             "slug": "dependabot"
//         },
//         "depositphotos": {
//             "hex": "#000000",
//             "title": "Depositphotos",
//             "slug": "depositphotos"
//         },
//         "derspiegel": {
//             "hex": "#E64415",
//             "title": "Der Spiegel",
//             "slug": "derspiegel"
//         },
//         "deutschebahn": {
//             "hex": "#F01414",
//             "title": "Deutsche Bahn",
//             "slug": "deutschebahn"
//         },
//         "deutschebank": {
//             "hex": "#0018A8",
//             "title": "Deutsche Bank",
//             "slug": "deutschebank"
//         },
//         "deutschepost": {
//             "hex": "#FFCC00",
//             "title": "Deutsche Post",
//             "slug": "deutschepost"
//         },
//         "deutschetelekom": {
//             "hex": "#E20074",
//             "title": "Deutsche Telekom",
//             "slug": "deutschetelekom"
//         },
//         "deutschewelle": {
//             "hex": "#05B2FC",
//             "title": "Deutsche Welle",
//             "slug": "deutschewelle"
//         },
//         "devdotto": {
//             "hex": "#0A0A0A",
//             "title": "dev.to",
//             "slug": "devdotto"
//         },
//         "devexpress": {
//             "hex": "#FF7200",
//             "title": "DevExpress",
//             "slug": "devexpress"
//         },
//         "deviantart": {
//             "hex": "#05CC47",
//             "title": "DeviantArt",
//             "slug": "deviantart"
//         },
//         "devpost": {
//             "hex": "#003E54",
//             "title": "Devpost",
//             "slug": "devpost"
//         },
//         "devrant": {
//             "hex": "#F99A66",
//             "title": "devRant",
//             "slug": "devrant"
//         },
//         "dgraph": {
//             "hex": "#E50695",
//             "title": "Dgraph",
//             "slug": "dgraph"
//         },
//         "dhl": {
//             "hex": "#FFCC00",
//             "title": "DHL",
//             "slug": "dhl"
//         },
//         "diagramsdotnet": {
//             "hex": "#F08705",
//             "title": "diagrams.net",
//             "slug": "diagramsdotnet"
//         },
//         "dialogflow": {
//             "hex": "#FF9800",
//             "title": "Dialogflow",
//             "slug": "dialogflow"
//         },
//         "diaspora": {
//             "hex": "#000000",
//             "title": "Diaspora",
//             "slug": "diaspora"
//         },
//         "dictionarydotcom": {
//             "hex": "#0049D7",
//             "title": "Dictionary.com",
//             "slug": "dictionarydotcom"
//         },
//         "digg": {
//             "hex": "#000000",
//             "title": "Digg",
//             "slug": "digg"
//         },
//         "digikeyelectronics": {
//             "hex": "#CC0000",
//             "title": "Digi-Key Electronics",
//             "slug": "digikeyelectronics"
//         },
//         "digitalocean": {
//             "hex": "#0080FF",
//             "title": "DigitalOcean",
//             "slug": "digitalocean"
//         },
//         "dinersclub": {
//             "hex": "#004C97",
//             "title": "Diners Club",
//             "slug": "dinersclub"
//         },
//         "dior": {
//             "hex": "#000000",
//             "title": "Dior",
//             "slug": "dior"
//         },
//         "directus": {
//             "hex": "#263238",
//             "title": "Directus",
//             "slug": "directus"
//         },
//         "discogs": {
//             "hex": "#333333",
//             "title": "Discogs",
//             "slug": "discogs"
//         },
//         "discord": {
//             "hex": "#5865F2",
//             "title": "Discord",
//             "slug": "discord"
//         },
//         "discourse": {
//             "hex": "#000000",
//             "title": "Discourse",
//             "slug": "discourse"
//         },
//         "discover": {
//             "hex": "#FF6000",
//             "title": "Discover",
//             "slug": "discover"
//         },
//         "disqus": {
//             "hex": "#2E9FFF",
//             "title": "Disqus",
//             "slug": "disqus"
//         },
//         "disroot": {
//             "hex": "#50162D",
//             "title": "Disroot",
//             "slug": "disroot"
//         },
//         "distrokid": {
//             "hex": "#231F20",
//             "title": "Distrokid",
//             "slug": "distrokid"
//         },
//         "django": {
//             "hex": "#092E20",
//             "title": "Django",
//             "slug": "django"
//         },
//         "dji": {
//             "hex": "#000000",
//             "title": "DJI",
//             "slug": "dji"
//         },
//         "dlib": {
//             "hex": "#008000",
//             "title": "Dlib",
//             "slug": "dlib"
//         },
//         "dlna": {
//             "hex": "#48A842",
//             "title": "DLNA",
//             "slug": "dlna"
//         },
//         "dm": {
//             "hex": "#002878",
//             "title": "dm",
//             "slug": "dm"
//         },
//         "docker": {
//             "hex": "#2496ED",
//             "title": "Docker",
//             "slug": "docker"
//         },
//         "docsdotrs": {
//             "hex": "#000000",
//             "title": "Docs.rs",
//             "slug": "docsdotrs"
//         },
//         "docsify": {
//             "hex": "#2ECE53",
//             "title": "Docsify",
//             "slug": "docsify"
//         },
//         "doctrine": {
//             "hex": "#FC6A31",
//             "title": "Doctrine",
//             "slug": "doctrine"
//         },
//         "docusaurus": {
//             "hex": "#3ECC5F",
//             "title": "Docusaurus",
//             "slug": "docusaurus"
//         },
//         "dogecoin": {
//             "hex": "#C2A633",
//             "title": "Dogecoin",
//             "slug": "dogecoin"
//         },
//         "doi": {
//             "hex": "#FAB70C",
//             "title": "DOI",
//             "slug": "doi"
//         },
//         "dolby": {
//             "hex": "#000000",
//             "title": "Dolby",
//             "slug": "dolby"
//         },
//         "doordash": {
//             "hex": "#FF3008",
//             "title": "DoorDash",
//             "slug": "doordash"
//         },
//         "dota2": {
//             "hex": "#BF2E1A",
//             "title": "Dota 2",
//             "slug": "dota2"
//         },
//         "douban": {
//             "hex": "#2D963D",
//             "title": "Douban",
//             "slug": "douban"
//         },
//         "doubanread": {
//             "hex": "#389EAC",
//             "title": "Douban Read",
//             "slug": "doubanread"
//         },
//         "dovecot": {
//             "hex": "#54BCAB",
//             "title": "Dovecot",
//             "slug": "dovecot"
//         },
//         "dovetail": {
//             "hex": "#190041",
//             "title": "Dovetail",
//             "slug": "dovetail"
//         },
//         "downdetector": {
//             "hex": "#FF160A",
//             "title": "Downdetector",
//             "slug": "downdetector"
//         },
//         "doxygen": {
//             "hex": "#2C4AA8",
//             "title": "Doxygen",
//             "slug": "doxygen"
//         },
//         "dpd": {
//             "hex": "#DC0032",
//             "title": "DPD",
//             "slug": "dpd"
//         },
//         "dragonframe": {
//             "hex": "#D4911E",
//             "title": "Dragonframe",
//             "slug": "dragonframe"
//         },
//         "draugiemdotlv": {
//             "hex": "#FF6600",
//             "title": "Draugiem.lv",
//             "slug": "draugiemdotlv"
//         },
//         "dreamstime": {
//             "hex": "#50A901",
//             "title": "Dreamstime",
//             "slug": "dreamstime"
//         },
//         "dribbble": {
//             "hex": "#EA4C89",
//             "title": "Dribbble",
//             "slug": "dribbble"
//         },
//         "drizzle": {
//             "hex": "#C5F74F",
//             "title": "Drizzle",
//             "slug": "drizzle"
//         },
//         "drone": {
//             "hex": "#212121",
//             "title": "Drone",
//             "slug": "drone"
//         },
//         "drooble": {
//             "hex": "#19C4BE",
//             "title": "Drooble",
//             "slug": "drooble"
//         },
//         "dropbox": {
//             "hex": "#0061FF",
//             "title": "Dropbox",
//             "slug": "dropbox"
//         },
//         "drupal": {
//             "hex": "#0678BE",
//             "title": "Drupal",
//             "slug": "drupal"
//         },
//         "dsautomobiles": {
//             "hex": "#1D1717",
//             "title": "DS Automobiles",
//             "slug": "dsautomobiles"
//         },
//         "dts": {
//             "hex": "#F98B2B",
//             "title": "DTS",
//             "slug": "dts"
//         },
//         "dtube": {
//             "hex": "#F01A30",
//             "title": "DTube",
//             "slug": "dtube"
//         },
//         "ducati": {
//             "hex": "#CC0000",
//             "title": "Ducati",
//             "slug": "ducati"
//         },
//         "duckdb": {
//             "hex": "#FFF000",
//             "title": "DuckDB",
//             "slug": "duckdb"
//         },
//         "duckduckgo": {
//             "hex": "#DE5833",
//             "title": "DuckDuckGo",
//             "slug": "duckduckgo"
//         },
//         "dungeonsanddragons": {
//             "hex": "#ED1C24",
//             "title": "Dungeons & Dragons",
//             "slug": "dungeonsanddragons"
//         },
//         "dunked": {
//             "hex": "#2DA9D7",
//             "title": "Dunked",
//             "slug": "dunked"
//         },
//         "dunzo": {
//             "hex": "#00D290",
//             "title": "Dunzo",
//             "slug": "dunzo"
//         },
//         "duolingo": {
//             "hex": "#58CC02",
//             "title": "Duolingo",
//             "slug": "duolingo"
//         },
//         "duplicati": {
//             "hex": "#1E3A8A",
//             "title": "Duplicati",
//             "slug": "duplicati"
//         },
//         "dvc": {
//             "hex": "#13ADC7",
//             "title": "DVC",
//             "slug": "dvc"
//         },
//         "dwm": {
//             "hex": "#1177AA",
//             "title": "dwm",
//             "slug": "dwm"
//         },
//         "dynatrace": {
//             "hex": "#1496FF",
//             "title": "Dynatrace",
//             "slug": "dynatrace"
//         },
//         "edotleclerc": {
//             "hex": "#0066CC",
//             "title": "E.Leclerc",
//             "slug": "edotleclerc"
//         },
//         "e3": {
//             "hex": "#E73D2F",
//             "title": "E3",
//             "slug": "e3"
//         },
//         "ea": {
//             "hex": "#000000",
//             "title": "EA",
//             "slug": "ea"
//         },
//         "eac": {
//             "hex": "#000000",
//             "title": "EAC",
//             "slug": "eac"
//         },
//         "eagle": {
//             "hex": "#0072EF",
//             "title": "Eagle",
//             "slug": "eagle"
//         },
//         "easyeda": {
//             "hex": "#1765F6",
//             "title": "EasyEDA",
//             "slug": "easyeda"
//         },
//         "easyjet": {
//             "hex": "#FF6600",
//             "title": "easyJet",
//             "slug": "easyjet"
//         },
//         "ebay": {
//             "hex": "#E53238",
//             "title": "eBay",
//             "slug": "ebay"
//         },
//         "ebox": {
//             "hex": "#BE2323",
//             "title": "EBOX",
//             "slug": "ebox"
//         },
//         "eclipseadoptium": {
//             "hex": "#FF1464",
//             "title": "Eclipse Adoptium",
//             "slug": "eclipseadoptium"
//         },
//         "eclipseche": {
//             "hex": "#525C86",
//             "title": "Eclipse Che",
//             "slug": "eclipseche"
//         },
//         "eclipseide": {
//             "hex": "#2C2255",
//             "title": "Eclipse IDE",
//             "slug": "eclipseide"
//         },
//         "eclipsejetty": {
//             "hex": "#FC390E",
//             "title": "Eclipse Jetty",
//             "slug": "eclipsejetty"
//         },
//         "eclipsemosquitto": {
//             "hex": "#3C5280",
//             "title": "Eclipse Mosquitto",
//             "slug": "eclipsemosquitto"
//         },
//         "eclipsevertdotx": {
//             "hex": "#782A90",
//             "title": "Eclipse Vert.x",
//             "slug": "eclipsevertdotx"
//         },
//         "ecosia": {
//             "hex": "#008009",
//             "title": "Ecosia",
//             "slug": "ecosia"
//         },
//         "ecovacs": {
//             "hex": "#1E384B",
//             "title": "Ecovacs",
//             "slug": "ecovacs"
//         },
//         "edeka": {
//             "hex": "#1B66B3",
//             "title": "EDEKA",
//             "slug": "edeka"
//         },
//         "edgeimpulse": {
//             "hex": "#3B47C2",
//             "title": "Edge Impulse",
//             "slug": "edgeimpulse"
//         },
//         "editorconfig": {
//             "hex": "#FEFEFE",
//             "title": "EditorConfig",
//             "slug": "editorconfig"
//         },
//         "educative": {
//             "hex": "#4951F5",
//             "title": "Educative",
//             "slug": "educative"
//         },
//         "edx": {
//             "hex": "#02262B",
//             "title": "edX",
//             "slug": "edx"
//         },
//         "egghead": {
//             "hex": "#FCFBFA",
//             "title": "egghead",
//             "slug": "egghead"
//         },
//         "egnyte": {
//             "hex": "#00968F",
//             "title": "Egnyte",
//             "slug": "egnyte"
//         },
//         "eight": {
//             "hex": "#0054FF",
//             "title": "Eight",
//             "slug": "eight"
//         },
//         "eightsleep": {
//             "hex": "#262729",
//             "title": "Eight Sleep",
//             "slug": "eightsleep"
//         },
//         "ejs": {
//             "hex": "#B4CA65",
//             "title": "EJS",
//             "slug": "ejs"
//         },
//         "elastic": {
//             "hex": "#005571",
//             "title": "Elastic",
//             "slug": "elastic"
//         },
//         "elasticcloud": {
//             "hex": "#005571",
//             "title": "Elastic Cloud",
//             "slug": "elasticcloud"
//         },
//         "elasticstack": {
//             "hex": "#005571",
//             "title": "Elastic Stack",
//             "slug": "elasticstack"
//         },
//         "elasticsearch": {
//             "hex": "#005571",
//             "title": "Elasticsearch",
//             "slug": "elasticsearch"
//         },
//         "elavon": {
//             "hex": "#0C2074",
//             "title": "Elavon",
//             "slug": "elavon"
//         },
//         "electron": {
//             "hex": "#47848F",
//             "title": "Electron",
//             "slug": "electron"
//         },
//         "electronfiddle": {
//             "hex": "#E79537",
//             "title": "Electron Fiddle",
//             "slug": "electronfiddle"
//         },
//         "electronbuilder": {
//             "hex": "#000000",
//             "title": "electron-builder",
//             "slug": "electronbuilder"
//         },
//         "elegoo": {
//             "hex": "#2C3A83",
//             "title": "Elegoo",
//             "slug": "elegoo"
//         },
//         "element": {
//             "hex": "#0DBD8B",
//             "title": "Element",
//             "slug": "element"
//         },
//         "elementary": {
//             "hex": "#64BAFF",
//             "title": "elementary",
//             "slug": "elementary"
//         },
//         "elementor": {
//             "hex": "#92003B",
//             "title": "Elementor",
//             "slug": "elementor"
//         },
//         "elevenlabs": {
//             "hex": "#000000",
//             "title": "ElevenLabs",
//             "slug": "elevenlabs"
//         },
//         "eleventy": {
//             "hex": "#222222",
//             "title": "Eleventy",
//             "slug": "eleventy"
//         },
//         "elgato": {
//             "hex": "#101010",
//             "title": "Elgato",
//             "slug": "elgato"
//         },
//         "elixir": {
//             "hex": "#4B275F",
//             "title": "Elixir",
//             "slug": "elixir"
//         },
//         "elm": {
//             "hex": "#1293D8",
//             "title": "Elm",
//             "slug": "elm"
//         },
//         "elsevier": {
//             "hex": "#FF6C00",
//             "title": "Elsevier",
//             "slug": "elsevier"
//         },
//         "embarcadero": {
//             "hex": "#ED1F35",
//             "title": "Embarcadero",
//             "slug": "embarcadero"
//         },
//         "embark": {
//             "hex": "#000000",
//             "title": "Embark",
//             "slug": "embark"
//         },
//         "emberdotjs": {
//             "hex": "#E04E39",
//             "title": "Ember.js",
//             "slug": "emberdotjs"
//         },
//         "emby": {
//             "hex": "#52B54B",
//             "title": "Emby",
//             "slug": "emby"
//         },
//         "emirates": {
//             "hex": "#D71921",
//             "title": "Emirates",
//             "slug": "emirates"
//         },
//         "emlakjet": {
//             "hex": "#0AE524",
//             "title": "Emlakjet",
//             "slug": "emlakjet"
//         },
//         "empirekred": {
//             "hex": "#72BE50",
//             "title": "Empire Kred",
//             "slug": "empirekred"
//         },
//         "endeavouros": {
//             "hex": "#7F7FFF",
//             "title": "EndeavourOS",
//             "slug": "endeavouros"
//         },
//         "engadget": {
//             "hex": "#000000",
//             "title": "Engadget",
//             "slug": "engadget"
//         },
//         "enpass": {
//             "hex": "#0D47A1",
//             "title": "Enpass",
//             "slug": "enpass"
//         },
//         "enterprisedb": {
//             "hex": "#FF3E00",
//             "title": "EnterpriseDB",
//             "slug": "enterprisedb"
//         },
//         "envato": {
//             "hex": "#87E64B",
//             "title": "Envato",
//             "slug": "envato"
//         },
//         "envoyproxy": {
//             "hex": "#AC6199",
//             "title": "Envoy Proxy",
//             "slug": "envoyproxy"
//         },
//         "epel": {
//             "hex": "#FC0000",
//             "title": "EPEL",
//             "slug": "epel"
//         },
//         "epicgames": {
//             "hex": "#313131",
//             "title": "Epic Games",
//             "slug": "epicgames"
//         },
//         "epson": {
//             "hex": "#003399",
//             "title": "Epson",
//             "slug": "epson"
//         },
//         "equinixmetal": {
//             "hex": "#ED2224",
//             "title": "Equinix Metal",
//             "slug": "equinixmetal"
//         },
//         "eraser": {
//             "hex": "#EC2C40",
//             "title": "Eraser",
//             "slug": "eraser"
//         },
//         "ericsson": {
//             "hex": "#0082F0",
//             "title": "Ericsson",
//             "slug": "ericsson"
//         },
//         "erlang": {
//             "hex": "#A90533",
//             "title": "Erlang",
//             "slug": "erlang"
//         },
//         "erpnext": {
//             "hex": "#0089FF",
//             "title": "ERPNext",
//             "slug": "erpnext"
//         },
//         "esbuild": {
//             "hex": "#FFCF00",
//             "title": "esbuild",
//             "slug": "esbuild"
//         },
//         "esea": {
//             "hex": "#0E9648",
//             "title": "ESEA",
//             "slug": "esea"
//         },
//         "eslgaming": {
//             "hex": "#FFFF09",
//             "title": "ESLGaming",
//             "slug": "eslgaming"
//         },
//         "eslint": {
//             "hex": "#4B32C3",
//             "title": "ESLint",
//             "slug": "eslint"
//         },
//         "esotericsoftware": {
//             "hex": "#3FA9F5",
//             "title": "Esoteric Software",
//             "slug": "esotericsoftware"
//         },
//         "esphome": {
//             "hex": "#000000",
//             "title": "ESPHome",
//             "slug": "esphome"
//         },
//         "espressif": {
//             "hex": "#E7352C",
//             "title": "Espressif",
//             "slug": "espressif"
//         },
//         "esri": {
//             "hex": "#000000",
//             "title": "ESRI",
//             "slug": "esri"
//         },
//         "etcd": {
//             "hex": "#419EDA",
//             "title": "etcd",
//             "slug": "etcd"
//         },
//         "ethereum": {
//             "hex": "#3C3C3D",
//             "title": "Ethereum",
//             "slug": "ethereum"
//         },
//         "ethers": {
//             "hex": "#2535A0",
//             "title": "Ethers",
//             "slug": "ethers"
//         },
//         "ethiopianairlines": {
//             "hex": "#648B1A",
//             "title": "Ethiopian Airlines",
//             "slug": "ethiopianairlines"
//         },
//         "etihadairways": {
//             "hex": "#BD8B13",
//             "title": "Etihad Airways",
//             "slug": "etihadairways"
//         },
//         "etsy": {
//             "hex": "#F16521",
//             "title": "Etsy",
//             "slug": "etsy"
//         },
//         "europeanunion": {
//             "hex": "#003399",
//             "title": "European Union",
//             "slug": "europeanunion"
//         },
//         "eventstore": {
//             "hex": "#5AB552",
//             "title": "Event Store",
//             "slug": "eventstore"
//         },
//         "eventbrite": {
//             "hex": "#F05537",
//             "title": "Eventbrite",
//             "slug": "eventbrite"
//         },
//         "evernote": {
//             "hex": "#00A82D",
//             "title": "Evernote",
//             "slug": "evernote"
//         },
//         "excalidraw": {
//             "hex": "#6965DB",
//             "title": "Excalidraw",
//             "slug": "excalidraw"
//         },
//         "exercism": {
//             "hex": "#009CAB",
//             "title": "Exercism",
//             "slug": "exercism"
//         },
//         "exordo": {
//             "hex": "#DAA449",
//             "title": "Exordo",
//             "slug": "exordo"
//         },
//         "exoscale": {
//             "hex": "#DA291C",
//             "title": "Exoscale",
//             "slug": "exoscale"
//         },
//         "expedia": {
//             "hex": "#191E3B",
//             "title": "Expedia",
//             "slug": "expedia"
//         },
//         "expensify": {
//             "hex": "#0185FF",
//             "title": "Expensify",
//             "slug": "expensify"
//         },
//         "expertsexchange": {
//             "hex": "#00AAE7",
//             "title": "Experts Exchange",
//             "slug": "expertsexchange"
//         },
//         "expo": {
//             "hex": "#000020",
//             "title": "Expo",
//             "slug": "expo"
//         },
//         "express": {
//             "hex": "#000000",
//             "title": "Express",
//             "slug": "express"
//         },
//         "expressdotcom": {
//             "hex": "#000000",
//             "title": "Express.com",
//             "slug": "expressdotcom"
//         },
//         "expressvpn": {
//             "hex": "#DA3940",
//             "title": "ExpressVPN",
//             "slug": "expressvpn"
//         },
//         "eyeem": {
//             "hex": "#000000",
//             "title": "EyeEm",
//             "slug": "eyeem"
//         },
//         "fdroid": {
//             "hex": "#1976D2",
//             "title": "F-Droid",
//             "slug": "fdroid"
//         },
//         "fsecure": {
//             "hex": "#00BAFF",
//             "title": "F-Secure",
//             "slug": "fsecure"
//         },
//         "f": {
//             "hex": "#378BBA",
//             "title": "F#",
//             "slug": "f"
//         },
//         "f1": {
//             "hex": "#E10600",
//             "title": "F1",
//             "slug": "f1"
//         },
//         "f5": {
//             "hex": "#E4002B",
//             "title": "F5",
//             "slug": "f5"
//         },
//         "facebook": {
//             "hex": "#0866FF",
//             "title": "Facebook",
//             "slug": "facebook"
//         },
//         "facebookgaming": {
//             "hex": "#005FED",
//             "title": "Facebook Gaming",
//             "slug": "facebookgaming"
//         },
//         "facebooklive": {
//             "hex": "#ED4242",
//             "title": "Facebook Live",
//             "slug": "facebooklive"
//         },
//         "faceit": {
//             "hex": "#FF5500",
//             "title": "FACEIT",
//             "slug": "faceit"
//         },
//         "facepunch": {
//             "hex": "#EC1C24",
//             "title": "Facepunch",
//             "slug": "facepunch"
//         },
//         "fairphone": {
//             "hex": "#4495D1",
//             "title": "Fairphone",
//             "slug": "fairphone"
//         },
//         "falco": {
//             "hex": "#00AEC7",
//             "title": "Falco",
//             "slug": "falco"
//         },
//         "falcon": {
//             "hex": "#F0AD4E",
//             "title": "Falcon",
//             "slug": "falcon"
//         },
//         "fampay": {
//             "hex": "#FFAD00",
//             "title": "FamPay",
//             "slug": "fampay"
//         },
//         "fandango": {
//             "hex": "#FF7300",
//             "title": "Fandango",
//             "slug": "fandango"
//         },
//         "fandom": {
//             "hex": "#FA005A",
//             "title": "Fandom",
//             "slug": "fandom"
//         },
//         "fanfou": {
//             "hex": "#00CCFF",
//             "title": "Fanfou",
//             "slug": "fanfou"
//         },
//         "fantom": {
//             "hex": "#0928FF",
//             "title": "Fantom",
//             "slug": "fantom"
//         },
//         "farcaster": {
//             "hex": "#855DCD",
//             "title": "Farcaster",
//             "slug": "farcaster"
//         },
//         "fareharbor": {
//             "hex": "#0A6ECE",
//             "title": "FareHarbor",
//             "slug": "fareharbor"
//         },
//         "farfetch": {
//             "hex": "#000000",
//             "title": "FARFETCH",
//             "slug": "farfetch"
//         },
//         "fastapi": {
//             "hex": "#009688",
//             "title": "FastAPI",
//             "slug": "fastapi"
//         },
//         "fastify": {
//             "hex": "#000000",
//             "title": "Fastify",
//             "slug": "fastify"
//         },
//         "fastlane": {
//             "hex": "#00F200",
//             "title": "Fastlane",
//             "slug": "fastlane"
//         },
//         "fastly": {
//             "hex": "#FF282D",
//             "title": "Fastly",
//             "slug": "fastly"
//         },
//         "fathom": {
//             "hex": "#9187FF",
//             "title": "Fathom",
//             "slug": "fathom"
//         },
//         "fauna": {
//             "hex": "#3A1AB6",
//             "title": "Fauna",
//             "slug": "fauna"
//         },
//         "favro": {
//             "hex": "#512DA8",
//             "title": "Favro",
//             "slug": "favro"
//         },
//         "fcc": {
//             "hex": "#1C3664",
//             "title": "FCC",
//             "slug": "fcc"
//         },
//         "fedex": {
//             "hex": "#4D148C",
//             "title": "FedEx",
//             "slug": "fedex"
//         },
//         "fedora": {
//             "hex": "#51A2DA",
//             "title": "Fedora",
//             "slug": "fedora"
//         },
//         "feedly": {
//             "hex": "#2BB24C",
//             "title": "Feedly",
//             "slug": "feedly"
//         },
//         "ferrari": {
//             "hex": "#D40000",
//             "title": "Ferrari",
//             "slug": "ferrari"
//         },
//         "ferrarindotvdot": {
//             "hex": "#EB2E2C",
//             "title": "Ferrari N.V.",
//             "slug": "ferrarindotvdot"
//         },
//         "ferretdb": {
//             "hex": "#042133",
//             "title": "FerretDB",
//             "slug": "ferretdb"
//         },
//         "ffmpeg": {
//             "hex": "#007808",
//             "title": "FFmpeg",
//             "slug": "ffmpeg"
//         },
//         "fi": {
//             "hex": "#00B899",
//             "title": "Fi",
//             "slug": "fi"
//         },
//         "fiat": {
//             "hex": "#941711",
//             "title": "Fiat",
//             "slug": "fiat"
//         },
//         "fidoalliance": {
//             "hex": "#FFBF3B",
//             "title": "Fido Alliance",
//             "slug": "fidoalliance"
//         },
//         "fifa": {
//             "hex": "#326295",
//             "title": "FIFA",
//             "slug": "fifa"
//         },
//         "fig": {
//             "hex": "#000000",
//             "title": "Fig",
//             "slug": "fig"
//         },
//         "figma": {
//             "hex": "#F24E1E",
//             "title": "Figma",
//             "slug": "figma"
//         },
//         "figshare": {
//             "hex": "#556472",
//             "title": "figshare",
//             "slug": "figshare"
//         },
//         "fila": {
//             "hex": "#002D62",
//             "title": "Fila",
//             "slug": "fila"
//         },
//         "filament": {
//             "hex": "#FDAE4B",
//             "title": "Filament",
//             "slug": "filament"
//         },
//         "filedotio": {
//             "hex": "#3D3C9D",
//             "title": "File.io",
//             "slug": "filedotio"
//         },
//         "files": {
//             "hex": "#4285F4",
//             "title": "Files",
//             "slug": "files"
//         },
//         "filezilla": {
//             "hex": "#BF0000",
//             "title": "FileZilla",
//             "slug": "filezilla"
//         },
//         "fineco": {
//             "hex": "#00549F",
//             "title": "Fineco",
//             "slug": "fineco"
//         },
//         "fing": {
//             "hex": "#009AEE",
//             "title": "Fing",
//             "slug": "fing"
//         },
//         "firebase": {
//             "hex": "#DD2C00",
//             "title": "Firebase",
//             "slug": "firebase"
//         },
//         "firefish": {
//             "hex": "#F07A5B",
//             "title": "Firefish",
//             "slug": "firefish"
//         },
//         "fireflyiii": {
//             "hex": "#CD5029",
//             "title": "Firefly III",
//             "slug": "fireflyiii"
//         },
//         "firefox": {
//             "hex": "#FF7139",
//             "title": "Firefox",
//             "slug": "firefox"
//         },
//         "firefoxbrowser": {
//             "hex": "#FF7139",
//             "title": "Firefox Browser",
//             "slug": "firefoxbrowser"
//         },
//         "fireship": {
//             "hex": "#EB844E",
//             "title": "Fireship",
//             "slug": "fireship"
//         },
//         "firewalla": {
//             "hex": "#C8332D",
//             "title": "Firewalla",
//             "slug": "firewalla"
//         },
//         "first": {
//             "hex": "#0066B3",
//             "title": "FIRST",
//             "slug": "first"
//         },
//         "fishshell": {
//             "hex": "#34C534",
//             "title": "fish shell",
//             "slug": "fishshell"
//         },
//         "fitbit": {
//             "hex": "#00B0B9",
//             "title": "Fitbit",
//             "slug": "fitbit"
//         },
//         "fivem": {
//             "hex": "#F40552",
//             "title": "FiveM",
//             "slug": "fivem"
//         },
//         "fiverr": {
//             "hex": "#1DBF73",
//             "title": "Fiverr",
//             "slug": "fiverr"
//         },
//         "fizz": {
//             "hex": "#00D672",
//             "title": "Fizz",
//             "slug": "fizz"
//         },
//         "flashforge": {
//             "hex": "#000000",
//             "title": "Flashforge",
//             "slug": "flashforge"
//         },
//         "flask": {
//             "hex": "#000000",
//             "title": "Flask",
//             "slug": "flask"
//         },
//         "flat": {
//             "hex": "#3481FE",
//             "title": "Flat",
//             "slug": "flat"
//         },
//         "flathub": {
//             "hex": "#000000",
//             "title": "Flathub",
//             "slug": "flathub"
//         },
//         "flatpak": {
//             "hex": "#4A90D9",
//             "title": "Flatpak",
//             "slug": "flatpak"
//         },
//         "flickr": {
//             "hex": "#0063DC",
//             "title": "Flickr",
//             "slug": "flickr"
//         },
//         "flightaware": {
//             "hex": "#19315B",
//             "title": "Flightaware",
//             "slug": "flightaware"
//         },
//         "flipboard": {
//             "hex": "#E12828",
//             "title": "Flipboard",
//             "slug": "flipboard"
//         },
//         "flipkart": {
//             "hex": "#2874F0",
//             "title": "Flipkart",
//             "slug": "flipkart"
//         },
//         "floatplane": {
//             "hex": "#00AEEF",
//             "title": "Floatplane",
//             "slug": "floatplane"
//         },
//         "flood": {
//             "hex": "#4285F4",
//             "title": "Flood",
//             "slug": "flood"
//         },
//         "fluentbit": {
//             "hex": "#49BDA5",
//             "title": "Fluent Bit",
//             "slug": "fluentbit"
//         },
//         "fluentd": {
//             "hex": "#0E83C8",
//             "title": "Fluentd",
//             "slug": "fluentd"
//         },
//         "fluke": {
//             "hex": "#FFC20E",
//             "title": "Fluke",
//             "slug": "fluke"
//         },
//         "flutter": {
//             "hex": "#02569B",
//             "title": "Flutter",
//             "slug": "flutter"
//         },
//         "flux": {
//             "hex": "#5468FF",
//             "title": "Flux",
//             "slug": "flux"
//         },
//         "flydotio": {
//             "hex": "#24175B",
//             "title": "Fly.io",
//             "slug": "flydotio"
//         },
//         "flyway": {
//             "hex": "#CC0200",
//             "title": "Flyway",
//             "slug": "flyway"
//         },
//         "fmod": {
//             "hex": "#000000",
//             "title": "FMOD",
//             "slug": "fmod"
//         },
//         "fnac": {
//             "hex": "#E1A925",
//             "title": "Fnac",
//             "slug": "fnac"
//         },
//         "folium": {
//             "hex": "#77B829",
//             "title": "Folium",
//             "slug": "folium"
//         },
//         "fonoma": {
//             "hex": "#02B78F",
//             "title": "Fonoma",
//             "slug": "fonoma"
//         },
//         "fontawesome": {
//             "hex": "#538DD7",
//             "title": "Font Awesome",
//             "slug": "fontawesome"
//         },
//         "fontbase": {
//             "hex": "#3D03A7",
//             "title": "FontBase",
//             "slug": "fontbase"
//         },
//         "fontforge": {
//             "hex": "#F2712B",
//             "title": "FontForge",
//             "slug": "fontforge"
//         },
//         "foobar2000": {
//             "hex": "#000000",
//             "title": "foobar2000",
//             "slug": "foobar2000"
//         },
//         "foodpanda": {
//             "hex": "#D70F64",
//             "title": "foodpanda",
//             "slug": "foodpanda"
//         },
//         "ford": {
//             "hex": "#00274E",
//             "title": "Ford",
//             "slug": "ford"
//         },
//         "forgejo": {
//             "hex": "#FB923C",
//             "title": "Forgejo",
//             "slug": "forgejo"
//         },
//         "formik": {
//             "hex": "#2563EB",
//             "title": "Formik",
//             "slug": "formik"
//         },
//         "formspree": {
//             "hex": "#E5122E",
//             "title": "Formspree",
//             "slug": "formspree"
//         },
//         "formstack": {
//             "hex": "#21B573",
//             "title": "Formstack",
//             "slug": "formstack"
//         },
//         "fortinet": {
//             "hex": "#EE3124",
//             "title": "Fortinet",
//             "slug": "fortinet"
//         },
//         "fortran": {
//             "hex": "#734F96",
//             "title": "Fortran",
//             "slug": "fortran"
//         },
//         "fossa": {
//             "hex": "#289E6D",
//             "title": "Fossa",
//             "slug": "fossa"
//         },
//         "fossilscm": {
//             "hex": "#548294",
//             "title": "Fossil SCM",
//             "slug": "fossilscm"
//         },
//         "foundryvirtualtabletop": {
//             "hex": "#FE6A1F",
//             "title": "Foundry Virtual Tabletop",
//             "slug": "foundryvirtualtabletop"
//         },
//         "foursquare": {
//             "hex": "#3333FF",
//             "title": "Foursquare",
//             "slug": "foursquare"
//         },
//         "fox": {
//             "hex": "#000000",
//             "title": "FOX",
//             "slug": "fox"
//         },
//         "foxtel": {
//             "hex": "#EB5205",
//             "title": "Foxtel",
//             "slug": "foxtel"
//         },
//         "fozzy": {
//             "hex": "#F15B29",
//             "title": "Fozzy",
//             "slug": "fozzy"
//         },
//         "framer": {
//             "hex": "#0055FF",
//             "title": "Framer",
//             "slug": "framer"
//         },
//         "framework": {
//             "hex": "#000000",
//             "title": "Framework",
//             "slug": "framework"
//         },
//         "framework7": {
//             "hex": "#EE350F",
//             "title": "Framework7",
//             "slug": "framework7"
//         },
//         "franprix": {
//             "hex": "#EC6237",
//             "title": "Franprix",
//             "slug": "franprix"
//         },
//         "frappe": {
//             "hex": "#0089FF",
//             "title": "Frappe",
//             "slug": "frappe"
//         },
//         "fraunhofergesellschaft": {
//             "hex": "#179C7D",
//             "title": "Fraunhofer-Gesellschaft",
//             "slug": "fraunhofergesellschaft"
//         },
//         "freebsd": {
//             "hex": "#AB2B28",
//             "title": "FreeBSD",
//             "slug": "freebsd"
//         },
//         "freecad": {
//             "hex": "#729FCF",
//             "title": "FreeCAD",
//             "slug": "freecad"
//         },
//         "freecodecamp": {
//             "hex": "#0A0A23",
//             "title": "freeCodeCamp",
//             "slug": "freecodecamp"
//         },
//         "freedesktopdotorg": {
//             "hex": "#3B80AE",
//             "title": "freedesktop.org",
//             "slug": "freedesktopdotorg"
//         },
//         "freelancer": {
//             "hex": "#29B2FE",
//             "title": "Freelancer",
//             "slug": "freelancer"
//         },
//         "freelancermap": {
//             "hex": "#00CFD6",
//             "title": "freelancermap",
//             "slug": "freelancermap"
//         },
//         "freenas": {
//             "hex": "#343434",
//             "title": "FreeNAS",
//             "slug": "freenas"
//         },
//         "freenet": {
//             "hex": "#84BC34",
//             "title": "freenet",
//             "slug": "freenet"
//         },
//         "freepik": {
//             "hex": "#1273EB",
//             "title": "Freepik",
//             "slug": "freepik"
//         },
//         "fresh": {
//             "hex": "#FFDB1E",
//             "title": "Fresh",
//             "slug": "fresh"
//         },
//         "frontendmentor": {
//             "hex": "#3F54A3",
//             "title": "Frontend Mentor",
//             "slug": "frontendmentor"
//         },
//         "frontify": {
//             "hex": "#2D3232",
//             "title": "Frontify",
//             "slug": "frontify"
//         },
//         "fubo": {
//             "hex": "#C83D1E",
//             "title": "Fubo",
//             "slug": "fubo"
//         },
//         "fueler": {
//             "hex": "#09C9E3",
//             "title": "Fueler",
//             "slug": "fueler"
//         },
//         "fugacloud": {
//             "hex": "#242F4B",
//             "title": "Fuga Cloud",
//             "slug": "fugacloud"
//         },
//         "fujifilm": {
//             "hex": "#FB0020",
//             "title": "Fujifilm",
//             "slug": "fujifilm"
//         },
//         "fujitsu": {
//             "hex": "#FF0000",
//             "title": "Fujitsu",
//             "slug": "fujitsu"
//         },
//         "furaffinity": {
//             "hex": "#36566F",
//             "title": "Fur Affinity",
//             "slug": "furaffinity"
//         },
//         "furrynetwork": {
//             "hex": "#2E75B4",
//             "title": "Furry Network",
//             "slug": "furrynetwork"
//         },
//         "fusionauth": {
//             "hex": "#F58320",
//             "title": "FusionAuth",
//             "slug": "fusionauth"
//         },
//         "futurelearn": {
//             "hex": "#DE00A5",
//             "title": "FutureLearn",
//             "slug": "futurelearn"
//         },
//         "g2": {
//             "hex": "#FF492C",
//             "title": "G2",
//             "slug": "g2"
//         },
//         "g2a": {
//             "hex": "#F05F00",
//             "title": "G2A",
//             "slug": "g2a"
//         },
//         "g2g": {
//             "hex": "#ED1C24",
//             "title": "G2G",
//             "slug": "g2g"
//         },
//         "galaxus": {
//             "hex": "#000000",
//             "title": "Galaxus",
//             "slug": "galaxus"
//         },
//         "gamedeveloper": {
//             "hex": "#E60012",
//             "title": "Game Developer",
//             "slug": "gamedeveloper"
//         },
//         "gamejolt": {
//             "hex": "#CCFF00",
//             "title": "Game Jolt",
//             "slug": "gamejolt"
//         },
//         "gamescience": {
//             "hex": "#000000",
//             "title": "Game Science",
//             "slug": "gamescience"
//         },
//         "gamebanana": {
//             "hex": "#FCEF40",
//             "title": "GameBanana",
//             "slug": "gamebanana"
//         },
//         "gameloft": {
//             "hex": "#000000",
//             "title": "Gameloft",
//             "slug": "gameloft"
//         },
//         "gamemaker": {
//             "hex": "#000000",
//             "title": "Gamemaker",
//             "slug": "gamemaker"
//         },
//         "garmin": {
//             "hex": "#000000",
//             "title": "Garmin",
//             "slug": "garmin"
//         },
//         "gatling": {
//             "hex": "#FF9E2A",
//             "title": "Gatling",
//             "slug": "gatling"
//         },
//         "gatsby": {
//             "hex": "#663399",
//             "title": "Gatsby",
//             "slug": "gatsby"
//         },
//         "gcore": {
//             "hex": "#FF4C00",
//             "title": "Gcore",
//             "slug": "gcore"
//         },
//         "gdal": {
//             "hex": "#5CAE58",
//             "title": "GDAL",
//             "slug": "gdal"
//         },
//         "geeksforgeeks": {
//             "hex": "#2F8D46",
//             "title": "GeeksforGeeks",
//             "slug": "geeksforgeeks"
//         },
//         "generalelectric": {
//             "hex": "#0870D8",
//             "title": "General Electric",
//             "slug": "generalelectric"
//         },
//         "generalmotors": {
//             "hex": "#0170CE",
//             "title": "General Motors",
//             "slug": "generalmotors"
//         },
//         "genius": {
//             "hex": "#FFFF64",
//             "title": "Genius",
//             "slug": "genius"
//         },
//         "gentoo": {
//             "hex": "#54487A",
//             "title": "Gentoo",
//             "slug": "gentoo"
//         },
//         "geocaching": {
//             "hex": "#00874D",
//             "title": "Geocaching",
//             "slug": "geocaching"
//         },
//         "geode": {
//             "hex": "#8D7ACF",
//             "title": "Geode",
//             "slug": "geode"
//         },
//         "geopandas": {
//             "hex": "#139C5A",
//             "title": "GeoPandas",
//             "slug": "geopandas"
//         },
//         "gerrit": {
//             "hex": "#EEEEEE",
//             "title": "Gerrit",
//             "slug": "gerrit"
//         },
//         "getx": {
//             "hex": "#8A2BE2",
//             "title": "GetX",
//             "slug": "getx"
//         },
//         "ghost": {
//             "hex": "#15171A",
//             "title": "Ghost",
//             "slug": "ghost"
//         },
//         "ghostery": {
//             "hex": "#00AEF0",
//             "title": "Ghostery",
//             "slug": "ghostery"
//         },
//         "gimp": {
//             "hex": "#5C5543",
//             "title": "GIMP",
//             "slug": "gimp"
//         },
//         "gin": {
//             "hex": "#008ECF",
//             "title": "Gin",
//             "slug": "gin"
//         },
//         "giphy": {
//             "hex": "#FF6666",
//             "title": "GIPHY",
//             "slug": "giphy"
//         },
//         "git": {
//             "hex": "#F05032",
//             "title": "Git",
//             "slug": "git"
//         },
//         "gitextensions": {
//             "hex": "#212121",
//             "title": "Git Extensions",
//             "slug": "gitextensions"
//         },
//         "gitforwindows": {
//             "hex": "#80B3FF",
//             "title": "Git for Windows",
//             "slug": "gitforwindows"
//         },
//         "gitlfs": {
//             "hex": "#F64935",
//             "title": "Git LFS",
//             "slug": "gitlfs"
//         },
//         "gitbook": {
//             "hex": "#BBDDE5",
//             "title": "GitBook",
//             "slug": "gitbook"
//         },
//         "gitconnected": {
//             "hex": "#2E69AE",
//             "title": "Gitconnected",
//             "slug": "gitconnected"
//         },
//         "gitea": {
//             "hex": "#609926",
//             "title": "Gitea",
//             "slug": "gitea"
//         },
//         "gitee": {
//             "hex": "#C71D23",
//             "title": "Gitee",
//             "slug": "gitee"
//         },
//         "github": {
//             "hex": "#181717",
//             "title": "GitHub",
//             "slug": "github"
//         },
//         "githubactions": {
//             "hex": "#2088FF",
//             "title": "GitHub Actions",
//             "slug": "githubactions"
//         },
//         "githubcopilot": {
//             "hex": "#000000",
//             "title": "GitHub Copilot",
//             "slug": "githubcopilot"
//         },
//         "githubpages": {
//             "hex": "#222222",
//             "title": "GitHub Pages",
//             "slug": "githubpages"
//         },
//         "githubsponsors": {
//             "hex": "#EA4AAA",
//             "title": "GitHub Sponsors",
//             "slug": "githubsponsors"
//         },
//         "gitignoredotio": {
//             "hex": "#204ECF",
//             "title": "gitignore.io",
//             "slug": "gitignoredotio"
//         },
//         "gitkraken": {
//             "hex": "#179287",
//             "title": "GitKraken",
//             "slug": "gitkraken"
//         },
//         "gitlab": {
//             "hex": "#FC6D26",
//             "title": "GitLab",
//             "slug": "gitlab"
//         },
//         "gitpod": {
//             "hex": "#FFAE33",
//             "title": "Gitpod",
//             "slug": "gitpod"
//         },
//         "gitter": {
//             "hex": "#ED1965",
//             "title": "Gitter",
//             "slug": "gitter"
//         },
//         "glassdoor": {
//             "hex": "#00A162",
//             "title": "Glassdoor",
//             "slug": "glassdoor"
//         },
//         "glide": {
//             "hex": "#18BED4",
//             "title": "Glide",
//             "slug": "glide"
//         },
//         "glitch": {
//             "hex": "#3333FF",
//             "title": "Glitch",
//             "slug": "glitch"
//         },
//         "globus": {
//             "hex": "#CA6201",
//             "title": "Globus",
//             "slug": "globus"
//         },
//         "glovo": {
//             "hex": "#F2CC38",
//             "title": "Glovo",
//             "slug": "glovo"
//         },
//         "gltf": {
//             "hex": "#87C540",
//             "title": "glTF",
//             "slug": "gltf"
//         },
//         "gmail": {
//             "hex": "#EA4335",
//             "title": "Gmail",
//             "slug": "gmail"
//         },
//         "gmx": {
//             "hex": "#1C449B",
//             "title": "GMX",
//             "slug": "gmx"
//         },
//         "gnome": {
//             "hex": "#4A86CF",
//             "title": "GNOME",
//             "slug": "gnome"
//         },
//         "gnometerminal": {
//             "hex": "#241F31",
//             "title": "GNOME Terminal",
//             "slug": "gnometerminal"
//         },
//         "gnu": {
//             "hex": "#A42E2B",
//             "title": "GNU",
//             "slug": "gnu"
//         },
//         "gnubash": {
//             "hex": "#4EAA25",
//             "title": "GNU Bash",
//             "slug": "gnubash"
//         },
//         "gnuemacs": {
//             "hex": "#7F5AB6",
//             "title": "GNU Emacs",
//             "slug": "gnuemacs"
//         },
//         "gnuicecat": {
//             "hex": "#002F5B",
//             "title": "GNU IceCat",
//             "slug": "gnuicecat"
//         },
//         "gnuprivacyguard": {
//             "hex": "#0093DD",
//             "title": "GNU Privacy Guard",
//             "slug": "gnuprivacyguard"
//         },
//         "gnusocial": {
//             "hex": "#A22430",
//             "title": "GNU social",
//             "slug": "gnusocial"
//         },
//         "go": {
//             "hex": "#00ADD8",
//             "title": "Go",
//             "slug": "go"
//         },
//         "gocd": {
//             "hex": "#94399E",
//             "title": "GoCD",
//             "slug": "gocd"
//         },
//         "godaddy": {
//             "hex": "#1BDBDB",
//             "title": "GoDaddy",
//             "slug": "godaddy"
//         },
//         "godotengine": {
//             "hex": "#478CBF",
//             "title": "Godot Engine",
//             "slug": "godotengine"
//         },
//         "gofundme": {
//             "hex": "#00B964",
//             "title": "GoFundMe",
//             "slug": "gofundme"
//         },
//         "gogdotcom": {
//             "hex": "#86328A",
//             "title": "GOG.com",
//             "slug": "gogdotcom"
//         },
//         "gojek": {
//             "hex": "#00AA13",
//             "title": "Gojek",
//             "slug": "gojek"
//         },
//         "goland": {
//             "hex": "#000000",
//             "title": "GoLand",
//             "slug": "goland"
//         },
//         "goldenline": {
//             "hex": "#FFE005",
//             "title": "GoldenLine",
//             "slug": "goldenline"
//         },
//         "goldmansachs": {
//             "hex": "#7399C6",
//             "title": "Goldman Sachs",
//             "slug": "goldmansachs"
//         },
//         "goodreads": {
//             "hex": "#372213",
//             "title": "Goodreads",
//             "slug": "goodreads"
//         },
//         "google": {
//             "hex": "#4285F4",
//             "title": "Google",
//             "slug": "google"
//         },
//         "googleadmob": {
//             "hex": "#EA4335",
//             "title": "Google AdMob",
//             "slug": "googleadmob"
//         },
//         "googleads": {
//             "hex": "#4285F4",
//             "title": "Google Ads",
//             "slug": "googleads"
//         },
//         "googleadsense": {
//             "hex": "#4285F4",
//             "title": "Google AdSense",
//             "slug": "googleadsense"
//         },
//         "googleanalytics": {
//             "hex": "#E37400",
//             "title": "Google Analytics",
//             "slug": "googleanalytics"
//         },
//         "googleappsscript": {
//             "hex": "#4285F4",
//             "title": "Google Apps Script",
//             "slug": "googleappsscript"
//         },
//         "googleassistant": {
//             "hex": "#4285F4",
//             "title": "Google Assistant",
//             "slug": "googleassistant"
//         },
//         "googleauthenticator": {
//             "hex": "#4285F4",
//             "title": "Google Authenticator",
//             "slug": "googleauthenticator"
//         },
//         "googlebigquery": {
//             "hex": "#669DF6",
//             "title": "Google BigQuery",
//             "slug": "googlebigquery"
//         },
//         "googlebigtable": {
//             "hex": "#669DF6",
//             "title": "Google Bigtable",
//             "slug": "googlebigtable"
//         },
//         "googlecalendar": {
//             "hex": "#4285F4",
//             "title": "Google Calendar",
//             "slug": "googlecalendar"
//         },
//         "googlecampaignmanager360": {
//             "hex": "#1E8E3E",
//             "title": "Google Campaign Manager 360",
//             "slug": "googlecampaignmanager360"
//         },
//         "googlecardboard": {
//             "hex": "#FF7143",
//             "title": "Google Cardboard",
//             "slug": "googlecardboard"
//         },
//         "googlechat": {
//             "hex": "#34A853",
//             "title": "Google Chat",
//             "slug": "googlechat"
//         },
//         "googlechrome": {
//             "hex": "#4285F4",
//             "title": "Google Chrome",
//             "slug": "googlechrome"
//         },
//         "googlechronicle": {
//             "hex": "#4285F4",
//             "title": "Google Chronicle",
//             "slug": "googlechronicle"
//         },
//         "googleclassroom": {
//             "hex": "#0F9D58",
//             "title": "Google Classroom",
//             "slug": "googleclassroom"
//         },
//         "googlecloud": {
//             "hex": "#4285F4",
//             "title": "Google Cloud",
//             "slug": "googlecloud"
//         },
//         "googlecloudcomposer": {
//             "hex": "#4285F4",
//             "title": "Google Cloud Composer",
//             "slug": "googlecloudcomposer"
//         },
//         "googlecloudspanner": {
//             "hex": "#4285F4",
//             "title": "Google Cloud Spanner",
//             "slug": "googlecloudspanner"
//         },
//         "googlecloudstorage": {
//             "hex": "#AECBFA",
//             "title": "Google Cloud Storage",
//             "slug": "googlecloudstorage"
//         },
//         "googlecolab": {
//             "hex": "#F9AB00",
//             "title": "Google Colab",
//             "slug": "googlecolab"
//         },
//         "googlecontaineroptimizedos": {
//             "hex": "#4285F4",
//             "title": "Google Container Optimized OS",
//             "slug": "googlecontaineroptimizedos"
//         },
//         "googledatastudio": {
//             "hex": "#669DF6",
//             "title": "Google Data Studio",
//             "slug": "googledatastudio"
//         },
//         "googledataflow": {
//             "hex": "#AECBFA",
//             "title": "Google Dataflow",
//             "slug": "googledataflow"
//         },
//         "googledataproc": {
//             "hex": "#AECBFA",
//             "title": "Google Dataproc",
//             "slug": "googledataproc"
//         },
//         "googledisplayandvideo360": {
//             "hex": "#34A853",
//             "title": "Google Display & Video 360",
//             "slug": "googledisplayandvideo360"
//         },
//         "googledocs": {
//             "hex": "#4285F4",
//             "title": "Google Docs",
//             "slug": "googledocs"
//         },
//         "googledrive": {
//             "hex": "#4285F4",
//             "title": "Google Drive",
//             "slug": "googledrive"
//         },
//         "googleearth": {
//             "hex": "#4285F4",
//             "title": "Google Earth",
//             "slug": "googleearth"
//         },
//         "googleearthengine": {
//             "hex": "#4285F4",
//             "title": "Google Earth Engine",
//             "slug": "googleearthengine"
//         },
//         "googlefit": {
//             "hex": "#4285F4",
//             "title": "Google Fit",
//             "slug": "googlefit"
//         },
//         "googlefonts": {
//             "hex": "#4285F4",
//             "title": "Google Fonts",
//             "slug": "googlefonts"
//         },
//         "googleforms": {
//             "hex": "#7248B9",
//             "title": "Google Forms",
//             "slug": "googleforms"
//         },
//         "googlegemini": {
//             "hex": "#8E75B2",
//             "title": "Google Gemini",
//             "slug": "googlegemini"
//         },
//         "googlehome": {
//             "hex": "#4285F4",
//             "title": "Google Home",
//             "slug": "googlehome"
//         },
//         "googlekeep": {
//             "hex": "#FFBB00",
//             "title": "Google Keep",
//             "slug": "googlekeep"
//         },
//         "googlelens": {
//             "hex": "#4285F4",
//             "title": "Google Lens",
//             "slug": "googlelens"
//         },
//         "googlemaps": {
//             "hex": "#4285F4",
//             "title": "Google Maps",
//             "slug": "googlemaps"
//         },
//         "googlemarketingplatform": {
//             "hex": "#4285F4",
//             "title": "Google Marketing Platform",
//             "slug": "googlemarketingplatform"
//         },
//         "googlemeet": {
//             "hex": "#00897B",
//             "title": "Google Meet",
//             "slug": "googlemeet"
//         },
//         "googlemessages": {
//             "hex": "#1A73E8",
//             "title": "Google Messages",
//             "slug": "googlemessages"
//         },
//         "googlenearby": {
//             "hex": "#4285F4",
//             "title": "Google Nearby",
//             "slug": "googlenearby"
//         },
//         "googlenews": {
//             "hex": "#174EA6",
//             "title": "Google News",
//             "slug": "googlenews"
//         },
//         "googlepay": {
//             "hex": "#4285F4",
//             "title": "Google Pay",
//             "slug": "googlepay"
//         },
//         "googlephotos": {
//             "hex": "#4285F4",
//             "title": "Google Photos",
//             "slug": "googlephotos"
//         },
//         "googleplay": {
//             "hex": "#414141",
//             "title": "Google Play",
//             "slug": "googleplay"
//         },
//         "googlepubsub": {
//             "hex": "#AECBFA",
//             "title": "Google Pub/Sub",
//             "slug": "googlepubsub"
//         },
//         "googlescholar": {
//             "hex": "#4285F4",
//             "title": "Google Scholar",
//             "slug": "googlescholar"
//         },
//         "googlesearchconsole": {
//             "hex": "#458CF5",
//             "title": "Google Search Console",
//             "slug": "googlesearchconsole"
//         },
//         "googlesheets": {
//             "hex": "#34A853",
//             "title": "Google Sheets",
//             "slug": "googlesheets"
//         },
//         "googleslides": {
//             "hex": "#FBBC04",
//             "title": "Google Slides",
//             "slug": "googleslides"
//         },
//         "googlestreetview": {
//             "hex": "#FEC111",
//             "title": "Google Street View",
//             "slug": "googlestreetview"
//         },
//         "googletagmanager": {
//             "hex": "#246FDB",
//             "title": "Google Tag Manager",
//             "slug": "googletagmanager"
//         },
//         "googletasks": {
//             "hex": "#2684FC",
//             "title": "Google Tasks",
//             "slug": "googletasks"
//         },
//         "googletranslate": {
//             "hex": "#4285F4",
//             "title": "Google Translate",
//             "slug": "googletranslate"
//         },
//         "gotomeeting": {
//             "hex": "#F68D2E",
//             "title": "GoToMeeting",
//             "slug": "gotomeeting"
//         },
//         "grab": {
//             "hex": "#00B14F",
//             "title": "Grab",
//             "slug": "grab"
//         },
//         "gradle": {
//             "hex": "#02303A",
//             "title": "Gradle",
//             "slug": "gradle"
//         },
//         "gradleplaypublisher": {
//             "hex": "#82B816",
//             "title": "Gradle Play Publisher",
//             "slug": "gradleplaypublisher"
//         },
//         "grafana": {
//             "hex": "#F46800",
//             "title": "Grafana",
//             "slug": "grafana"
//         },
//         "grammarly": {
//             "hex": "#027E6F",
//             "title": "Grammarly",
//             "slug": "grammarly"
//         },
//         "grandfrais": {
//             "hex": "#ED2D2F",
//             "title": "Grand Frais",
//             "slug": "grandfrais"
//         },
//         "grapheneos": {
//             "hex": "#0053A3",
//             "title": "GrapheneOS",
//             "slug": "grapheneos"
//         },
//         "graphite": {
//             "hex": "#000000",
//             "title": "Graphite",
//             "slug": "graphite"
//         },
//         "graphql": {
//             "hex": "#E10098",
//             "title": "GraphQL",
//             "slug": "graphql"
//         },
//         "grav": {
//             "hex": "#221E1F",
//             "title": "Grav",
//             "slug": "grav"
//         },
//         "gravatar": {
//             "hex": "#1E8CBE",
//             "title": "Gravatar",
//             "slug": "gravatar"
//         },
//         "graylog": {
//             "hex": "#FF3633",
//             "title": "Graylog",
//             "slug": "graylog"
//         },
//         "greasyfork": {
//             "hex": "#670000",
//             "title": "Greasy Fork",
//             "slug": "greasyfork"
//         },
//         "greatlearning": {
//             "hex": "#0E39A9",
//             "title": "Great Learning",
//             "slug": "greatlearning"
//         },
//         "greenhouse": {
//             "hex": "#24A47F",
//             "title": "Greenhouse",
//             "slug": "greenhouse"
//         },
//         "greensock": {
//             "hex": "#88CE02",
//             "title": "GreenSock",
//             "slug": "greensock"
//         },
//         "griddotai": {
//             "hex": "#78FF96",
//             "title": "Grid.ai",
//             "slug": "griddotai"
//         },
//         "gridsome": {
//             "hex": "#00A672",
//             "title": "Gridsome",
//             "slug": "gridsome"
//         },
//         "grocy": {
//             "hex": "#337AB7",
//             "title": "Grocy",
//             "slug": "grocy"
//         },
//         "groupme": {
//             "hex": "#00AFF0",
//             "title": "GroupMe",
//             "slug": "groupme"
//         },
//         "groupon": {
//             "hex": "#53A318",
//             "title": "Groupon",
//             "slug": "groupon"
//         },
//         "grubhub": {
//             "hex": "#F63440",
//             "title": "Grubhub",
//             "slug": "grubhub"
//         },
//         "grunt": {
//             "hex": "#FAA918",
//             "title": "Grunt",
//             "slug": "grunt"
//         },
//         "gsk": {
//             "hex": "#F36633",
//             "title": "GSK",
//             "slug": "gsk"
//         },
//         "gsmarenadotcom": {
//             "hex": "#D50000",
//             "title": "GSMArena.com",
//             "slug": "gsmarenadotcom"
//         },
//         "gstreamer": {
//             "hex": "#FF3131",
//             "title": "GStreamer",
//             "slug": "gstreamer"
//         },
//         "gtk": {
//             "hex": "#7FE719",
//             "title": "GTK",
//             "slug": "gtk"
//         },
//         "guangzhoumetro": {
//             "hex": "#C51935",
//             "title": "Guangzhou Metro",
//             "slug": "guangzhoumetro"
//         },
//         "guilded": {
//             "hex": "#F5C400",
//             "title": "Guilded",
//             "slug": "guilded"
//         },
//         "guitarpro": {
//             "hex": "#569FFF",
//             "title": "Guitar Pro",
//             "slug": "guitarpro"
//         },
//         "gulp": {
//             "hex": "#CF4647",
//             "title": "gulp",
//             "slug": "gulp"
//         },
//         "gumroad": {
//             "hex": "#FF90E8",
//             "title": "Gumroad",
//             "slug": "gumroad"
//         },
//         "gumtree": {
//             "hex": "#72EF36",
//             "title": "Gumtree",
//             "slug": "gumtree"
//         },
//         "gunicorn": {
//             "hex": "#499848",
//             "title": "Gunicorn",
//             "slug": "gunicorn"
//         },
//         "gurobi": {
//             "hex": "#EE3524",
//             "title": "Gurobi",
//             "slug": "gurobi"
//         },
//         "gusto": {
//             "hex": "#F45D48",
//             "title": "Gusto",
//             "slug": "gusto"
//         },
//         "gutenberg": {
//             "hex": "#000000",
//             "title": "Gutenberg",
//             "slug": "gutenberg"
//         },
//         "handm": {
//             "hex": "#E50010",
//             "title": "H&M",
//             "slug": "handm"
//         },
//         "h3": {
//             "hex": "#1E54B7",
//             "title": "H3",
//             "slug": "h3"
//         },
//         "habr": {
//             "hex": "#65A3BE",
//             "title": "Habr",
//             "slug": "habr"
//         },
//         "hackclub": {
//             "hex": "#EC3750",
//             "title": "Hack Club",
//             "slug": "hackclub"
//         },
//         "hackthebox": {
//             "hex": "#9FEF00",
//             "title": "Hack The Box",
//             "slug": "hackthebox"
//         },
//         "hackaday": {
//             "hex": "#1A1A1A",
//             "title": "Hackaday",
//             "slug": "hackaday"
//         },
//         "hackernoon": {
//             "hex": "#00FE00",
//             "title": "Hacker Noon",
//             "slug": "hackernoon"
//         },
//         "hackerearth": {
//             "hex": "#2C3454",
//             "title": "HackerEarth",
//             "slug": "hackerearth"
//         },
//         "hackerone": {
//             "hex": "#494649",
//             "title": "HackerOne",
//             "slug": "hackerone"
//         },
//         "hackerrank": {
//             "hex": "#00EA64",
//             "title": "HackerRank",
//             "slug": "hackerrank"
//         },
//         "hackster": {
//             "hex": "#2E9FE6",
//             "title": "Hackster",
//             "slug": "hackster"
//         },
//         "hal": {
//             "hex": "#B03532",
//             "title": "HAL",
//             "slug": "hal"
//         },
//         "handlebarsdotjs": {
//             "hex": "#000000",
//             "title": "Handlebars.js",
//             "slug": "handlebarsdotjs"
//         },
//         "handshake": {
//             "hex": "#000000",
//             "title": "Handshake",
//             "slug": "handshake"
//         },
//         "happycow": {
//             "hex": "#7C4EC4",
//             "title": "HappyCow",
//             "slug": "happycow"
//         },
//         "harbor": {
//             "hex": "#60B932",
//             "title": "Harbor",
//             "slug": "harbor"
//         },
//         "harmonyos": {
//             "hex": "#000000",
//             "title": "HarmonyOS",
//             "slug": "harmonyos"
//         },
//         "hashicorp": {
//             "hex": "#000000",
//             "title": "HashiCorp",
//             "slug": "hashicorp"
//         },
//         "hashnode": {
//             "hex": "#2962FF",
//             "title": "Hashnode",
//             "slug": "hashnode"
//         },
//         "haskell": {
//             "hex": "#5D4F85",
//             "title": "Haskell",
//             "slug": "haskell"
//         },
//         "hasura": {
//             "hex": "#1EB4D4",
//             "title": "Hasura",
//             "slug": "hasura"
//         },
//         "hatenabookmark": {
//             "hex": "#00A4DE",
//             "title": "Hatena Bookmark",
//             "slug": "hatenabookmark"
//         },
//         "haveibeenpwned": {
//             "hex": "#2A6379",
//             "title": "haveibeenpwned",
//             "slug": "haveibeenpwned"
//         },
//         "haxe": {
//             "hex": "#EA8220",
//             "title": "Haxe",
//             "slug": "haxe"
//         },
//         "hbo": {
//             "hex": "#000000",
//             "title": "HBO",
//             "slug": "hbo"
//         },
//         "hcl": {
//             "hex": "#006BB6",
//             "title": "HCL",
//             "slug": "hcl"
//         },
//         "hdfcbank": {
//             "hex": "#004B8D",
//             "title": "HDFC Bank",
//             "slug": "hdfcbank"
//         },
//         "headlessui": {
//             "hex": "#66E3FF",
//             "title": "Headless UI",
//             "slug": "headlessui"
//         },
//         "headphonezone": {
//             "hex": "#3C07FF",
//             "title": "Headphone Zone",
//             "slug": "headphonezone"
//         },
//         "headspace": {
//             "hex": "#F47D31",
//             "title": "Headspace",
//             "slug": "headspace"
//         },
//         "hearth": {
//             "hex": "#A33035",
//             "title": "Hearth",
//             "slug": "hearth"
//         },
//         "hearthisdotat": {
//             "hex": "#000000",
//             "title": "hearthis.at",
//             "slug": "hearthisdotat"
//         },
//         "hedera": {
//             "hex": "#222222",
//             "title": "Hedera",
//             "slug": "hedera"
//         },
//         "helium": {
//             "hex": "#0ACF83",
//             "title": "Helium",
//             "slug": "helium"
//         },
//         "helix": {
//             "hex": "#281733",
//             "title": "Helix",
//             "slug": "helix"
//         },
//         "hellofresh": {
//             "hex": "#99CC33",
//             "title": "HelloFresh",
//             "slug": "hellofresh"
//         },
//         "hellyhansen": {
//             "hex": "#DA2128",
//             "title": "Helly Hansen",
//             "slug": "hellyhansen"
//         },
//         "helm": {
//             "hex": "#0F1689",
//             "title": "Helm",
//             "slug": "helm"
//         },
//         "helpscout": {
//             "hex": "#1292EE",
//             "title": "Help Scout",
//             "slug": "helpscout"
//         },
//         "helpdesk": {
//             "hex": "#2FC774",
//             "title": "HelpDesk",
//             "slug": "helpdesk"
//         },
//         "hepsiemlak": {
//             "hex": "#E1251B",
//             "title": "Hepsiemlak",
//             "slug": "hepsiemlak"
//         },
//         "here": {
//             "hex": "#00AFAA",
//             "title": "HERE",
//             "slug": "here"
//         },
//         "hermes": {
//             "hex": "#0091CD",
//             "title": "Hermes",
//             "slug": "hermes"
//         },
//         "heroku": {
//             "hex": "#430098",
//             "title": "Heroku",
//             "slug": "heroku"
//         },
//         "hetzner": {
//             "hex": "#D50C2D",
//             "title": "Hetzner",
//             "slug": "hetzner"
//         },
//         "hevy": {
//             "hex": "#000000",
//             "title": "Hevy",
//             "slug": "hevy"
//         },
//         "hexlet": {
//             "hex": "#116EF5",
//             "title": "Hexlet",
//             "slug": "hexlet"
//         },
//         "hexo": {
//             "hex": "#0E83CD",
//             "title": "Hexo",
//             "slug": "hexo"
//         },
//         "hey": {
//             "hex": "#5522FA",
//             "title": "HEY",
//             "slug": "hey"
//         },
//         "hibob": {
//             "hex": "#E42C51",
//             "title": "Hi Bob",
//             "slug": "hibob"
//         },
//         "hibernate": {
//             "hex": "#59666C",
//             "title": "Hibernate",
//             "slug": "hibernate"
//         },
//         "hilton": {
//             "hex": "#231F20",
//             "title": "Hilton",
//             "slug": "hilton"
//         },
//         "hiltonhotelsandresorts": {
//             "hex": "#1E4380",
//             "title": "Hilton Hotels & Resorts",
//             "slug": "hiltonhotelsandresorts"
//         },
//         "hitachi": {
//             "hex": "#E60027",
//             "title": "Hitachi",
//             "slug": "hitachi"
//         },
//         "hive": {
//             "hex": "#E31337",
//             "title": "Hive",
//             "slug": "hive"
//         },
//         "hivemq": {
//             "hex": "#FFC000",
//             "title": "HiveMQ",
//             "slug": "hivemq"
//         },
//         "homarr": {
//             "hex": "#FA5252",
//             "title": "Homarr",
//             "slug": "homarr"
//         },
//         "homeassistant": {
//             "hex": "#18BCF2",
//             "title": "Home Assistant",
//             "slug": "homeassistant"
//         },
//         "homeassistantcommunitystore": {
//             "hex": "#41BDF5",
//             "title": "Home Assistant Community Store",
//             "slug": "homeassistantcommunitystore"
//         },
//         "homeadvisor": {
//             "hex": "#F68315",
//             "title": "HomeAdvisor",
//             "slug": "homeadvisor"
//         },
//         "homebrew": {
//             "hex": "#FBB040",
//             "title": "Homebrew",
//             "slug": "homebrew"
//         },
//         "homebridge": {
//             "hex": "#491F59",
//             "title": "Homebridge",
//             "slug": "homebridge"
//         },
//         "homepage": {
//             "hex": "#009BD5",
//             "title": "Homepage",
//             "slug": "homepage"
//         },
//         "homify": {
//             "hex": "#7DCDA3",
//             "title": "homify",
//             "slug": "homify"
//         },
//         "honda": {
//             "hex": "#E40521",
//             "title": "Honda",
//             "slug": "honda"
//         },
//         "honey": {
//             "hex": "#FF6801",
//             "title": "Honey",
//             "slug": "honey"
//         },
//         "honeybadger": {
//             "hex": "#EA5937",
//             "title": "Honeybadger",
//             "slug": "honeybadger"
//         },
//         "honeygain": {
//             "hex": "#F9C900",
//             "title": "Honeygain",
//             "slug": "honeygain"
//         },
//         "hono": {
//             "hex": "#E36002",
//             "title": "Hono",
//             "slug": "hono"
//         },
//         "honor": {
//             "hex": "#000000",
//             "title": "Honor",
//             "slug": "honor"
//         },
//         "hootsuite": {
//             "hex": "#FF4C46",
//             "title": "Hootsuite",
//             "slug": "hootsuite"
//         },
//         "hoppscotch": {
//             "hex": "#09090B",
//             "title": "Hoppscotch",
//             "slug": "hoppscotch"
//         },
//         "hostinger": {
//             "hex": "#673DE6",
//             "title": "Hostinger",
//             "slug": "hostinger"
//         },
//         "hotelsdotcom": {
//             "hex": "#EF3346",
//             "title": "Hotels.com",
//             "slug": "hotelsdotcom"
//         },
//         "hotjar": {
//             "hex": "#FF3C00",
//             "title": "Hotjar",
//             "slug": "hotjar"
//         },
//         "hotwire": {
//             "hex": "#FFE801",
//             "title": "Hotwire",
//             "slug": "hotwire"
//         },
//         "houdini": {
//             "hex": "#FF4713",
//             "title": "Houdini",
//             "slug": "houdini"
//         },
//         "houzz": {
//             "hex": "#4DBC15",
//             "title": "Houzz",
//             "slug": "houzz"
//         },
//         "hp": {
//             "hex": "#0096D6",
//             "title": "HP",
//             "slug": "hp"
//         },
//         "hsbc": {
//             "hex": "#DB0011",
//             "title": "HSBC",
//             "slug": "hsbc"
//         },
//         "htc": {
//             "hex": "#A5CF4C",
//             "title": "HTC",
//             "slug": "htc"
//         },
//         "htcvive": {
//             "hex": "#00B2E3",
//             "title": "HTC Vive",
//             "slug": "htcvive"
//         },
//         "htmlacademy": {
//             "hex": "#302683",
//             "title": "HTML Academy",
//             "slug": "htmlacademy"
//         },
//         "html5": {
//             "hex": "#E34F26",
//             "title": "HTML5",
//             "slug": "html5"
//         },
//         "htmx": {
//             "hex": "#3366CC",
//             "title": "htmx",
//             "slug": "htmx"
//         },
//         "htop": {
//             "hex": "#009020",
//             "title": "htop",
//             "slug": "htop"
//         },
//         "httpie": {
//             "hex": "#73DC8C",
//             "title": "HTTPie",
//             "slug": "httpie"
//         },
//         "huawei": {
//             "hex": "#FF0000",
//             "title": "Huawei",
//             "slug": "huawei"
//         },
//         "hubspot": {
//             "hex": "#FF7A59",
//             "title": "HubSpot",
//             "slug": "hubspot"
//         },
//         "huggingface": {
//             "hex": "#FFD21E",
//             "title": "Hugging Face",
//             "slug": "huggingface"
//         },
//         "hugo": {
//             "hex": "#FF4088",
//             "title": "Hugo",
//             "slug": "hugo"
//         },
//         "humblebundle": {
//             "hex": "#CC2929",
//             "title": "Humble Bundle",
//             "slug": "humblebundle"
//         },
//         "humhub": {
//             "hex": "#1B8291",
//             "title": "HumHub",
//             "slug": "humhub"
//         },
//         "hungryjacks": {
//             "hex": "#D0021B",
//             "title": "Hungry Jack's",
//             "slug": "hungryjacks"
//         },
//         "husqvarna": {
//             "hex": "#273A60",
//             "title": "Husqvarna",
//             "slug": "husqvarna"
//         },
//         "hyper": {
//             "hex": "#000000",
//             "title": "Hyper",
//             "slug": "hyper"
//         },
//         "hyperskill": {
//             "hex": "#8C5AFF",
//             "title": "Hyperskill",
//             "slug": "hyperskill"
//         },
//         "hyperx": {
//             "hex": "#E21836",
//             "title": "HyperX",
//             "slug": "hyperx"
//         },
//         "hypothesis": {
//             "hex": "#BD1C2B",
//             "title": "Hypothesis",
//             "slug": "hypothesis"
//         },
//         "hyprland": {
//             "hex": "#58E1FF",
//             "title": "Hyprland",
//             "slug": "hyprland"
//         },
//         "hyundai": {
//             "hex": "#002C5E",
//             "title": "Hyundai",
//             "slug": "hyundai"
//         },
//         "i18next": {
//             "hex": "#26A69A",
//             "title": "i18next",
//             "slug": "i18next"
//         },
//         "i3": {
//             "hex": "#52C0FF",
//             "title": "i3",
//             "slug": "i3"
//         },
//         "iata": {
//             "hex": "#004E81",
//             "title": "Iata",
//             "slug": "iata"
//         },
//         "ibeacon": {
//             "hex": "#3D7EBB",
//             "title": "iBeacon",
//             "slug": "ibeacon"
//         },
//         "iberia": {
//             "hex": "#D7192D",
//             "title": "Iberia",
//             "slug": "iberia"
//         },
//         "iced": {
//             "hex": "#3645FF",
//             "title": "Iced",
//             "slug": "iced"
//         },
//         "iceland": {
//             "hex": "#CC092F",
//             "title": "Iceland",
//             "slug": "iceland"
//         },
//         "icicibank": {
//             "hex": "#AE282E",
//             "title": "ICICI Bank",
//             "slug": "icicibank"
//         },
//         "icinga": {
//             "hex": "#06062C",
//             "title": "Icinga",
//             "slug": "icinga"
//         },
//         "icloud": {
//             "hex": "#3693F3",
//             "title": "iCloud",
//             "slug": "icloud"
//         },
//         "icomoon": {
//             "hex": "#825794",
//             "title": "IcoMoon",
//             "slug": "icomoon"
//         },
//         "icon": {
//             "hex": "#31B8BB",
//             "title": "ICON",
//             "slug": "icon"
//         },
//         "iconfinder": {
//             "hex": "#1A1B1F",
//             "title": "Iconfinder",
//             "slug": "iconfinder"
//         },
//         "iconify": {
//             "hex": "#1769AA",
//             "title": "Iconify",
//             "slug": "iconify"
//         },
//         "iconjar": {
//             "hex": "#16A5F3",
//             "title": "IconJar",
//             "slug": "iconjar"
//         },
//         "icons8": {
//             "hex": "#1FB141",
//             "title": "Icons8",
//             "slug": "icons8"
//         },
//         "icq": {
//             "hex": "#24FF00",
//             "title": "ICQ",
//             "slug": "icq"
//         },
//         "ieee": {
//             "hex": "#00629B",
//             "title": "IEEE",
//             "slug": "ieee"
//         },
//         "ifixit": {
//             "hex": "#0071CE",
//             "title": "iFixit",
//             "slug": "ifixit"
//         },
//         "ifood": {
//             "hex": "#EA1D2C",
//             "title": "iFood",
//             "slug": "ifood"
//         },
//         "ifttt": {
//             "hex": "#000000",
//             "title": "IFTTT",
//             "slug": "ifttt"
//         },
//         "igdb": {
//             "hex": "#9147FF",
//             "title": "IGDB",
//             "slug": "igdb"
//         },
//         "ign": {
//             "hex": "#BF1313",
//             "title": "IGN",
//             "slug": "ign"
//         },
//         "iheartradio": {
//             "hex": "#C6002B",
//             "title": "iHeartRadio",
//             "slug": "iheartradio"
//         },
//         "ikea": {
//             "hex": "#0058A3",
//             "title": "IKEA",
//             "slug": "ikea"
//         },
//         "iledefrancemobilites": {
//             "hex": "#67B4E7",
//             "title": "Île-de-France Mobilités",
//             "slug": "iledefrancemobilites"
//         },
//         "imagedotsc": {
//             "hex": "#039CB2",
//             "title": "Image.sc",
//             "slug": "imagedotsc"
//         },
//         "imagej": {
//             "hex": "#00D8E0",
//             "title": "ImageJ",
//             "slug": "imagej"
//         },
//         "imdb": {
//             "hex": "#F5C518",
//             "title": "IMDb",
//             "slug": "imdb"
//         },
//         "imessage": {
//             "hex": "#34DA50",
//             "title": "iMessage",
//             "slug": "imessage"
//         },
//         "imgur": {
//             "hex": "#1BB76E",
//             "title": "Imgur",
//             "slug": "imgur"
//         },
//         "immer": {
//             "hex": "#00E7C3",
//             "title": "Immer",
//             "slug": "immer"
//         },
//         "immich": {
//             "hex": "#4250AF",
//             "title": "Immich",
//             "slug": "immich"
//         },
//         "imou": {
//             "hex": "#E89313",
//             "title": "Imou",
//             "slug": "imou"
//         },
//         "improvmx": {
//             "hex": "#2FBEFF",
//             "title": "ImprovMX",
//             "slug": "improvmx"
//         },
//         "indeed": {
//             "hex": "#003A9B",
//             "title": "Indeed",
//             "slug": "indeed"
//         },
//         "indiansuperleague": {
//             "hex": "#ED2F21",
//             "title": "Indian Super League",
//             "slug": "indiansuperleague"
//         },
//         "indiehackers": {
//             "hex": "#0E2439",
//             "title": "Indie Hackers",
//             "slug": "indiehackers"
//         },
//         "indigo": {
//             "hex": "#09009B",
//             "title": "IndiGo",
//             "slug": "indigo"
//         },
//         "inductiveautomation": {
//             "hex": "#445C6D",
//             "title": "Inductive Automation",
//             "slug": "inductiveautomation"
//         },
//         "inertia": {
//             "hex": "#9553E9",
//             "title": "Inertia",
//             "slug": "inertia"
//         },
//         "infiniti": {
//             "hex": "#020B24",
//             "title": "INFINITI",
//             "slug": "infiniti"
//         },
//         "influxdb": {
//             "hex": "#22ADF6",
//             "title": "InfluxDB",
//             "slug": "influxdb"
//         },
//         "infomaniak": {
//             "hex": "#0098FF",
//             "title": "Infomaniak",
//             "slug": "infomaniak"
//         },
//         "infoq": {
//             "hex": "#2C6CAF",
//             "title": "InfoQ",
//             "slug": "infoq"
//         },
//         "informatica": {
//             "hex": "#FF4D00",
//             "title": "Informatica",
//             "slug": "informatica"
//         },
//         "infosys": {
//             "hex": "#007CC3",
//             "title": "Infosys",
//             "slug": "infosys"
//         },
//         "infracost": {
//             "hex": "#DB44B8",
//             "title": "Infracost",
//             "slug": "infracost"
//         },
//         "ingress": {
//             "hex": "#783CBD",
//             "title": "Ingress",
//             "slug": "ingress"
//         },
//         "inkdrop": {
//             "hex": "#7A78D7",
//             "title": "Inkdrop",
//             "slug": "inkdrop"
//         },
//         "inkscape": {
//             "hex": "#000000",
//             "title": "Inkscape",
//             "slug": "inkscape"
//         },
//         "inoreader": {
//             "hex": "#1875F3",
//             "title": "Inoreader",
//             "slug": "inoreader"
//         },
//         "insomnia": {
//             "hex": "#4000BF",
//             "title": "Insomnia",
//             "slug": "insomnia"
//         },
//         "inspire": {
//             "hex": "#00E5FF",
//             "title": "INSPIRE",
//             "slug": "inspire"
//         },
//         "insta360": {
//             "hex": "#FFEE00",
//             "title": "Insta360",
//             "slug": "insta360"
//         },
//         "instacart": {
//             "hex": "#43B02A",
//             "title": "Instacart",
//             "slug": "instacart"
//         },
//         "instagram": {
//             "hex": "#FF0069",
//             "title": "Instagram",
//             "slug": "instagram"
//         },
//         "instapaper": {
//             "hex": "#1F1F1F",
//             "title": "Instapaper",
//             "slug": "instapaper"
//         },
//         "instatus": {
//             "hex": "#4EE3C2",
//             "title": "Instatus",
//             "slug": "instatus"
//         },
//         "instructables": {
//             "hex": "#FABF15",
//             "title": "Instructables",
//             "slug": "instructables"
//         },
//         "instructure": {
//             "hex": "#2A7BA0",
//             "title": "Instructure",
//             "slug": "instructure"
//         },
//         "intel": {
//             "hex": "#0071C5",
//             "title": "Intel",
//             "slug": "intel"
//         },
//         "intellijidea": {
//             "hex": "#000000",
//             "title": "IntelliJ IDEA",
//             "slug": "intellijidea"
//         },
//         "interactiondesignfoundation": {
//             "hex": "#2B2B2B",
//             "title": "Interaction Design Foundation",
//             "slug": "interactiondesignfoundation"
//         },
//         "interactjs": {
//             "hex": "#2599ED",
//             "title": "InteractJS",
//             "slug": "interactjs"
//         },
//         "interbase": {
//             "hex": "#E62431",
//             "title": "Interbase",
//             "slug": "interbase"
//         },
//         "intercom": {
//             "hex": "#6AFDEF",
//             "title": "Intercom",
//             "slug": "intercom"
//         },
//         "intermarche": {
//             "hex": "#E2001A",
//             "title": "Intermarche",
//             "slug": "intermarche"
//         },
//         "internetarchive": {
//             "hex": "#666666",
//             "title": "Internet Archive",
//             "slug": "internetarchive"
//         },
//         "internetcomputer": {
//             "hex": "#3B00B9",
//             "title": "Internet Computer",
//             "slug": "internetcomputer"
//         },
//         "intigriti": {
//             "hex": "#161A36",
//             "title": "Intigriti",
//             "slug": "intigriti"
//         },
//         "intuit": {
//             "hex": "#236CFF",
//             "title": "Intuit",
//             "slug": "intuit"
//         },
//         "invision": {
//             "hex": "#FF3366",
//             "title": "InVision",
//             "slug": "invision"
//         },
//         "invoiceninja": {
//             "hex": "#000000",
//             "title": "Invoice Ninja",
//             "slug": "invoiceninja"
//         },
//         "iobroker": {
//             "hex": "#3399CC",
//             "title": "ioBroker",
//             "slug": "iobroker"
//         },
//         "ionic": {
//             "hex": "#3880FF",
//             "title": "Ionic",
//             "slug": "ionic"
//         },
//         "ionos": {
//             "hex": "#003D8F",
//             "title": "Ionos",
//             "slug": "ionos"
//         },
//         "ios": {
//             "hex": "#000000",
//             "title": "iOS",
//             "slug": "ios"
//         },
//         "iota": {
//             "hex": "#131F37",
//             "title": "IOTA",
//             "slug": "iota"
//         },
//         "ipfs": {
//             "hex": "#65C2CB",
//             "title": "IPFS",
//             "slug": "ipfs"
//         },
//         "iris": {
//             "hex": "#25313C",
//             "title": "IRIS",
//             "slug": "iris"
//         },
//         "irobot": {
//             "hex": "#6CB86A",
//             "title": "iRobot",
//             "slug": "irobot"
//         },
//         "isc2": {
//             "hex": "#468145",
//             "title": "ISC2",
//             "slug": "isc2"
//         },
//         "issuu": {
//             "hex": "#F36D5D",
//             "title": "Issuu",
//             "slug": "issuu"
//         },
//         "istio": {
//             "hex": "#466BB0",
//             "title": "Istio",
//             "slug": "istio"
//         },
//         "itchdotio": {
//             "hex": "#FA5C5C",
//             "title": "Itch.io",
//             "slug": "itchdotio"
//         },
//         "iterm2": {
//             "hex": "#000000",
//             "title": "iTerm2",
//             "slug": "iterm2"
//         },
//         "itunes": {
//             "hex": "#FB5BC5",
//             "title": "iTunes",
//             "slug": "itunes"
//         },
//         "itvx": {
//             "hex": "#DEEB52",
//             "title": "ITVx",
//             "slug": "itvx"
//         },
//         "iveco": {
//             "hex": "#1554FF",
//             "title": "IVECO",
//             "slug": "iveco"
//         },
//         "jabber": {
//             "hex": "#CC0000",
//             "title": "Jabber",
//             "slug": "jabber"
//         },
//         "jaeger": {
//             "hex": "#66CFE3",
//             "title": "Jaeger",
//             "slug": "jaeger"
//         },
//         "jaguar": {
//             "hex": "#FFFFFF",
//             "title": "Jaguar",
//             "slug": "jaguar"
//         },
//         "jamboard": {
//             "hex": "#F37C20",
//             "title": "Jamboard",
//             "slug": "jamboard"
//         },
//         "jameson": {
//             "hex": "#004027",
//             "title": "Jameson",
//             "slug": "jameson"
//         },
//         "jamstack": {
//             "hex": "#F0047F",
//             "title": "Jamstack",
//             "slug": "jamstack"
//         },
//         "japanairlines": {
//             "hex": "#C00000",
//             "title": "Japan Airlines",
//             "slug": "japanairlines"
//         },
//         "jasmine": {
//             "hex": "#8A4182",
//             "title": "Jasmine",
//             "slug": "jasmine"
//         },
//         "javascript": {
//             "hex": "#F7DF1E",
//             "title": "JavaScript",
//             "slug": "javascript"
//         },
//         "jbl": {
//             "hex": "#FF3300",
//             "title": "JBL",
//             "slug": "jbl"
//         },
//         "jcb": {
//             "hex": "#0B4EA2",
//             "title": "JCB",
//             "slug": "jcb"
//         },
//         "jeep": {
//             "hex": "#000000",
//             "title": "Jeep",
//             "slug": "jeep"
//         },
//         "jekyll": {
//             "hex": "#CC0000",
//             "title": "Jekyll",
//             "slug": "jekyll"
//         },
//         "jellyfin": {
//             "hex": "#00A4DC",
//             "title": "Jellyfin",
//             "slug": "jellyfin"
//         },
//         "jenkins": {
//             "hex": "#D24939",
//             "title": "Jenkins",
//             "slug": "jenkins"
//         },
//         "jest": {
//             "hex": "#C21325",
//             "title": "Jest",
//             "slug": "jest"
//         },
//         "jet": {
//             "hex": "#FBBA00",
//             "title": "JET",
//             "slug": "jet"
//         },
//         "jetblue": {
//             "hex": "#001E59",
//             "title": "JetBlue",
//             "slug": "jetblue"
//         },
//         "jetbrains": {
//             "hex": "#000000",
//             "title": "JetBrains",
//             "slug": "jetbrains"
//         },
//         "jetpackcompose": {
//             "hex": "#4285F4",
//             "title": "Jetpack Compose",
//             "slug": "jetpackcompose"
//         },
//         "jfrog": {
//             "hex": "#40BE46",
//             "title": "JFrog",
//             "slug": "jfrog"
//         },
//         "jfrogpipelines": {
//             "hex": "#40BE46",
//             "title": "JFrog Pipelines",
//             "slug": "jfrogpipelines"
//         },
//         "jhipster": {
//             "hex": "#3E8ACC",
//             "title": "JHipster",
//             "slug": "jhipster"
//         },
//         "jinja": {
//             "hex": "#B41717",
//             "title": "Jinja",
//             "slug": "jinja"
//         },
//         "jio": {
//             "hex": "#0A2885",
//             "title": "Jio",
//             "slug": "jio"
//         },
//         "jira": {
//             "hex": "#0052CC",
//             "title": "Jira",
//             "slug": "jira"
//         },
//         "jirasoftware": {
//             "hex": "#0052CC",
//             "title": "Jira Software",
//             "slug": "jirasoftware"
//         },
//         "jitpack": {
//             "hex": "#000000",
//             "title": "JitPack",
//             "slug": "jitpack"
//         },
//         "jitsi": {
//             "hex": "#97979A",
//             "title": "Jitsi",
//             "slug": "jitsi"
//         },
//         "johndeere": {
//             "hex": "#367C2B",
//             "title": "John Deere",
//             "slug": "johndeere"
//         },
//         "joomla": {
//             "hex": "#5091CD",
//             "title": "Joomla",
//             "slug": "joomla"
//         },
//         "joplin": {
//             "hex": "#1071D3",
//             "title": "Joplin",
//             "slug": "joplin"
//         },
//         "jordan": {
//             "hex": "#000000",
//             "title": "Jordan",
//             "slug": "jordan"
//         },
//         "jouav": {
//             "hex": "#E1B133",
//             "title": "JOUAV",
//             "slug": "jouav"
//         },
//         "jovian": {
//             "hex": "#0D61FF",
//             "title": "Jovian",
//             "slug": "jovian"
//         },
//         "jpeg": {
//             "hex": "#8A8A8A",
//             "title": "JPEG",
//             "slug": "jpeg"
//         },
//         "jquery": {
//             "hex": "#0769AD",
//             "title": "jQuery",
//             "slug": "jquery"
//         },
//         "jrgroup": {
//             "hex": "#44AF35",
//             "title": "JR Group",
//             "slug": "jrgroup"
//         },
//         "jsdelivr": {
//             "hex": "#E84D3D",
//             "title": "jsDelivr",
//             "slug": "jsdelivr"
//         },
//         "jsfiddle": {
//             "hex": "#0084FF",
//             "title": "JSFiddle",
//             "slug": "jsfiddle"
//         },
//         "json": {
//             "hex": "#000000",
//             "title": "JSON",
//             "slug": "json"
//         },
//         "jsonwebtokens": {
//             "hex": "#000000",
//             "title": "JSON Web Tokens",
//             "slug": "jsonwebtokens"
//         },
//         "jsr": {
//             "hex": "#F7DF1E",
//             "title": "JSR",
//             "slug": "jsr"
//         },
//         "jss": {
//             "hex": "#F7DF1E",
//             "title": "JSS",
//             "slug": "jss"
//         },
//         "juce": {
//             "hex": "#8DC63F",
//             "title": "JUCE",
//             "slug": "juce"
//         },
//         "juejin": {
//             "hex": "#007FFF",
//             "title": "Juejin",
//             "slug": "juejin"
//         },
//         "juke": {
//             "hex": "#6CD74A",
//             "title": "JUKE",
//             "slug": "juke"
//         },
//         "julia": {
//             "hex": "#9558B2",
//             "title": "Julia",
//             "slug": "julia"
//         },
//         "junipernetworks": {
//             "hex": "#84B135",
//             "title": "Juniper Networks",
//             "slug": "junipernetworks"
//         },
//         "junit5": {
//             "hex": "#25A162",
//             "title": "JUnit5",
//             "slug": "junit5"
//         },
//         "jupyter": {
//             "hex": "#F37626",
//             "title": "Jupyter",
//             "slug": "jupyter"
//         },
//         "justeat": {
//             "hex": "#F36D00",
//             "title": "Just Eat",
//             "slug": "justeat"
//         },
//         "justgiving": {
//             "hex": "#AD29B6",
//             "title": "JustGiving",
//             "slug": "justgiving"
//         },
//         "k3s": {
//             "hex": "#FFC61C",
//             "title": "K3s",
//             "slug": "k3s"
//         },
//         "k6": {
//             "hex": "#7D64FF",
//             "title": "k6",
//             "slug": "k6"
//         },
//         "kaggle": {
//             "hex": "#20BEFF",
//             "title": "Kaggle",
//             "slug": "kaggle"
//         },
//         "kagi": {
//             "hex": "#FFB319",
//             "title": "Kagi",
//             "slug": "kagi"
//         },
//         "kahoot": {
//             "hex": "#46178F",
//             "title": "Kahoot!",
//             "slug": "kahoot"
//         },
//         "kaios": {
//             "hex": "#6F02B5",
//             "title": "KaiOS",
//             "slug": "kaios"
//         },
//         "kakao": {
//             "hex": "#FFCD00",
//             "title": "Kakao",
//             "slug": "kakao"
//         },
//         "kakaotalk": {
//             "hex": "#FFCD00",
//             "title": "KakaoTalk",
//             "slug": "kakaotalk"
//         },
//         "kalilinux": {
//             "hex": "#557C94",
//             "title": "Kali Linux",
//             "slug": "kalilinux"
//         },
//         "kamailio": {
//             "hex": "#506365",
//             "title": "Kamailio",
//             "slug": "kamailio"
//         },
//         "kaniko": {
//             "hex": "#FFA600",
//             "title": "Kaniko",
//             "slug": "kaniko"
//         },
//         "karlsruherverkehrsverbund": {
//             "hex": "#9B2321",
//             "title": "Karlsruher Verkehrsverbund",
//             "slug": "karlsruherverkehrsverbund"
//         },
//         "kasasmart": {
//             "hex": "#4ACBD6",
//             "title": "Kasa Smart",
//             "slug": "kasasmart"
//         },
//         "kashflow": {
//             "hex": "#E5426E",
//             "title": "KashFlow",
//             "slug": "kashflow"
//         },
//         "kaspersky": {
//             "hex": "#006D5C",
//             "title": "Kaspersky",
//             "slug": "kaspersky"
//         },
//         "katana": {
//             "hex": "#000000",
//             "title": "Katana",
//             "slug": "katana"
//         },
//         "kaufland": {
//             "hex": "#E10915",
//             "title": "Kaufland",
//             "slug": "kaufland"
//         },
//         "kde": {
//             "hex": "#1D99F3",
//             "title": "KDE",
//             "slug": "kde"
//         },
//         "kdeplasma": {
//             "hex": "#1D99F3",
//             "title": "KDE Plasma",
//             "slug": "kdeplasma"
//         },
//         "kdenlive": {
//             "hex": "#527EB2",
//             "title": "Kdenlive",
//             "slug": "kdenlive"
//         },
//         "kedro": {
//             "hex": "#FFC900",
//             "title": "Kedro",
//             "slug": "kedro"
//         },
//         "keenetic": {
//             "hex": "#009EE2",
//             "title": "Keenetic",
//             "slug": "keenetic"
//         },
//         "keepachangelog": {
//             "hex": "#E05735",
//             "title": "Keep a Changelog",
//             "slug": "keepachangelog"
//         },
//         "keepassxc": {
//             "hex": "#6CAC4D",
//             "title": "KeePassXC",
//             "slug": "keepassxc"
//         },
//         "keeper": {
//             "hex": "#FFC700",
//             "title": "Keeper",
//             "slug": "keeper"
//         },
//         "keeweb": {
//             "hex": "#528BFF",
//             "title": "KeeWeb",
//             "slug": "keeweb"
//         },
//         "kentico": {
//             "hex": "#F05A22",
//             "title": "Kentico",
//             "slug": "kentico"
//         },
//         "keras": {
//             "hex": "#D00000",
//             "title": "Keras",
//             "slug": "keras"
//         },
//         "keybase": {
//             "hex": "#33A0FF",
//             "title": "Keybase",
//             "slug": "keybase"
//         },
//         "keycdn": {
//             "hex": "#047AED",
//             "title": "KeyCDN",
//             "slug": "keycdn"
//         },
//         "keycloak": {
//             "hex": "#4D4D4D",
//             "title": "Keycloak",
//             "slug": "keycloak"
//         },
//         "keystone": {
//             "hex": "#166BFF",
//             "title": "Keystone",
//             "slug": "keystone"
//         },
//         "kfc": {
//             "hex": "#F40027",
//             "title": "KFC",
//             "slug": "kfc"
//         },
//         "khanacademy": {
//             "hex": "#14BF96",
//             "title": "Khan Academy",
//             "slug": "khanacademy"
//         },
//         "khronosgroup": {
//             "hex": "#CC3333",
//             "title": "Khronos Group",
//             "slug": "khronosgroup"
//         },
//         "kia": {
//             "hex": "#05141F",
//             "title": "Kia",
//             "slug": "kia"
//         },
//         "kibana": {
//             "hex": "#005571",
//             "title": "Kibana",
//             "slug": "kibana"
//         },
//         "kicad": {
//             "hex": "#314CB0",
//             "title": "KiCad",
//             "slug": "kicad"
//         },
//         "kick": {
//             "hex": "#53FC19",
//             "title": "Kick",
//             "slug": "kick"
//         },
//         "kickstarter": {
//             "hex": "#05CE78",
//             "title": "Kickstarter",
//             "slug": "kickstarter"
//         },
//         "kik": {
//             "hex": "#82BC23",
//             "title": "Kik",
//             "slug": "kik"
//         },
//         "kingstontechnology": {
//             "hex": "#000000",
//             "title": "Kingston Technology",
//             "slug": "kingstontechnology"
//         },
//         "kinopoisk": {
//             "hex": "#FF5500",
//             "title": "Kinopoisk",
//             "slug": "kinopoisk"
//         },
//         "kinsta": {
//             "hex": "#5333ED",
//             "title": "Kinsta",
//             "slug": "kinsta"
//         },
//         "kirby": {
//             "hex": "#000000",
//             "title": "Kirby",
//             "slug": "kirby"
//         },
//         "kit": {
//             "hex": "#000000",
//             "title": "Kit",
//             "slug": "kit"
//         },
//         "kitsu": {
//             "hex": "#FD755C",
//             "title": "Kitsu",
//             "slug": "kitsu"
//         },
//         "klarna": {
//             "hex": "#FFB3C7",
//             "title": "Klarna",
//             "slug": "klarna"
//         },
//         "kleinanzeigen": {
//             "hex": "#1D4B00",
//             "title": "Kleinanzeigen",
//             "slug": "kleinanzeigen"
//         },
//         "klm": {
//             "hex": "#00A1DE",
//             "title": "KLM",
//             "slug": "klm"
//         },
//         "klook": {
//             "hex": "#FF5722",
//             "title": "Klook",
//             "slug": "klook"
//         },
//         "knative": {
//             "hex": "#0865AD",
//             "title": "Knative",
//             "slug": "knative"
//         },
//         "knexdotjs": {
//             "hex": "#D26B38",
//             "title": "Knex.js",
//             "slug": "knexdotjs"
//         },
//         "knime": {
//             "hex": "#FDD800",
//             "title": "KNIME",
//             "slug": "knime"
//         },
//         "knip": {
//             "hex": "#F56E0F",
//             "title": "Knip",
//             "slug": "knip"
//         },
//         "knowledgebase": {
//             "hex": "#9146FF",
//             "title": "KnowledgeBase",
//             "slug": "knowledgebase"
//         },
//         "known": {
//             "hex": "#333333",
//             "title": "Known",
//             "slug": "known"
//         },
//         "kofi": {
//             "hex": "#FF6433",
//             "title": "Ko-fi",
//             "slug": "kofi"
//         },
//         "koa": {
//             "hex": "#33333D",
//             "title": "Koa",
//             "slug": "koa"
//         },
//         "koc": {
//             "hex": "#F9423A",
//             "title": "Koc",
//             "slug": "koc"
//         },
//         "kodak": {
//             "hex": "#ED0000",
//             "title": "Kodak",
//             "slug": "kodak"
//         },
//         "kodi": {
//             "hex": "#17B2E7",
//             "title": "Kodi",
//             "slug": "kodi"
//         },
//         "koenigsegg": {
//             "hex": "#000000",
//             "title": "Koenigsegg",
//             "slug": "koenigsegg"
//         },
//         "kofax": {
//             "hex": "#00558C",
//             "title": "Kofax",
//             "slug": "kofax"
//         },
//         "komoot": {
//             "hex": "#6AA127",
//             "title": "Komoot",
//             "slug": "komoot"
//         },
//         "konami": {
//             "hex": "#B60014",
//             "title": "Konami",
//             "slug": "konami"
//         },
//         "kong": {
//             "hex": "#003459",
//             "title": "Kong",
//             "slug": "kong"
//         },
//         "kongregate": {
//             "hex": "#F04438",
//             "title": "Kongregate",
//             "slug": "kongregate"
//         },
//         "konva": {
//             "hex": "#0D83CD",
//             "title": "Konva",
//             "slug": "konva"
//         },
//         "kotlin": {
//             "hex": "#7F52FF",
//             "title": "Kotlin",
//             "slug": "kotlin"
//         },
//         "koyeb": {
//             "hex": "#121212",
//             "title": "Koyeb",
//             "slug": "koyeb"
//         },
//         "krita": {
//             "hex": "#3BABFF",
//             "title": "Krita",
//             "slug": "krita"
//         },
//         "ktm": {
//             "hex": "#FF6600",
//             "title": "KTM",
//             "slug": "ktm"
//         },
//         "ktor": {
//             "hex": "#087CFA",
//             "title": "Ktor",
//             "slug": "ktor"
//         },
//         "kuaishou": {
//             "hex": "#FF4906",
//             "title": "Kuaishou",
//             "slug": "kuaishou"
//         },
//         "kubernetes": {
//             "hex": "#326CE5",
//             "title": "Kubernetes",
//             "slug": "kubernetes"
//         },
//         "kubuntu": {
//             "hex": "#0079C1",
//             "title": "Kubuntu",
//             "slug": "kubuntu"
//         },
//         "kucoin": {
//             "hex": "#01BC8D",
//             "title": "KuCoin",
//             "slug": "kucoin"
//         },
//         "kueski": {
//             "hex": "#0075FF",
//             "title": "Kueski",
//             "slug": "kueski"
//         },
//         "kuma": {
//             "hex": "#290B53",
//             "title": "Kuma",
//             "slug": "kuma"
//         },
//         "kununu": {
//             "hex": "#FFC62E",
//             "title": "Kununu",
//             "slug": "kununu"
//         },
//         "kuula": {
//             "hex": "#4092B4",
//             "title": "Kuula",
//             "slug": "kuula"
//         },
//         "kx": {
//             "hex": "#101820",
//             "title": "KX",
//             "slug": "kx"
//         },
//         "kyocera": {
//             "hex": "#DF0522",
//             "title": "Kyocera",
//             "slug": "kyocera"
//         },
//         "lequipe": {
//             "hex": "#E42829",
//             "title": "L'Équipe",
//             "slug": "lequipe"
//         },
//         "labview": {
//             "hex": "#FFDB00",
//             "title": "LabVIEW",
//             "slug": "labview"
//         },
//         "lada": {
//             "hex": "#ED6B21",
//             "title": "LADA",
//             "slug": "lada"
//         },
//         "lamborghini": {
//             "hex": "#B6A272",
//             "title": "Lamborghini",
//             "slug": "lamborghini"
//         },
//         "landrover": {
//             "hex": "#005A2B",
//             "title": "Land Rover",
//             "slug": "landrover"
//         },
//         "langchain": {
//             "hex": "#1C3C3C",
//             "title": "LangChain",
//             "slug": "langchain"
//         },
//         "languagetool": {
//             "hex": "#45A1FC",
//             "title": "LanguageTool",
//             "slug": "languagetool"
//         },
//         "lapce": {
//             "hex": "#3B82F6",
//             "title": "Lapce",
//             "slug": "lapce"
//         },
//         "laragon": {
//             "hex": "#0E83CD",
//             "title": "Laragon",
//             "slug": "laragon"
//         },
//         "laravel": {
//             "hex": "#FF2D20",
//             "title": "Laravel",
//             "slug": "laravel"
//         },
//         "laravelhorizon": {
//             "hex": "#405263",
//             "title": "Laravel Horizon",
//             "slug": "laravelhorizon"
//         },
//         "laravelnova": {
//             "hex": "#252D37",
//             "title": "Laravel Nova",
//             "slug": "laravelnova"
//         },
//         "lastdotfm": {
//             "hex": "#D51007",
//             "title": "Last.fm",
//             "slug": "lastdotfm"
//         },
//         "lastpass": {
//             "hex": "#D32D27",
//             "title": "LastPass",
//             "slug": "lastpass"
//         },
//         "latex": {
//             "hex": "#008080",
//             "title": "LaTeX",
//             "slug": "latex"
//         },
//         "launchpad": {
//             "hex": "#F8C300",
//             "title": "Launchpad",
//             "slug": "launchpad"
//         },
//         "lazarus": {
//             "hex": "#000000",
//             "title": "Lazarus",
//             "slug": "lazarus"
//         },
//         "lazyvim": {
//             "hex": "#2E7DE9",
//             "title": "LazyVim",
//             "slug": "lazyvim"
//         },
//         "lbry": {
//             "hex": "#2F9176",
//             "title": "LBRY",
//             "slug": "lbry"
//         },
//         "leaderprice": {
//             "hex": "#E50005",
//             "title": "Leader Price",
//             "slug": "leaderprice"
//         },
//         "leaflet": {
//             "hex": "#199900",
//             "title": "Leaflet",
//             "slug": "leaflet"
//         },
//         "leagueoflegends": {
//             "hex": "#C28F2C",
//             "title": "League of Legends",
//             "slug": "leagueoflegends"
//         },
//         "leanpub": {
//             "hex": "#262425",
//             "title": "Leanpub",
//             "slug": "leanpub"
//         },
//         "leetcode": {
//             "hex": "#FFA116",
//             "title": "LeetCode",
//             "slug": "leetcode"
//         },
//         "lefthook": {
//             "hex": "#FF1E1E",
//             "title": "Lefthook",
//             "slug": "lefthook"
//         },
//         "legacygames": {
//             "hex": "#144B9E",
//             "title": "Legacy Games",
//             "slug": "legacygames"
//         },
//         "leica": {
//             "hex": "#E20612",
//             "title": "Leica",
//             "slug": "leica"
//         },
//         "lemmy": {
//             "hex": "#000000",
//             "title": "Lemmy",
//             "slug": "lemmy"
//         },
//         "lemonsqueezy": {
//             "hex": "#FFC233",
//             "title": "Lemon Squeezy",
//             "slug": "lemonsqueezy"
//         },
//         "lenovo": {
//             "hex": "#E2231A",
//             "title": "Lenovo",
//             "slug": "lenovo"
//         },
//         "lens": {
//             "hex": "#3D90CE",
//             "title": "Lens",
//             "slug": "lens"
//         },
//         "leptos": {
//             "hex": "#EF3939",
//             "title": "Leptos",
//             "slug": "leptos"
//         },
//         "lerna": {
//             "hex": "#C084FC",
//             "title": "Lerna",
//             "slug": "lerna"
//         },
//         "leroymerlin": {
//             "hex": "#78BE20",
//             "title": "Leroy Merlin",
//             "slug": "leroymerlin"
//         },
//         "leslibraires": {
//             "hex": "#CF4A0C",
//             "title": "Les libraires",
//             "slug": "leslibraires"
//         },
//         "less": {
//             "hex": "#1D365D",
//             "title": "Less",
//             "slug": "less"
//         },
//         "letsencrypt": {
//             "hex": "#003A70",
//             "title": "Let's Encrypt",
//             "slug": "letsencrypt"
//         },
//         "letterboxd": {
//             "hex": "#202830",
//             "title": "Letterboxd",
//             "slug": "letterboxd"
//         },
//         "levelsdotfyi": {
//             "hex": "#788B95",
//             "title": "levels.fyi",
//             "slug": "levelsdotfyi"
//         },
//         "lg": {
//             "hex": "#A50034",
//             "title": "LG",
//             "slug": "lg"
//         },
//         "lining": {
//             "hex": "#C5242C",
//             "title": "Li-Ning",
//             "slug": "lining"
//         },
//         "liberadotchat": {
//             "hex": "#FF55DD",
//             "title": "Libera.Chat",
//             "slug": "liberadotchat"
//         },
//         "liberapay": {
//             "hex": "#F6C915",
//             "title": "Liberapay",
//             "slug": "liberapay"
//         },
//         "librariesdotio": {
//             "hex": "#337AB7",
//             "title": "Libraries.io",
//             "slug": "librariesdotio"
//         },
//         "librarything": {
//             "hex": "#251A15",
//             "title": "LibraryThing",
//             "slug": "librarything"
//         },
//         "libreoffice": {
//             "hex": "#18A303",
//             "title": "LibreOffice",
//             "slug": "libreoffice"
//         },
//         "libreofficebase": {
//             "hex": "#7324A9",
//             "title": "LibreOffice Base",
//             "slug": "libreofficebase"
//         },
//         "libreofficecalc": {
//             "hex": "#007C3C",
//             "title": "LibreOffice Calc",
//             "slug": "libreofficecalc"
//         },
//         "libreofficedraw": {
//             "hex": "#CB6D30",
//             "title": "LibreOffice Draw",
//             "slug": "libreofficedraw"
//         },
//         "libreofficeimpress": {
//             "hex": "#D0120D",
//             "title": "LibreOffice Impress",
//             "slug": "libreofficeimpress"
//         },
//         "libreofficemath": {
//             "hex": "#C10018",
//             "title": "LibreOffice Math",
//             "slug": "libreofficemath"
//         },
//         "libreofficewriter": {
//             "hex": "#083FA6",
//             "title": "LibreOffice Writer",
//             "slug": "libreofficewriter"
//         },
//         "libretranslate": {
//             "hex": "#1565C0",
//             "title": "LibreTranslate",
//             "slug": "libretranslate"
//         },
//         "libretube": {
//             "hex": "#FF9699",
//             "title": "LibreTube",
//             "slug": "libretube"
//         },
//         "librewolf": {
//             "hex": "#00ACFF",
//             "title": "LibreWolf",
//             "slug": "librewolf"
//         },
//         "libuv": {
//             "hex": "#403C3D",
//             "title": "libuv",
//             "slug": "libuv"
//         },
//         "lichess": {
//             "hex": "#000000",
//             "title": "Lichess",
//             "slug": "lichess"
//         },
//         "lidl": {
//             "hex": "#0050AA",
//             "title": "Lidl",
//             "slug": "lidl"
//         },
//         "lifx": {
//             "hex": "#000000",
//             "title": "LIFX",
//             "slug": "lifx"
//         },
//         "lightburn": {
//             "hex": "#57182D",
//             "title": "LightBurn",
//             "slug": "lightburn"
//         },
//         "lighthouse": {
//             "hex": "#F44B21",
//             "title": "Lighthouse",
//             "slug": "lighthouse"
//         },
//         "lightning": {
//             "hex": "#792EE5",
//             "title": "Lightning",
//             "slug": "lightning"
//         },
//         "limesurvey": {
//             "hex": "#14AE5C",
//             "title": "LimeSurvey",
//             "slug": "limesurvey"
//         },
//         "line": {
//             "hex": "#00C300",
//             "title": "LINE",
//             "slug": "line"
//         },
//         "lineageos": {
//             "hex": "#167C80",
//             "title": "LineageOS",
//             "slug": "lineageos"
//         },
//         "linear": {
//             "hex": "#5E6AD2",
//             "title": "Linear",
//             "slug": "linear"
//         },
//         "linkerd": {
//             "hex": "#2BEDA7",
//             "title": "Linkerd",
//             "slug": "linkerd"
//         },
//         "linkfire": {
//             "hex": "#FF3850",
//             "title": "Linkfire",
//             "slug": "linkfire"
//         },
//         "linksys": {
//             "hex": "#000000",
//             "title": "Linksys",
//             "slug": "linksys"
//         },
//         "linktree": {
//             "hex": "#43E55E",
//             "title": "Linktree",
//             "slug": "linktree"
//         },
//         "linphone": {
//             "hex": "#FF5E00",
//             "title": "Linphone",
//             "slug": "linphone"
//         },
//         "lintcode": {
//             "hex": "#13B4FF",
//             "title": "LintCode",
//             "slug": "lintcode"
//         },
//         "linux": {
//             "hex": "#FCC624",
//             "title": "Linux",
//             "slug": "linux"
//         },
//         "linuxcontainers": {
//             "hex": "#333333",
//             "title": "Linux Containers",
//             "slug": "linuxcontainers"
//         },
//         "linuxfoundation": {
//             "hex": "#003778",
//             "title": "Linux Foundation",
//             "slug": "linuxfoundation"
//         },
//         "linuxmint": {
//             "hex": "#86BE43",
//             "title": "Linux Mint",
//             "slug": "linuxmint"
//         },
//         "linuxprofessionalinstitute": {
//             "hex": "#FDC300",
//             "title": "Linux Professional Institute",
//             "slug": "linuxprofessionalinstitute"
//         },
//         "linuxserver": {
//             "hex": "#DA3B8A",
//             "title": "LinuxServer",
//             "slug": "linuxserver"
//         },
//         "lionair": {
//             "hex": "#ED3237",
//             "title": "Lion Air",
//             "slug": "lionair"
//         },
//         "liquibase": {
//             "hex": "#2962FF",
//             "title": "Liquibase",
//             "slug": "liquibase"
//         },
//         "listmonk": {
//             "hex": "#0055D4",
//             "title": "listmonk",
//             "slug": "listmonk"
//         },
//         "lit": {
//             "hex": "#324FFF",
//             "title": "Lit",
//             "slug": "lit"
//         },
//         "litecoin": {
//             "hex": "#A6A9AA",
//             "title": "Litecoin",
//             "slug": "litecoin"
//         },
//         "literal": {
//             "hex": "#000000",
//             "title": "Literal",
//             "slug": "literal"
//         },
//         "litiengine": {
//             "hex": "#00A5BC",
//             "title": "LITIENGINE",
//             "slug": "litiengine"
//         },
//         "livechat": {
//             "hex": "#FF5100",
//             "title": "LiveChat",
//             "slug": "livechat"
//         },
//         "livejournal": {
//             "hex": "#00B0EA",
//             "title": "LiveJournal",
//             "slug": "livejournal"
//         },
//         "livewire": {
//             "hex": "#4E56A6",
//             "title": "Livewire",
//             "slug": "livewire"
//         },
//         "llvm": {
//             "hex": "#262D3A",
//             "title": "LLVM",
//             "slug": "llvm"
//         },
//         "lmms": {
//             "hex": "#10B146",
//             "title": "LMMS",
//             "slug": "lmms"
//         },
//         "lobsters": {
//             "hex": "#AC130D",
//             "title": "Lobsters",
//             "slug": "lobsters"
//         },
//         "local": {
//             "hex": "#51BB7B",
//             "title": "Local",
//             "slug": "local"
//         },
//         "lodash": {
//             "hex": "#3492FF",
//             "title": "Lodash",
//             "slug": "lodash"
//         },
//         "logitech": {
//             "hex": "#00B8FC",
//             "title": "Logitech",
//             "slug": "logitech"
//         },
//         "logitechg": {
//             "hex": "#00B8FC",
//             "title": "Logitech G",
//             "slug": "logitechg"
//         },
//         "logmein": {
//             "hex": "#45B6F2",
//             "title": "LogMeIn",
//             "slug": "logmein"
//         },
//         "logseq": {
//             "hex": "#85C8C8",
//             "title": "Logseq",
//             "slug": "logseq"
//         },
//         "logstash": {
//             "hex": "#005571",
//             "title": "Logstash",
//             "slug": "logstash"
//         },
//         "looker": {
//             "hex": "#4285F4",
//             "title": "Looker",
//             "slug": "looker"
//         },
//         "loom": {
//             "hex": "#625DF5",
//             "title": "Loom",
//             "slug": "loom"
//         },
//         "loop": {
//             "hex": "#F29400",
//             "title": "Loop",
//             "slug": "loop"
//         },
//         "loopback": {
//             "hex": "#3F5DFF",
//             "title": "LoopBack",
//             "slug": "loopback"
//         },
//         "lootcrate": {
//             "hex": "#1E1E1E",
//             "title": "Loot Crate",
//             "slug": "lootcrate"
//         },
//         "lospec": {
//             "hex": "#EAEAEA",
//             "title": "Lospec",
//             "slug": "lospec"
//         },
//         "lotpolishairlines": {
//             "hex": "#11397E",
//             "title": "LOT Polish Airlines",
//             "slug": "lotpolishairlines"
//         },
//         "ltspice": {
//             "hex": "#900028",
//             "title": "LTspice",
//             "slug": "ltspice"
//         },
//         "lua": {
//             "hex": "#2C2D72",
//             "title": "Lua",
//             "slug": "lua"
//         },
//         "lubuntu": {
//             "hex": "#0068C8",
//             "title": "Lubuntu",
//             "slug": "lubuntu"
//         },
//         "lucia": {
//             "hex": "#5F57FF",
//             "title": "Lucia",
//             "slug": "lucia"
//         },
//         "lucid": {
//             "hex": "#282C33",
//             "title": "Lucid",
//             "slug": "lucid"
//         },
//         "lucide": {
//             "hex": "#F56565",
//             "title": "Lucide",
//             "slug": "lucide"
//         },
//         "ludwig": {
//             "hex": "#FFFFFF",
//             "title": "Ludwig",
//             "slug": "ludwig"
//         },
//         "lufthansa": {
//             "hex": "#05164D",
//             "title": "Lufthansa",
//             "slug": "lufthansa"
//         },
//         "lumen": {
//             "hex": "#E74430",
//             "title": "Lumen",
//             "slug": "lumen"
//         },
//         "lunacy": {
//             "hex": "#179DE3",
//             "title": "Lunacy",
//             "slug": "lunacy"
//         },
//         "lutris": {
//             "hex": "#FF9900",
//             "title": "Lutris",
//             "slug": "lutris"
//         },
//         "lvgl": {
//             "hex": "#343839",
//             "title": "LVGL",
//             "slug": "lvgl"
//         },
//         "lydia": {
//             "hex": "#0180FF",
//             "title": "Lydia",
//             "slug": "lydia"
//         },
//         "lyft": {
//             "hex": "#FF00BF",
//             "title": "Lyft",
//             "slug": "lyft"
//         },
//         "maas": {
//             "hex": "#E95420",
//             "title": "MAAS",
//             "slug": "maas"
//         },
//         "macos": {
//             "hex": "#000000",
//             "title": "macOS",
//             "slug": "macos"
//         },
//         "macpaw": {
//             "hex": "#000000",
//             "title": "MacPaw",
//             "slug": "macpaw"
//         },
//         "macys": {
//             "hex": "#E21A2C",
//             "title": "Macy's",
//             "slug": "macys"
//         },
//         "magasinsu": {
//             "hex": "#E71B34",
//             "title": "Magasins U",
//             "slug": "magasinsu"
//         },
//         "magic": {
//             "hex": "#6851FF",
//             "title": "Magic",
//             "slug": "magic"
//         },
//         "magisk": {
//             "hex": "#00AF9C",
//             "title": "Magisk",
//             "slug": "magisk"
//         },
//         "mahindra": {
//             "hex": "#DD052B",
//             "title": "Mahindra",
//             "slug": "mahindra"
//         },
//         "maildotcom": {
//             "hex": "#004788",
//             "title": "mail.com",
//             "slug": "maildotcom"
//         },
//         "maildotru": {
//             "hex": "#005FF9",
//             "title": "Mail.Ru",
//             "slug": "maildotru"
//         },
//         "mailboxdotorg": {
//             "hex": "#76BB21",
//             "title": "mailbox.org",
//             "slug": "mailboxdotorg"
//         },
//         "mailchimp": {
//             "hex": "#FFE01B",
//             "title": "MailChimp",
//             "slug": "mailchimp"
//         },
//         "mailgun": {
//             "hex": "#F06B66",
//             "title": "Mailgun",
//             "slug": "mailgun"
//         },
//         "mailtrap": {
//             "hex": "#22D172",
//             "title": "Mailtrap",
//             "slug": "mailtrap"
//         },
//         "mainwp": {
//             "hex": "#7FB100",
//             "title": "MainWP",
//             "slug": "mainwp"
//         },
//         "majorleaguehacking": {
//             "hex": "#265A8F",
//             "title": "Major League Hacking",
//             "slug": "majorleaguehacking"
//         },
//         "make": {
//             "hex": "#6D00CC",
//             "title": "Make",
//             "slug": "make"
//         },
//         "makerbot": {
//             "hex": "#FF1E0D",
//             "title": "MakerBot",
//             "slug": "makerbot"
//         },
//         "malt": {
//             "hex": "#FC5757",
//             "title": "Malt",
//             "slug": "malt"
//         },
//         "malwarebytes": {
//             "hex": "#0D3ECC",
//             "title": "Malwarebytes",
//             "slug": "malwarebytes"
//         },
//         "mambaui": {
//             "hex": "#6D28D9",
//             "title": "Mamba UI",
//             "slug": "mambaui"
//         },
//         "mamp": {
//             "hex": "#02749C",
//             "title": "MAMP",
//             "slug": "mamp"
//         },
//         "man": {
//             "hex": "#E40045",
//             "title": "MAN",
//             "slug": "man"
//         },
//         "manageiq": {
//             "hex": "#EF2929",
//             "title": "ManageIQ",
//             "slug": "manageiq"
//         },
//         "manjaro": {
//             "hex": "#35BF5C",
//             "title": "Manjaro",
//             "slug": "manjaro"
//         },
//         "mantine": {
//             "hex": "#339AF0",
//             "title": "Mantine",
//             "slug": "mantine"
//         },
//         "mapbox": {
//             "hex": "#000000",
//             "title": "Mapbox",
//             "slug": "mapbox"
//         },
//         "mapillary": {
//             "hex": "#00AF66",
//             "title": "Mapillary",
//             "slug": "mapillary"
//         },
//         "maplibre": {
//             "hex": "#396CB2",
//             "title": "MapLibre",
//             "slug": "maplibre"
//         },
//         "maptiler": {
//             "hex": "#323357",
//             "title": "MapTiler",
//             "slug": "maptiler"
//         },
//         "mariadb": {
//             "hex": "#003545",
//             "title": "MariaDB",
//             "slug": "mariadb"
//         },
//         "mariadbfoundation": {
//             "hex": "#1F305F",
//             "title": "MariaDB Foundation",
//             "slug": "mariadbfoundation"
//         },
//         "markdown": {
//             "hex": "#000000",
//             "title": "Markdown",
//             "slug": "markdown"
//         },
//         "marko": {
//             "hex": "#2596BE",
//             "title": "Marko",
//             "slug": "marko"
//         },
//         "marriott": {
//             "hex": "#A70023",
//             "title": "Marriott",
//             "slug": "marriott"
//         },
//         "marvelapp": {
//             "hex": "#1FB6FF",
//             "title": "MarvelApp",
//             "slug": "marvelapp"
//         },
//         "maserati": {
//             "hex": "#0C2340",
//             "title": "Maserati",
//             "slug": "maserati"
//         },
//         "mastercard": {
//             "hex": "#EB001B",
//             "title": "MasterCard",
//             "slug": "mastercard"
//         },
//         "mastercomfig": {
//             "hex": "#009688",
//             "title": "mastercomfig",
//             "slug": "mastercomfig"
//         },
//         "mastodon": {
//             "hex": "#6364FF",
//             "title": "Mastodon",
//             "slug": "mastodon"
//         },
//         "materialdesign": {
//             "hex": "#757575",
//             "title": "Material Design",
//             "slug": "materialdesign"
//         },
//         "materialdesignicons": {
//             "hex": "#2196F3",
//             "title": "Material Design Icons",
//             "slug": "materialdesignicons"
//         },
//         "materialformkdocs": {
//             "hex": "#526CFE",
//             "title": "Material for MkDocs",
//             "slug": "materialformkdocs"
//         },
//         "matillion": {
//             "hex": "#19E57F",
//             "title": "Matillion",
//             "slug": "matillion"
//         },
//         "matomo": {
//             "hex": "#3152A0",
//             "title": "Matomo",
//             "slug": "matomo"
//         },
//         "matrix": {
//             "hex": "#000000",
//             "title": "Matrix",
//             "slug": "matrix"
//         },
//         "matterdotjs": {
//             "hex": "#4B5562",
//             "title": "Matter.js",
//             "slug": "matterdotjs"
//         },
//         "mattermost": {
//             "hex": "#0058CC",
//             "title": "Mattermost",
//             "slug": "mattermost"
//         },
//         "matternet": {
//             "hex": "#261C29",
//             "title": "Matternet",
//             "slug": "matternet"
//         },
//         "mautic": {
//             "hex": "#4E5E9E",
//             "title": "Mautic",
//             "slug": "mautic"
//         },
//         "max": {
//             "hex": "#525252",
//             "title": "Max",
//             "slug": "max"
//         },
//         "maxplanckgesellschaft": {
//             "hex": "#006C66",
//             "title": "Max-Planck-Gesellschaft",
//             "slug": "maxplanckgesellschaft"
//         },
//         "maytag": {
//             "hex": "#002E5F",
//             "title": "Maytag",
//             "slug": "maytag"
//         },
//         "mazda": {
//             "hex": "#101010",
//             "title": "Mazda",
//             "slug": "mazda"
//         },
//         "maze": {
//             "hex": "#000000",
//             "title": "Maze",
//             "slug": "maze"
//         },
//         "mcafee": {
//             "hex": "#C01818",
//             "title": "McAfee",
//             "slug": "mcafee"
//         },
//         "mcdonalds": {
//             "hex": "#FBC817",
//             "title": "McDonald's",
//             "slug": "mcdonalds"
//         },
//         "mclaren": {
//             "hex": "#FF0000",
//             "title": "McLaren",
//             "slug": "mclaren"
//         },
//         "mdbook": {
//             "hex": "#000000",
//             "title": "mdBook",
//             "slug": "mdbook"
//         },
//         "mdnwebdocs": {
//             "hex": "#000000",
//             "title": "MDN Web Docs",
//             "slug": "mdnwebdocs"
//         },
//         "mdx": {
//             "hex": "#1B1F24",
//             "title": "MDX",
//             "slug": "mdx"
//         },
//         "mediafire": {
//             "hex": "#1299F3",
//             "title": "MediaFire",
//             "slug": "mediafire"
//         },
//         "mediamarkt": {
//             "hex": "#DF0000",
//             "title": "MediaMarkt",
//             "slug": "mediamarkt"
//         },
//         "mediapipe": {
//             "hex": "#0097A7",
//             "title": "MediaPipe",
//             "slug": "mediapipe"
//         },
//         "mediatek": {
//             "hex": "#EC9430",
//             "title": "MediaTek",
//             "slug": "mediatek"
//         },
//         "medibangpaint": {
//             "hex": "#00DBDE",
//             "title": "MediBang Paint",
//             "slug": "medibangpaint"
//         },
//         "medium": {
//             "hex": "#000000",
//             "title": "Medium",
//             "slug": "medium"
//         },
//         "medusa": {
//             "hex": "#000000",
//             "title": "Medusa",
//             "slug": "medusa"
//         },
//         "meetup": {
//             "hex": "#ED1C40",
//             "title": "Meetup",
//             "slug": "meetup"
//         },
//         "mega": {
//             "hex": "#D9272E",
//             "title": "MEGA",
//             "slug": "mega"
//         },
//         "meilisearch": {
//             "hex": "#FF5CAA",
//             "title": "Meilisearch",
//             "slug": "meilisearch"
//         },
//         "meituan": {
//             "hex": "#FFD100",
//             "title": "Meituan",
//             "slug": "meituan"
//         },
//         "meizu": {
//             "hex": "#FF4132",
//             "title": "Meizu",
//             "slug": "meizu"
//         },
//         "mendeley": {
//             "hex": "#9D1620",
//             "title": "Mendeley",
//             "slug": "mendeley"
//         },
//         "mentorcruise": {
//             "hex": "#172E59",
//             "title": "MentorCruise",
//             "slug": "mentorcruise"
//         },
//         "mercadopago": {
//             "hex": "#00B1EA",
//             "title": "Mercado Pago",
//             "slug": "mercadopago"
//         },
//         "mercedes": {
//             "hex": "#242424",
//             "title": "Mercedes",
//             "slug": "mercedes"
//         },
//         "merck": {
//             "hex": "#007A73",
//             "title": "Merck",
//             "slug": "merck"
//         },
//         "mercurial": {
//             "hex": "#999999",
//             "title": "Mercurial",
//             "slug": "mercurial"
//         },
//         "mermaid": {
//             "hex": "#FF3670",
//             "title": "Mermaid",
//             "slug": "mermaid"
//         },
//         "messenger": {
//             "hex": "#00B2FF",
//             "title": "Messenger",
//             "slug": "messenger"
//         },
//         "meta": {
//             "hex": "#0467DF",
//             "title": "Meta",
//             "slug": "meta"
//         },
//         "metabase": {
//             "hex": "#509EE3",
//             "title": "Metabase",
//             "slug": "metabase"
//         },
//         "metacritic": {
//             "hex": "#000000",
//             "title": "Metacritic",
//             "slug": "metacritic"
//         },
//         "metafilter": {
//             "hex": "#065A8F",
//             "title": "MetaFilter",
//             "slug": "metafilter"
//         },
//         "metasploit": {
//             "hex": "#2596CD",
//             "title": "Metasploit",
//             "slug": "metasploit"
//         },
//         "meteor": {
//             "hex": "#DE4F4F",
//             "title": "Meteor",
//             "slug": "meteor"
//         },
//         "metro": {
//             "hex": "#EF4242",
//             "title": "Metro",
//             "slug": "metro"
//         },
//         "metrodelaciudaddemexico": {
//             "hex": "#F77E1C",
//             "title": "Metro de la Ciudad de México",
//             "slug": "metrodelaciudaddemexico"
//         },
//         "metrodemadrid": {
//             "hex": "#255E9C",
//             "title": "Metro de Madrid",
//             "slug": "metrodemadrid"
//         },
//         "metrodeparis": {
//             "hex": "#003E95",
//             "title": "Métro de Paris",
//             "slug": "metrodeparis"
//         },
//         "mewe": {
//             "hex": "#17377F",
//             "title": "MeWe",
//             "slug": "mewe"
//         },
//         "mg": {
//             "hex": "#FF0000",
//             "title": "MG",
//             "slug": "mg"
//         },
//         "microeditor": {
//             "hex": "#2E3192",
//             "title": "Micro Editor",
//             "slug": "microeditor"
//         },
//         "microbit": {
//             "hex": "#00ED00",
//             "title": "micro:bit",
//             "slug": "microbit"
//         },
//         "microdotblog": {
//             "hex": "#FF8800",
//             "title": "Micro.blog",
//             "slug": "microdotblog"
//         },
//         "micropython": {
//             "hex": "#2B2728",
//             "title": "MicroPython",
//             "slug": "micropython"
//         },
//         "microstation": {
//             "hex": "#62BB47",
//             "title": "Microstation",
//             "slug": "microstation"
//         },
//         "microstrategy": {
//             "hex": "#D9232E",
//             "title": "MicroStrategy",
//             "slug": "microstrategy"
//         },
//         "midi": {
//             "hex": "#000000",
//             "title": "MIDI",
//             "slug": "midi"
//         },
//         "migadu": {
//             "hex": "#0043CE",
//             "title": "Migadu",
//             "slug": "migadu"
//         },
//         "mihoyo": {
//             "hex": "#4EA4DD",
//             "title": "miHoYo",
//             "slug": "mihoyo"
//         },
//         "mikrotik": {
//             "hex": "#293239",
//             "title": "Mikrotik",
//             "slug": "mikrotik"
//         },
//         "milanote": {
//             "hex": "#31303A",
//             "title": "Milanote",
//             "slug": "milanote"
//         },
//         "milvus": {
//             "hex": "#00A1EA",
//             "title": "Milvus",
//             "slug": "milvus"
//         },
//         "minds": {
//             "hex": "#FED12F",
//             "title": "Minds",
//             "slug": "minds"
//         },
//         "minetest": {
//             "hex": "#53AC56",
//             "title": "Minetest",
//             "slug": "minetest"
//         },
//         "mingww64": {
//             "hex": "#000000",
//             "title": "MinGW-w64",
//             "slug": "mingww64"
//         },
//         "mini": {
//             "hex": "#000000",
//             "title": "Mini",
//             "slug": "mini"
//         },
//         "minio": {
//             "hex": "#C72E49",
//             "title": "MinIO",
//             "slug": "minio"
//         },
//         "mintlify": {
//             "hex": "#18E299",
//             "title": "Mintlify",
//             "slug": "mintlify"
//         },
//         "minutemailer": {
//             "hex": "#30B980",
//             "title": "Minutemailer",
//             "slug": "minutemailer"
//         },
//         "miraheze": {
//             "hex": "#FFFC00",
//             "title": "Miraheze",
//             "slug": "miraheze"
//         },
//         "miro": {
//             "hex": "#050038",
//             "title": "Miro",
//             "slug": "miro"
//         },
//         "misskey": {
//             "hex": "#A1CA03",
//             "title": "Misskey",
//             "slug": "misskey"
//         },
//         "mitsubishi": {
//             "hex": "#E60012",
//             "title": "Mitsubishi",
//             "slug": "mitsubishi"
//         },
//         "mix": {
//             "hex": "#FF8126",
//             "title": "Mix",
//             "slug": "mix"
//         },
//         "mixcloud": {
//             "hex": "#5000FF",
//             "title": "Mixcloud",
//             "slug": "mixcloud"
//         },
//         "mixpanel": {
//             "hex": "#7856FF",
//             "title": "Mixpanel",
//             "slug": "mixpanel"
//         },
//         "mlb": {
//             "hex": "#041E42",
//             "title": "MLB",
//             "slug": "mlb"
//         },
//         "mlflow": {
//             "hex": "#0194E2",
//             "title": "MLflow",
//             "slug": "mlflow"
//         },
//         "mobx": {
//             "hex": "#FF9955",
//             "title": "MobX",
//             "slug": "mobx"
//         },
//         "mobxstatetree": {
//             "hex": "#FF7102",
//             "title": "MobX-State-Tree",
//             "slug": "mobxstatetree"
//         },
//         "mocha": {
//             "hex": "#8D6748",
//             "title": "Mocha",
//             "slug": "mocha"
//         },
//         "mockserviceworker": {
//             "hex": "#FF6A33",
//             "title": "Mock Service Worker",
//             "slug": "mockserviceworker"
//         },
//         "modal": {
//             "hex": "#7FEE64",
//             "title": "Modal",
//             "slug": "modal"
//         },
//         "modin": {
//             "hex": "#001729",
//             "title": "Modin",
//             "slug": "modin"
//         },
//         "modrinth": {
//             "hex": "#00AF5C",
//             "title": "Modrinth",
//             "slug": "modrinth"
//         },
//         "modx": {
//             "hex": "#102C53",
//             "title": "MODX",
//             "slug": "modx"
//         },
//         "mojeek": {
//             "hex": "#7AB93C",
//             "title": "Mojeek",
//             "slug": "mojeek"
//         },
//         "moleculer": {
//             "hex": "#3CAFCE",
//             "title": "Moleculer",
//             "slug": "moleculer"
//         },
//         "momenteo": {
//             "hex": "#5A6AB1",
//             "title": "Momenteo",
//             "slug": "momenteo"
//         },
//         "monero": {
//             "hex": "#FF6600",
//             "title": "Monero",
//             "slug": "monero"
//         },
//         "moneygram": {
//             "hex": "#DA291C",
//             "title": "MoneyGram",
//             "slug": "moneygram"
//         },
//         "mongodb": {
//             "hex": "#47A248",
//             "title": "MongoDB",
//             "slug": "mongodb"
//         },
//         "mongoose": {
//             "hex": "#F04D35",
//             "title": "Mongoose",
//             "slug": "mongoose"
//         },
//         "monica": {
//             "hex": "#2C2B29",
//             "title": "Monica",
//             "slug": "monica"
//         },
//         "monkeytie": {
//             "hex": "#1A52C2",
//             "title": "monkey tie",
//             "slug": "monkeytie"
//         },
//         "monkeytype": {
//             "hex": "#E2B714",
//             "title": "Monkeytype",
//             "slug": "monkeytype"
//         },
//         "monogame": {
//             "hex": "#E73C00",
//             "title": "MonoGame",
//             "slug": "monogame"
//         },
//         "monoprix": {
//             "hex": "#FB1911",
//             "title": "Monoprix",
//             "slug": "monoprix"
//         },
//         "monster": {
//             "hex": "#6D4C9F",
//             "title": "Monster",
//             "slug": "monster"
//         },
//         "monzo": {
//             "hex": "#14233C",
//             "title": "Monzo",
//             "slug": "monzo"
//         },
//         "moo": {
//             "hex": "#00945E",
//             "title": "Moo",
//             "slug": "moo"
//         },
//         "moodle": {
//             "hex": "#F98012",
//             "title": "Moodle",
//             "slug": "moodle"
//         },
//         "moonrepo": {
//             "hex": "#6F53F3",
//             "title": "Moonrepo",
//             "slug": "moonrepo"
//         },
//         "moq": {
//             "hex": "#F4BE00",
//             "title": "Moq",
//             "slug": "moq"
//         },
//         "moqups": {
//             "hex": "#006BE5",
//             "title": "Moqups",
//             "slug": "moqups"
//         },
//         "morrisons": {
//             "hex": "#007531",
//             "title": "Morrisons",
//             "slug": "morrisons"
//         },
//         "moscowmetro": {
//             "hex": "#D9232E",
//             "title": "Moscow Metro",
//             "slug": "moscowmetro"
//         },
//         "motorola": {
//             "hex": "#E1140A",
//             "title": "Motorola",
//             "slug": "motorola"
//         },
//         "movistar": {
//             "hex": "#019DF4",
//             "title": "Movistar",
//             "slug": "movistar"
//         },
//         "mozilla": {
//             "hex": "#000000",
//             "title": "Mozilla",
//             "slug": "mozilla"
//         },
//         "mpv": {
//             "hex": "#691F69",
//             "title": "mpv",
//             "slug": "mpv"
//         },
//         "mqtt": {
//             "hex": "#660066",
//             "title": "MQTT",
//             "slug": "mqtt"
//         },
//         "msi": {
//             "hex": "#FF0000",
//             "title": "MSI",
//             "slug": "msi"
//         },
//         "msibusiness": {
//             "hex": "#9A8555",
//             "title": "MSI Business",
//             "slug": "msibusiness"
//         },
//         "mta": {
//             "hex": "#0039A6",
//             "title": "MTA",
//             "slug": "mta"
//         },
//         "mtr": {
//             "hex": "#AC2E45",
//             "title": "MTR",
//             "slug": "mtr"
//         },
//         "mubi": {
//             "hex": "#000000",
//             "title": "MUBI",
//             "slug": "mubi"
//         },
//         "mui": {
//             "hex": "#007FFF",
//             "title": "MUI",
//             "slug": "mui"
//         },
//         "mulesoft": {
//             "hex": "#00A0DF",
//             "title": "Mulesoft",
//             "slug": "mulesoft"
//         },
//         "muller": {
//             "hex": "#F46519",
//             "title": "Müller",
//             "slug": "muller"
//         },
//         "mullvad": {
//             "hex": "#294D73",
//             "title": "Mullvad",
//             "slug": "mullvad"
//         },
//         "multisim": {
//             "hex": "#57B685",
//             "title": "Multisim",
//             "slug": "multisim"
//         },
//         "mumble": {
//             "hex": "#000000",
//             "title": "Mumble",
//             "slug": "mumble"
//         },
//         "muo": {
//             "hex": "#C60D0D",
//             "title": "MUO",
//             "slug": "muo"
//         },
//         "mural": {
//             "hex": "#FF4B4B",
//             "title": "Mural",
//             "slug": "mural"
//         },
//         "musescore": {
//             "hex": "#1A70B8",
//             "title": "MuseScore",
//             "slug": "musescore"
//         },
//         "musicbrainz": {
//             "hex": "#BA478F",
//             "title": "MusicBrainz",
//             "slug": "musicbrainz"
//         },
//         "mxlinux": {
//             "hex": "#000000",
//             "title": "MX Linux",
//             "slug": "mxlinux"
//         },
//         "myanimelist": {
//             "hex": "#2E51A2",
//             "title": "MyAnimeList",
//             "slug": "myanimelist"
//         },
//         "myget": {
//             "hex": "#0C79CE",
//             "title": "MyGet",
//             "slug": "myget"
//         },
//         "myob": {
//             "hex": "#6100A5",
//             "title": "MYOB",
//             "slug": "myob"
//         },
//         "myspace": {
//             "hex": "#030303",
//             "title": "Myspace",
//             "slug": "myspace"
//         },
//         "mysql": {
//             "hex": "#4479A1",
//             "title": "MySQL",
//             "slug": "mysql"
//         },
//         "n26": {
//             "hex": "#48AC98",
//             "title": "N26",
//             "slug": "n26"
//         },
//         "n8n": {
//             "hex": "#EA4B71",
//             "title": "n8n",
//             "slug": "n8n"
//         },
//         "namebase": {
//             "hex": "#0068FF",
//             "title": "Namebase",
//             "slug": "namebase"
//         },
//         "namecheap": {
//             "hex": "#DE3723",
//             "title": "Namecheap",
//             "slug": "namecheap"
//         },
//         "namemc": {
//             "hex": "#12161A",
//             "title": "NameMC",
//             "slug": "namemc"
//         },
//         "namesilo": {
//             "hex": "#031B4E",
//             "title": "NameSilo",
//             "slug": "namesilo"
//         },
//         "namuwiki": {
//             "hex": "#008275",
//             "title": "Namu Wiki",
//             "slug": "namuwiki"
//         },
//         "nano": {
//             "hex": "#4A90E2",
//             "title": "Nano",
//             "slug": "nano"
//         },
//         "nanostores": {
//             "hex": "#000000",
//             "title": "Nano Stores",
//             "slug": "nanostores"
//         },
//         "napster": {
//             "hex": "#2259FF",
//             "title": "Napster",
//             "slug": "napster"
//         },
//         "nasa": {
//             "hex": "#E03C31",
//             "title": "NASA",
//             "slug": "nasa"
//         },
//         "nationalgrid": {
//             "hex": "#00148C",
//             "title": "National Grid",
//             "slug": "nationalgrid"
//         },
//         "nationalrail": {
//             "hex": "#003366",
//             "title": "National Rail",
//             "slug": "nationalrail"
//         },
//         "nativescript": {
//             "hex": "#65ADF1",
//             "title": "NativeScript",
//             "slug": "nativescript"
//         },
//         "natsdotio": {
//             "hex": "#27AAE1",
//             "title": "NATS.io",
//             "slug": "natsdotio"
//         },
//         "naver": {
//             "hex": "#03C75A",
//             "title": "Naver",
//             "slug": "naver"
//         },
//         "nba": {
//             "hex": "#253B73",
//             "title": "NBA",
//             "slug": "nba"
//         },
//         "nbb": {
//             "hex": "#FF7100",
//             "title": "NBB",
//             "slug": "nbb"
//         },
//         "nbc": {
//             "hex": "#222222",
//             "title": "NBC",
//             "slug": "nbc"
//         },
//         "ndr": {
//             "hex": "#0C1754",
//             "title": "NDR",
//             "slug": "ndr"
//         },
//         "near": {
//             "hex": "#000000",
//             "title": "NEAR",
//             "slug": "near"
//         },
//         "nebula": {
//             "hex": "#2CADFE",
//             "title": "Nebula",
//             "slug": "nebula"
//         },
//         "nec": {
//             "hex": "#1414A0",
//             "title": "NEC",
//             "slug": "nec"
//         },
//         "neo4j": {
//             "hex": "#4581C3",
//             "title": "Neo4j",
//             "slug": "neo4j"
//         },
//         "neovim": {
//             "hex": "#57A143",
//             "title": "Neovim",
//             "slug": "neovim"
//         },
//         "neptune": {
//             "hex": "#5B69C2",
//             "title": "Neptune",
//             "slug": "neptune"
//         },
//         "nestjs": {
//             "hex": "#E0234E",
//             "title": "NestJS",
//             "slug": "nestjs"
//         },
//         "netapp": {
//             "hex": "#0067C5",
//             "title": "NetApp",
//             "slug": "netapp"
//         },
//         "netbsd": {
//             "hex": "#FF6600",
//             "title": "NetBSD",
//             "slug": "netbsd"
//         },
//         "netcup": {
//             "hex": "#056473",
//             "title": "netcup",
//             "slug": "netcup"
//         },
//         "netdata": {
//             "hex": "#00AB44",
//             "title": "Netdata",
//             "slug": "netdata"
//         },
//         "neteasecloudmusic": {
//             "hex": "#D43C33",
//             "title": "NetEase Cloud Music",
//             "slug": "neteasecloudmusic"
//         },
//         "netflix": {
//             "hex": "#E50914",
//             "title": "Netflix",
//             "slug": "netflix"
//         },
//         "netgear": {
//             "hex": "#2C262D",
//             "title": "NETGEAR",
//             "slug": "netgear"
//         },
//         "netlify": {
//             "hex": "#00C7B7",
//             "title": "Netlify",
//             "slug": "netlify"
//         },
//         "nette": {
//             "hex": "#3484D2",
//             "title": "Nette",
//             "slug": "nette"
//         },
//         "netto": {
//             "hex": "#FFE500",
//             "title": "Netto",
//             "slug": "netto"
//         },
//         "neutralinojs": {
//             "hex": "#F89901",
//             "title": "Neutralinojs",
//             "slug": "neutralinojs"
//         },
//         "newbalance": {
//             "hex": "#CF0A2C",
//             "title": "New Balance",
//             "slug": "newbalance"
//         },
//         "newjapanprowrestling": {
//             "hex": "#FF160B",
//             "title": "New Japan Pro-Wrestling",
//             "slug": "newjapanprowrestling"
//         },
//         "newrelic": {
//             "hex": "#1CE783",
//             "title": "New Relic",
//             "slug": "newrelic"
//         },
//         "newyorktimes": {
//             "hex": "#000000",
//             "title": "New York Times",
//             "slug": "newyorktimes"
//         },
//         "newegg": {
//             "hex": "#E05E00",
//             "title": "Newegg",
//             "slug": "newegg"
//         },
//         "nexon": {
//             "hex": "#000000",
//             "title": "Nexon",
//             "slug": "nexon"
//         },
//         "nextdotjs": {
//             "hex": "#000000",
//             "title": "Next.js",
//             "slug": "nextdotjs"
//         },
//         "nextbilliondotai": {
//             "hex": "#8D5A9E",
//             "title": "NextBillion.ai",
//             "slug": "nextbilliondotai"
//         },
//         "nextcloud": {
//             "hex": "#0082C9",
//             "title": "Nextcloud",
//             "slug": "nextcloud"
//         },
//         "nextdns": {
//             "hex": "#007BFF",
//             "title": "NextDNS",
//             "slug": "nextdns"
//         },
//         "nextdoor": {
//             "hex": "#8ED500",
//             "title": "Nextdoor",
//             "slug": "nextdoor"
//         },
//         "nextflow": {
//             "hex": "#0DC09D",
//             "title": "Nextflow",
//             "slug": "nextflow"
//         },
//         "nextra": {
//             "hex": "#000000",
//             "title": "Nextra",
//             "slug": "nextra"
//         },
//         "nextui": {
//             "hex": "#000000",
//             "title": "NextUI",
//             "slug": "nextui"
//         },
//         "nexusmods": {
//             "hex": "#E6832B",
//             "title": "Nexus Mods",
//             "slug": "nexusmods"
//         },
//         "nfc": {
//             "hex": "#002E5F",
//             "title": "NFC",
//             "slug": "nfc"
//         },
//         "nginx": {
//             "hex": "#009639",
//             "title": "NGINX",
//             "slug": "nginx"
//         },
//         "nginxproxymanager": {
//             "hex": "#F15833",
//             "title": "Nginx Proxy Manager",
//             "slug": "nginxproxymanager"
//         },
//         "ngrok": {
//             "hex": "#1F1E37",
//             "title": "ngrok",
//             "slug": "ngrok"
//         },
//         "ngrx": {
//             "hex": "#BA2BD2",
//             "title": "NgRx",
//             "slug": "ngrx"
//         },
//         "nhl": {
//             "hex": "#000000",
//             "title": "NHL",
//             "slug": "nhl"
//         },
//         "nicehash": {
//             "hex": "#FBC342",
//             "title": "NiceHash",
//             "slug": "nicehash"
//         },
//         "niconico": {
//             "hex": "#231815",
//             "title": "niconico",
//             "slug": "niconico"
//         },
//         "nike": {
//             "hex": "#111111",
//             "title": "Nike",
//             "slug": "nike"
//         },
//         "nikon": {
//             "hex": "#FFE100",
//             "title": "Nikon",
//             "slug": "nikon"
//         },
//         "nim": {
//             "hex": "#FFE953",
//             "title": "Nim",
//             "slug": "nim"
//         },
//         "nissan": {
//             "hex": "#C3002F",
//             "title": "Nissan",
//             "slug": "nissan"
//         },
//         "nixos": {
//             "hex": "#5277C3",
//             "title": "NixOS",
//             "slug": "nixos"
//         },
//         "nodered": {
//             "hex": "#8F0000",
//             "title": "Node-RED",
//             "slug": "nodered"
//         },
//         "nodedotjs": {
//             "hex": "#5FA04E",
//             "title": "Node.js",
//             "slug": "nodedotjs"
//         },
//         "nodemon": {
//             "hex": "#76D04B",
//             "title": "Nodemon",
//             "slug": "nodemon"
//         },
//         "nokia": {
//             "hex": "#005AFF",
//             "title": "Nokia",
//             "slug": "nokia"
//         },
//         "nomad": {
//             "hex": "#00CA8E",
//             "title": "Nomad",
//             "slug": "nomad"
//         },
//         "norco": {
//             "hex": "#00FF00",
//             "title": "Norco",
//             "slug": "norco"
//         },
//         "nordicsemiconductor": {
//             "hex": "#00A9CE",
//             "title": "Nordic Semiconductor",
//             "slug": "nordicsemiconductor"
//         },
//         "nordvpn": {
//             "hex": "#4687FF",
//             "title": "NordVPN",
//             "slug": "nordvpn"
//         },
//         "normalizedotcss": {
//             "hex": "#E3695F",
//             "title": "Normalize.css",
//             "slug": "normalizedotcss"
//         },
//         "norton": {
//             "hex": "#FFE01A",
//             "title": "Norton",
//             "slug": "norton"
//         },
//         "norwegian": {
//             "hex": "#D81939",
//             "title": "Norwegian",
//             "slug": "norwegian"
//         },
//         "notepadplusplus": {
//             "hex": "#90E59A",
//             "title": "Notepad++",
//             "slug": "notepadplusplus"
//         },
//         "notion": {
//             "hex": "#000000",
//             "title": "Notion",
//             "slug": "notion"
//         },
//         "notist": {
//             "hex": "#333333",
//             "title": "Notist",
//             "slug": "notist"
//         },
//         "nounproject": {
//             "hex": "#000000",
//             "title": "Noun Project",
//             "slug": "nounproject"
//         },
//         "novu": {
//             "hex": "#000000",
//             "title": "Novu",
//             "slug": "novu"
//         },
//         "now": {
//             "hex": "#001211",
//             "title": "NOW",
//             "slug": "now"
//         },
//         "npm": {
//             "hex": "#CB3837",
//             "title": "npm",
//             "slug": "npm"
//         },
//         "nrwl": {
//             "hex": "#96D7E8",
//             "title": "Nrwl",
//             "slug": "nrwl"
//         },
//         "nsis": {
//             "hex": "#01B0F0",
//             "title": "NSIS",
//             "slug": "nsis"
//         },
//         "ntfy": {
//             "hex": "#317F6F",
//             "title": "ntfy",
//             "slug": "ntfy"
//         },
//         "nubank": {
//             "hex": "#820AD1",
//             "title": "Nubank",
//             "slug": "nubank"
//         },
//         "nucleo": {
//             "hex": "#252B2D",
//             "title": "Nucleo",
//             "slug": "nucleo"
//         },
//         "nuget": {
//             "hex": "#004880",
//             "title": "NuGet",
//             "slug": "nuget"
//         },
//         "nuke": {
//             "hex": "#000000",
//             "title": "Nuke",
//             "slug": "nuke"
//         },
//         "numba": {
//             "hex": "#00A3E0",
//             "title": "Numba",
//             "slug": "numba"
//         },
//         "numpy": {
//             "hex": "#013243",
//             "title": "NumPy",
//             "slug": "numpy"
//         },
//         "nunjucks": {
//             "hex": "#1C4913",
//             "title": "Nunjucks",
//             "slug": "nunjucks"
//         },
//         "nushell": {
//             "hex": "#4E9A06",
//             "title": "Nushell",
//             "slug": "nushell"
//         },
//         "nutanix": {
//             "hex": "#024DA1",
//             "title": "Nutanix",
//             "slug": "nutanix"
//         },
//         "nuxt": {
//             "hex": "#00DC82",
//             "title": "Nuxt",
//             "slug": "nuxt"
//         },
//         "nvidia": {
//             "hex": "#76B900",
//             "title": "NVIDIA",
//             "slug": "nvidia"
//         },
//         "nvm": {
//             "hex": "#F4DD4B",
//             "title": "nvm",
//             "slug": "nvm"
//         },
//         "nx": {
//             "hex": "#143055",
//             "title": "Nx",
//             "slug": "nx"
//         },
//         "nxp": {
//             "hex": "#000000",
//             "title": "NXP",
//             "slug": "nxp"
//         },
//         "nzxt": {
//             "hex": "#000000",
//             "title": "NZXT",
//             "slug": "nzxt"
//         },
//         "oreilly": {
//             "hex": "#D3002D",
//             "title": "O'Reilly",
//             "slug": "oreilly"
//         },
//         "o2": {
//             "hex": "#0050FF",
//             "title": "O2",
//             "slug": "o2"
//         },
//         "obb": {
//             "hex": "#E40327",
//             "title": "ÖBB",
//             "slug": "obb"
//         },
//         "obsstudio": {
//             "hex": "#302E31",
//             "title": "OBS Studio",
//             "slug": "obsstudio"
//         },
//         "observable": {
//             "hex": "#353E58",
//             "title": "Observable",
//             "slug": "observable"
//         },
//         "obsidian": {
//             "hex": "#7C3AED",
//             "title": "Obsidian",
//             "slug": "obsidian"
//         },
//         "obtainium": {
//             "hex": "#D2BCFD",
//             "title": "Obtainium",
//             "slug": "obtainium"
//         },
//         "ocaml": {
//             "hex": "#EC6813",
//             "title": "OCaml",
//             "slug": "ocaml"
//         },
//         "oclc": {
//             "hex": "#007DBA",
//             "title": "OCLC",
//             "slug": "oclc"
//         },
//         "oclif": {
//             "hex": "#000000",
//             "title": "oclif",
//             "slug": "oclif"
//         },
//         "octanerender": {
//             "hex": "#000000",
//             "title": "Octane Render",
//             "slug": "octanerender"
//         },
//         "octave": {
//             "hex": "#0790C0",
//             "title": "Octave",
//             "slug": "octave"
//         },
//         "octobercms": {
//             "hex": "#DB6A26",
//             "title": "October CMS",
//             "slug": "octobercms"
//         },
//         "octoprint": {
//             "hex": "#13C100",
//             "title": "OctoPrint",
//             "slug": "octoprint"
//         },
//         "octopusdeploy": {
//             "hex": "#2F93E0",
//             "title": "Octopus Deploy",
//             "slug": "octopusdeploy"
//         },
//         "oculus": {
//             "hex": "#1C1E20",
//             "title": "Oculus",
//             "slug": "oculus"
//         },
//         "odin": {
//             "hex": "#3882D2",
//             "title": "Odin",
//             "slug": "odin"
//         },
//         "odnoklassniki": {
//             "hex": "#EE8208",
//             "title": "Odnoklassniki",
//             "slug": "odnoklassniki"
//         },
//         "odoo": {
//             "hex": "#714B67",
//             "title": "Odoo",
//             "slug": "odoo"
//         },
//         "odysee": {
//             "hex": "#EF1970",
//             "title": "Odysee",
//             "slug": "odysee"
//         },
//         "ohdear": {
//             "hex": "#FF3900",
//             "title": "Oh Dear",
//             "slug": "ohdear"
//         },
//         "okcupid": {
//             "hex": "#0500BE",
//             "title": "okcupid",
//             "slug": "okcupid"
//         },
//         "okta": {
//             "hex": "#007DC1",
//             "title": "Okta",
//             "slug": "okta"
//         },
//         "okx": {
//             "hex": "#000000",
//             "title": "OKX",
//             "slug": "okx"
//         },
//         "ollama": {
//             "hex": "#000000",
//             "title": "Ollama",
//             "slug": "ollama"
//         },
//         "omadacloud": {
//             "hex": "#10C1D0",
//             "title": "Omada Cloud",
//             "slug": "omadacloud"
//         },
//         "oneplus": {
//             "hex": "#F5010C",
//             "title": "OnePlus",
//             "slug": "oneplus"
//         },
//         "onlyfans": {
//             "hex": "#00AFF0",
//             "title": "OnlyFans",
//             "slug": "onlyfans"
//         },
//         "onlyoffice": {
//             "hex": "#444444",
//             "title": "ONLYOFFICE",
//             "slug": "onlyoffice"
//         },
//         "onnx": {
//             "hex": "#005CED",
//             "title": "ONNX",
//             "slug": "onnx"
//         },
//         "onstar": {
//             "hex": "#003D7D",
//             "title": "OnStar",
//             "slug": "onstar"
//         },
//         "opel": {
//             "hex": "#F7FF14",
//             "title": "Opel",
//             "slug": "opel"
//         },
//         "openaccess": {
//             "hex": "#F68212",
//             "title": "Open Access",
//             "slug": "openaccess"
//         },
//         "openbadges": {
//             "hex": "#073B5A",
//             "title": "Open Badges",
//             "slug": "openbadges"
//         },
//         "openbugbounty": {
//             "hex": "#F67909",
//             "title": "Open Bug Bounty",
//             "slug": "openbugbounty"
//         },
//         "opencollective": {
//             "hex": "#7FADF2",
//             "title": "Open Collective",
//             "slug": "opencollective"
//         },
//         "opencontainersinitiative": {
//             "hex": "#262261",
//             "title": "Open Containers Initiative",
//             "slug": "opencontainersinitiative"
//         },
//         "opensourcehardware": {
//             "hex": "#0099B0",
//             "title": "Open Source Hardware",
//             "slug": "opensourcehardware"
//         },
//         "opensourceinitiative": {
//             "hex": "#3DA639",
//             "title": "Open Source Initiative",
//             "slug": "opensourceinitiative"
//         },
//         "openai": {
//             "hex": "#412991",
//             "title": "OpenAI",
//             "slug": "openai"
//         },
//         "openaigym": {
//             "hex": "#0081A5",
//             "title": "OpenAI Gym",
//             "slug": "openaigym"
//         },
//         "openapiinitiative": {
//             "hex": "#6BA539",
//             "title": "OpenAPI Initiative",
//             "slug": "openapiinitiative"
//         },
//         "openbsd": {
//             "hex": "#F2CA30",
//             "title": "OpenBSD",
//             "slug": "openbsd"
//         },
//         "opencv": {
//             "hex": "#5C3EE8",
//             "title": "OpenCV",
//             "slug": "opencv"
//         },
//         "openfaas": {
//             "hex": "#3B5EE9",
//             "title": "OpenFaaS",
//             "slug": "openfaas"
//         },
//         "opengl": {
//             "hex": "#5586A4",
//             "title": "OpenGL",
//             "slug": "opengl"
//         },
//         "openhab": {
//             "hex": "#E64A19",
//             "title": "openHAB",
//             "slug": "openhab"
//         },
//         "openid": {
//             "hex": "#F78C40",
//             "title": "OpenID",
//             "slug": "openid"
//         },
//         "openjdk": {
//             "hex": "#000000",
//             "title": "OpenJDK",
//             "slug": "openjdk"
//         },
//         "openjsfoundation": {
//             "hex": "#0075C9",
//             "title": "OpenJS Foundation",
//             "slug": "openjsfoundation"
//         },
//         "openlayers": {
//             "hex": "#1F6B75",
//             "title": "Openlayers",
//             "slug": "openlayers"
//         },
//         "openmediavault": {
//             "hex": "#5DACDF",
//             "title": "openmediavault",
//             "slug": "openmediavault"
//         },
//         "openmined": {
//             "hex": "#ED986C",
//             "title": "OpenMined",
//             "slug": "openmined"
//         },
//         "opennebula": {
//             "hex": "#0097C2",
//             "title": "OpenNebula",
//             "slug": "opennebula"
//         },
//         "openproject": {
//             "hex": "#0770B8",
//             "title": "OpenProject",
//             "slug": "openproject"
//         },
//         "openscad": {
//             "hex": "#F9D72C",
//             "title": "OpenSCAD",
//             "slug": "openscad"
//         },
//         "opensea": {
//             "hex": "#2081E2",
//             "title": "OpenSea",
//             "slug": "opensea"
//         },
//         "opensearch": {
//             "hex": "#005EB8",
//             "title": "OpenSearch",
//             "slug": "opensearch"
//         },
//         "openssl": {
//             "hex": "#721412",
//             "title": "OpenSSL",
//             "slug": "openssl"
//         },
//         "openstack": {
//             "hex": "#ED1944",
//             "title": "OpenStack",
//             "slug": "openstack"
//         },
//         "openstreetmap": {
//             "hex": "#7EBC6F",
//             "title": "OpenStreetMap",
//             "slug": "openstreetmap"
//         },
//         "opensuse": {
//             "hex": "#73BA25",
//             "title": "openSUSE",
//             "slug": "opensuse"
//         },
//         "opentelemetry": {
//             "hex": "#000000",
//             "title": "OpenTelemetry",
//             "slug": "opentelemetry"
//         },
//         "opentext": {
//             "hex": "#000000",
//             "title": "OpenText",
//             "slug": "opentext"
//         },
//         "opentofu": {
//             "hex": "#FFDA18",
//             "title": "OpenTofu",
//             "slug": "opentofu"
//         },
//         "openverse": {
//             "hex": "#FFE033",
//             "title": "Openverse",
//             "slug": "openverse"
//         },
//         "openvpn": {
//             "hex": "#EA7E20",
//             "title": "OpenVPN",
//             "slug": "openvpn"
//         },
//         "openwrt": {
//             "hex": "#00B5E2",
//             "title": "OpenWrt",
//             "slug": "openwrt"
//         },
//         "openzeppelin": {
//             "hex": "#4E5EE4",
//             "title": "OpenZeppelin",
//             "slug": "openzeppelin"
//         },
//         "openzfs": {
//             "hex": "#2A667F",
//             "title": "OpenZFS",
//             "slug": "openzfs"
//         },
//         "opera": {
//             "hex": "#FF1B2D",
//             "title": "Opera",
//             "slug": "opera"
//         },
//         "operagx": {
//             "hex": "#EE2950",
//             "title": "Opera GX",
//             "slug": "operagx"
//         },
//         "opnsense": {
//             "hex": "#D94F00",
//             "title": "OPNSense",
//             "slug": "opnsense"
//         },
//         "oppo": {
//             "hex": "#2D683D",
//             "title": "OPPO",
//             "slug": "oppo"
//         },
//         "opsgenie": {
//             "hex": "#172B4D",
//             "title": "Opsgenie",
//             "slug": "opsgenie"
//         },
//         "opslevel": {
//             "hex": "#0A53E0",
//             "title": "OpsLevel",
//             "slug": "opslevel"
//         },
//         "optimism": {
//             "hex": "#FF0420",
//             "title": "Optimism",
//             "slug": "optimism"
//         },
//         "orange": {
//             "hex": "#FF7900",
//             "title": "Orange",
//             "slug": "orange"
//         },
//         "orcid": {
//             "hex": "#A6CE39",
//             "title": "ORCID",
//             "slug": "orcid"
//         },
//         "org": {
//             "hex": "#77AA99",
//             "title": "Org",
//             "slug": "org"
//         },
//         "organicmaps": {
//             "hex": "#006C35",
//             "title": "Organic Maps",
//             "slug": "organicmaps"
//         },
//         "origin": {
//             "hex": "#F56C2D",
//             "title": "Origin",
//             "slug": "origin"
//         },
//         "osano": {
//             "hex": "#7764FA",
//             "title": "Osano",
//             "slug": "osano"
//         },
//         "osf": {
//             "hex": "#2CB9F1",
//             "title": "OSF",
//             "slug": "osf"
//         },
//         "osgeo": {
//             "hex": "#4CB05B",
//             "title": "OSGeo",
//             "slug": "osgeo"
//         },
//         "oshkosh": {
//             "hex": "#E6830F",
//             "title": "Oshkosh",
//             "slug": "oshkosh"
//         },
//         "osmc": {
//             "hex": "#17394A",
//             "title": "OSMC",
//             "slug": "osmc"
//         },
//         "osu": {
//             "hex": "#FF66AA",
//             "title": "osu!",
//             "slug": "osu"
//         },
//         "otto": {
//             "hex": "#D4021D",
//             "title": "Otto",
//             "slug": "otto"
//         },
//         "outline": {
//             "hex": "#000000",
//             "title": "Outline",
//             "slug": "outline"
//         },
//         "overcast": {
//             "hex": "#FC7E0F",
//             "title": "Overcast",
//             "slug": "overcast"
//         },
//         "overleaf": {
//             "hex": "#47A141",
//             "title": "Overleaf",
//             "slug": "overleaf"
//         },
//         "ovh": {
//             "hex": "#123F6D",
//             "title": "OVH",
//             "slug": "ovh"
//         },
//         "owasp": {
//             "hex": "#000000",
//             "title": "OWASP",
//             "slug": "owasp"
//         },
//         "owaspdependencycheck": {
//             "hex": "#F78D0A",
//             "title": "OWASP Dependency-Check",
//             "slug": "owaspdependencycheck"
//         },
//         "owncloud": {
//             "hex": "#041E42",
//             "title": "ownCloud",
//             "slug": "owncloud"
//         },
//         "oxygen": {
//             "hex": "#3A209E",
//             "title": "Oxygen",
//             "slug": "oxygen"
//         },
//         "oyo": {
//             "hex": "#EE2E24",
//             "title": "OYO",
//             "slug": "oyo"
//         },
//         "p5dotjs": {
//             "hex": "#ED225D",
//             "title": "p5.js",
//             "slug": "p5dotjs"
//         },
//         "packagist": {
//             "hex": "#F28D1A",
//             "title": "Packagist",
//             "slug": "packagist"
//         },
//         "packer": {
//             "hex": "#02A8EF",
//             "title": "Packer",
//             "slug": "packer"
//         },
//         "packt": {
//             "hex": "#F37143",
//             "title": "Packt",
//             "slug": "packt"
//         },
//         "paddle": {
//             "hex": "#FDDD35",
//             "title": "Paddle",
//             "slug": "paddle"
//         },
//         "paddlepaddle": {
//             "hex": "#0062B0",
//             "title": "PaddlePaddle",
//             "slug": "paddlepaddle"
//         },
//         "paddypower": {
//             "hex": "#004833",
//             "title": "Paddy Power",
//             "slug": "paddypower"
//         },
//         "pagekit": {
//             "hex": "#212121",
//             "title": "Pagekit",
//             "slug": "pagekit"
//         },
//         "pagerduty": {
//             "hex": "#06AC38",
//             "title": "PagerDuty",
//             "slug": "pagerduty"
//         },
//         "pagespeedinsights": {
//             "hex": "#4285F4",
//             "title": "PageSpeed Insights",
//             "slug": "pagespeedinsights"
//         },
//         "pagseguro": {
//             "hex": "#FFC801",
//             "title": "PagSeguro",
//             "slug": "pagseguro"
//         },
//         "palantir": {
//             "hex": "#101113",
//             "title": "Palantir",
//             "slug": "palantir"
//         },
//         "paloaltonetworks": {
//             "hex": "#F04E23",
//             "title": "Palo Alto Networks",
//             "slug": "paloaltonetworks"
//         },
//         "paloaltosoftware": {
//             "hex": "#83DA77",
//             "title": "Palo Alto Software",
//             "slug": "paloaltosoftware"
//         },
//         "panasonic": {
//             "hex": "#0049AB",
//             "title": "Panasonic",
//             "slug": "panasonic"
//         },
//         "pandas": {
//             "hex": "#150458",
//             "title": "pandas",
//             "slug": "pandas"
//         },
//         "pandora": {
//             "hex": "#224099",
//             "title": "Pandora",
//             "slug": "pandora"
//         },
//         "pantheon": {
//             "hex": "#FFDC28",
//             "title": "Pantheon",
//             "slug": "pantheon"
//         },
//         "paperlessngx": {
//             "hex": "#17541F",
//             "title": "Paperless-ngx",
//             "slug": "paperlessngx"
//         },
//         "paperswithcode": {
//             "hex": "#21CBCE",
//             "title": "Papers With Code",
//             "slug": "paperswithcode"
//         },
//         "paperspace": {
//             "hex": "#000000",
//             "title": "Paperspace",
//             "slug": "paperspace"
//         },
//         "paradoxinteractive": {
//             "hex": "#101010",
//             "title": "Paradox Interactive",
//             "slug": "paradoxinteractive"
//         },
//         "paramountplus": {
//             "hex": "#0064FF",
//             "title": "Paramount+",
//             "slug": "paramountplus"
//         },
//         "paritysubstrate": {
//             "hex": "#282828",
//             "title": "Parity Substrate",
//             "slug": "paritysubstrate"
//         },
//         "parrotsecurity": {
//             "hex": "#15E0ED",
//             "title": "Parrot Security",
//             "slug": "parrotsecurity"
//         },
//         "parsedotly": {
//             "hex": "#5BA745",
//             "title": "Parse.ly",
//             "slug": "parsedotly"
//         },
//         "passport": {
//             "hex": "#34E27A",
//             "title": "Passport",
//             "slug": "passport"
//         },
//         "pastebin": {
//             "hex": "#02456C",
//             "title": "Pastebin",
//             "slug": "pastebin"
//         },
//         "patreon": {
//             "hex": "#000000",
//             "title": "Patreon",
//             "slug": "patreon"
//         },
//         "paychex": {
//             "hex": "#004B8D",
//             "title": "Paychex",
//             "slug": "paychex"
//         },
//         "payhip": {
//             "hex": "#5C6AC4",
//             "title": "Payhip",
//             "slug": "payhip"
//         },
//         "payloadcms": {
//             "hex": "#000000",
//             "title": "Payload CMS",
//             "slug": "payloadcms"
//         },
//         "payoneer": {
//             "hex": "#FF4800",
//             "title": "Payoneer",
//             "slug": "payoneer"
//         },
//         "paypal": {
//             "hex": "#003087",
//             "title": "PayPal",
//             "slug": "paypal"
//         },
//         "paytm": {
//             "hex": "#20336B",
//             "title": "Paytm",
//             "slug": "paytm"
//         },
//         "pcgamingwiki": {
//             "hex": "#556DB3",
//             "title": "PCGamingWiki",
//             "slug": "pcgamingwiki"
//         },
//         "pdm": {
//             "hex": "#AC75D7",
//             "title": "PDM",
//             "slug": "pdm"
//         },
//         "pdq": {
//             "hex": "#231F20",
//             "title": "PDQ",
//             "slug": "pdq"
//         },
//         "peakdesign": {
//             "hex": "#1C1B1C",
//             "title": "Peak Design",
//             "slug": "peakdesign"
//         },
//         "pearson": {
//             "hex": "#000000",
//             "title": "Pearson",
//             "slug": "pearson"
//         },
//         "peerlist": {
//             "hex": "#00AA45",
//             "title": "Peerlist",
//             "slug": "peerlist"
//         },
//         "peertube": {
//             "hex": "#F1680D",
//             "title": "PeerTube",
//             "slug": "peertube"
//         },
//         "pegasusairlines": {
//             "hex": "#FDC43E",
//             "title": "Pegasus Airlines",
//             "slug": "pegasusairlines"
//         },
//         "pelican": {
//             "hex": "#14A0C4",
//             "title": "Pelican",
//             "slug": "pelican"
//         },
//         "peloton": {
//             "hex": "#181A1D",
//             "title": "Peloton",
//             "slug": "peloton"
//         },
//         "penny": {
//             "hex": "#CD1414",
//             "title": "Penny",
//             "slug": "penny"
//         },
//         "penpot": {
//             "hex": "#000000",
//             "title": "Penpot",
//             "slug": "penpot"
//         },
//         "percy": {
//             "hex": "#9E66BF",
//             "title": "Percy",
//             "slug": "percy"
//         },
//         "perforce": {
//             "hex": "#404040",
//             "title": "Perforce",
//             "slug": "perforce"
//         },
//         "perl": {
//             "hex": "#39457E",
//             "title": "Perl",
//             "slug": "perl"
//         },
//         "perplexity": {
//             "hex": "#1FB8CD",
//             "title": "Perplexity",
//             "slug": "perplexity"
//         },
//         "persistent": {
//             "hex": "#FD5F07",
//             "title": "Persistent",
//             "slug": "persistent"
//         },
//         "personio": {
//             "hex": "#000000",
//             "title": "Personio",
//             "slug": "personio"
//         },
//         "petsathome": {
//             "hex": "#00AA28",
//             "title": "Pets at Home",
//             "slug": "petsathome"
//         },
//         "peugeot": {
//             "hex": "#000000",
//             "title": "Peugeot",
//             "slug": "peugeot"
//         },
//         "pexels": {
//             "hex": "#05A081",
//             "title": "Pexels",
//             "slug": "pexels"
//         },
//         "pfsense": {
//             "hex": "#212121",
//             "title": "pfSense",
//             "slug": "pfsense"
//         },
//         "phabricator": {
//             "hex": "#4A5F88",
//             "title": "Phabricator",
//             "slug": "phabricator"
//         },
//         "philipshue": {
//             "hex": "#0065D3",
//             "title": "Philips Hue",
//             "slug": "philipshue"
//         },
//         "phoenixframework": {
//             "hex": "#FD4F00",
//             "title": "Phoenix Framework",
//             "slug": "phoenixframework"
//         },
//         "phonepe": {
//             "hex": "#5F259F",
//             "title": "PhonePe",
//             "slug": "phonepe"
//         },
//         "phosphoricons": {
//             "hex": "#3C402B",
//             "title": "Phosphor Icons",
//             "slug": "phosphoricons"
//         },
//         "photobucket": {
//             "hex": "#1C47CB",
//             "title": "Photobucket",
//             "slug": "photobucket"
//         },
//         "photocrowd": {
//             "hex": "#3DAD4B",
//             "title": "Photocrowd",
//             "slug": "photocrowd"
//         },
//         "photon": {
//             "hex": "#004480",
//             "title": "Photon",
//             "slug": "photon"
//         },
//         "photopea": {
//             "hex": "#18A497",
//             "title": "Photopea",
//             "slug": "photopea"
//         },
//         "php": {
//             "hex": "#777BB4",
//             "title": "PHP",
//             "slug": "php"
//         },
//         "phpbb": {
//             "hex": "#009BDF",
//             "title": "phpBB",
//             "slug": "phpbb"
//         },
//         "phpmyadmin": {
//             "hex": "#6C78AF",
//             "title": "phpMyAdmin",
//             "slug": "phpmyadmin"
//         },
//         "phpstorm": {
//             "hex": "#000000",
//             "title": "PhpStorm",
//             "slug": "phpstorm"
//         },
//         "pinetwork": {
//             "hex": "#F4AF47",
//             "title": "Pi Network",
//             "slug": "pinetwork"
//         },
//         "pihole": {
//             "hex": "#96060C",
//             "title": "Pi-hole",
//             "slug": "pihole"
//         },
//         "piaggiogroup": {
//             "hex": "#000000",
//             "title": "Piaggio Group",
//             "slug": "piaggiogroup"
//         },
//         "piapro": {
//             "hex": "#E4007B",
//             "title": "Piapro",
//             "slug": "piapro"
//         },
//         "picardsurgeles": {
//             "hex": "#2D4999",
//             "title": "Picard Surgelés",
//             "slug": "picardsurgeles"
//         },
//         "picartodottv": {
//             "hex": "#1DA456",
//             "title": "Picarto.TV",
//             "slug": "picartodottv"
//         },
//         "picnic": {
//             "hex": "#E1171E",
//             "title": "Picnic",
//             "slug": "picnic"
//         },
//         "picpay": {
//             "hex": "#21C25E",
//             "title": "PicPay",
//             "slug": "picpay"
//         },
//         "picrew": {
//             "hex": "#FFBD16",
//             "title": "Picrew",
//             "slug": "picrew"
//         },
//         "picsart": {
//             "hex": "#C209C1",
//             "title": "Picsart",
//             "slug": "picsart"
//         },
//         "picxy": {
//             "hex": "#2E3192",
//             "title": "Picxy",
//             "slug": "picxy"
//         },
//         "pimcore": {
//             "hex": "#6428B4",
//             "title": "Pimcore",
//             "slug": "pimcore"
//         },
//         "pinboard": {
//             "hex": "#0000FF",
//             "title": "Pinboard",
//             "slug": "pinboard"
//         },
//         "pinescript": {
//             "hex": "#00B453",
//             "title": "Pine Script",
//             "slug": "pinescript"
//         },
//         "pingdom": {
//             "hex": "#FFF000",
//             "title": "Pingdom",
//             "slug": "pingdom"
//         },
//         "pino": {
//             "hex": "#687634",
//             "title": "pino",
//             "slug": "pino"
//         },
//         "pinterest": {
//             "hex": "#BD081C",
//             "title": "Pinterest",
//             "slug": "pinterest"
//         },
//         "pioneerdj": {
//             "hex": "#1A1928",
//             "title": "Pioneer DJ",
//             "slug": "pioneerdj"
//         },
//         "piped": {
//             "hex": "#F84330",
//             "title": "Piped",
//             "slug": "piped"
//         },
//         "pipx": {
//             "hex": "#2CFFAA",
//             "title": "pipx",
//             "slug": "pipx"
//         },
//         "pivotaltracker": {
//             "hex": "#517A9E",
//             "title": "Pivotal Tracker",
//             "slug": "pivotaltracker"
//         },
//         "piwigo": {
//             "hex": "#FF7700",
//             "title": "Piwigo",
//             "slug": "piwigo"
//         },
//         "pix": {
//             "hex": "#77B6A8",
//             "title": "Pix",
//             "slug": "pix"
//         },
//         "pixabay": {
//             "hex": "#2EC66D",
//             "title": "Pixabay",
//             "slug": "pixabay"
//         },
//         "pixelfed": {
//             "hex": "#6366F1",
//             "title": "Pixelfed",
//             "slug": "pixelfed"
//         },
//         "pixiv": {
//             "hex": "#0096FA",
//             "title": "pixiv",
//             "slug": "pixiv"
//         },
//         "pixlr": {
//             "hex": "#3EBBDF",
//             "title": "Pixlr",
//             "slug": "pixlr"
//         },
//         "pkgsrc": {
//             "hex": "#FF6600",
//             "title": "pkgsrc",
//             "slug": "pkgsrc"
//         },
//         "planet": {
//             "hex": "#009DB1",
//             "title": "Planet",
//             "slug": "planet"
//         },
//         "planetscale": {
//             "hex": "#000000",
//             "title": "PlanetScale",
//             "slug": "planetscale"
//         },
//         "plangrid": {
//             "hex": "#0085DE",
//             "title": "PlanGrid",
//             "slug": "plangrid"
//         },
//         "platformdotsh": {
//             "hex": "#1A182A",
//             "title": "Platform.sh",
//             "slug": "platformdotsh"
//         },
//         "platformio": {
//             "hex": "#F5822A",
//             "title": "PlatformIO",
//             "slug": "platformio"
//         },
//         "platzi": {
//             "hex": "#98CA3F",
//             "title": "Platzi",
//             "slug": "platzi"
//         },
//         "plausibleanalytics": {
//             "hex": "#5850EC",
//             "title": "Plausible Analytics",
//             "slug": "plausibleanalytics"
//         },
//         "playcanvas": {
//             "hex": "#E05F2C",
//             "title": "PlayCanvas",
//             "slug": "playcanvas"
//         },
//         "playerfm": {
//             "hex": "#C8122A",
//             "title": "Player FM",
//             "slug": "playerfm"
//         },
//         "playerdotme": {
//             "hex": "#C0379A",
//             "title": "Player.me",
//             "slug": "playerdotme"
//         },
//         "playstation": {
//             "hex": "#0070D1",
//             "title": "PlayStation",
//             "slug": "playstation"
//         },
//         "playstation2": {
//             "hex": "#003791",
//             "title": "PlayStation 2",
//             "slug": "playstation2"
//         },
//         "playstation3": {
//             "hex": "#003791",
//             "title": "PlayStation 3",
//             "slug": "playstation3"
//         },
//         "playstation4": {
//             "hex": "#003791",
//             "title": "PlayStation 4",
//             "slug": "playstation4"
//         },
//         "playstation5": {
//             "hex": "#003791",
//             "title": "PlayStation 5",
//             "slug": "playstation5"
//         },
//         "playstationportable": {
//             "hex": "#003791",
//             "title": "PlayStation Portable",
//             "slug": "playstationportable"
//         },
//         "playstationvita": {
//             "hex": "#003791",
//             "title": "PlayStation Vita",
//             "slug": "playstationvita"
//         },
//         "pleroma": {
//             "hex": "#FBA457",
//             "title": "Pleroma",
//             "slug": "pleroma"
//         },
//         "plesk": {
//             "hex": "#52BBE6",
//             "title": "Plesk",
//             "slug": "plesk"
//         },
//         "plex": {
//             "hex": "#EBAF00",
//             "title": "Plex",
//             "slug": "plex"
//         },
//         "plotly": {
//             "hex": "#3F4F75",
//             "title": "Plotly",
//             "slug": "plotly"
//         },
//         "plume": {
//             "hex": "#7C5CDF",
//             "title": "Plume",
//             "slug": "plume"
//         },
//         "pluralsight": {
//             "hex": "#F15B2A",
//             "title": "Pluralsight",
//             "slug": "pluralsight"
//         },
//         "plurk": {
//             "hex": "#FF574D",
//             "title": "Plurk",
//             "slug": "plurk"
//         },
//         "pluscodes": {
//             "hex": "#4285F4",
//             "title": "Plus Codes",
//             "slug": "pluscodes"
//         },
//         "pm2": {
//             "hex": "#2B037A",
//             "title": "PM2",
//             "slug": "pm2"
//         },
//         "pnpm": {
//             "hex": "#F69220",
//             "title": "pnpm",
//             "slug": "pnpm"
//         },
//         "pocket": {
//             "hex": "#EF3F56",
//             "title": "Pocket",
//             "slug": "pocket"
//         },
//         "pocketcasts": {
//             "hex": "#F43E37",
//             "title": "Pocket Casts",
//             "slug": "pocketcasts"
//         },
//         "pocketbase": {
//             "hex": "#B8DBE4",
//             "title": "PocketBase",
//             "slug": "pocketbase"
//         },
//         "podcastaddict": {
//             "hex": "#F4842D",
//             "title": "Podcast Addict",
//             "slug": "podcastaddict"
//         },
//         "podcastindex": {
//             "hex": "#F90000",
//             "title": "Podcast Index",
//             "slug": "podcastindex"
//         },
//         "podman": {
//             "hex": "#892CA0",
//             "title": "Podman",
//             "slug": "podman"
//         },
//         "poe": {
//             "hex": "#5D5CDE",
//             "title": "Poe",
//             "slug": "poe"
//         },
//         "poetry": {
//             "hex": "#60A5FA",
//             "title": "Poetry",
//             "slug": "poetry"
//         },
//         "pointy": {
//             "hex": "#009DE0",
//             "title": "Pointy",
//             "slug": "pointy"
//         },
//         "polars": {
//             "hex": "#CD792C",
//             "title": "Polars",
//             "slug": "polars"
//         },
//         "polestar": {
//             "hex": "#000000",
//             "title": "Polestar",
//             "slug": "polestar"
//         },
//         "polkadot": {
//             "hex": "#E6007A",
//             "title": "Polkadot",
//             "slug": "polkadot"
//         },
//         "poly": {
//             "hex": "#EB3C00",
//             "title": "Poly",
//             "slug": "poly"
//         },
//         "polygon": {
//             "hex": "#7B3FE4",
//             "title": "Polygon",
//             "slug": "polygon"
//         },
//         "polymerproject": {
//             "hex": "#FF4470",
//             "title": "Polymer Project",
//             "slug": "polymerproject"
//         },
//         "polywork": {
//             "hex": "#543DE0",
//             "title": "Polywork",
//             "slug": "polywork"
//         },
//         "pond5": {
//             "hex": "#000000",
//             "title": "Pond5",
//             "slug": "pond5"
//         },
//         "popos": {
//             "hex": "#48B9C7",
//             "title": "Pop!_OS",
//             "slug": "popos"
//         },
//         "porkbun": {
//             "hex": "#EF7878",
//             "title": "Porkbun",
//             "slug": "porkbun"
//         },
//         "porsche": {
//             "hex": "#B12B28",
//             "title": "Porsche",
//             "slug": "porsche"
//         },
//         "portainer": {
//             "hex": "#13BEF9",
//             "title": "Portainer",
//             "slug": "portainer"
//         },
//         "portswigger": {
//             "hex": "#FF6633",
//             "title": "PortSwigger",
//             "slug": "portswigger"
//         },
//         "posit": {
//             "hex": "#447099",
//             "title": "Posit",
//             "slug": "posit"
//         },
//         "postcss": {
//             "hex": "#DD3A0A",
//             "title": "PostCSS",
//             "slug": "postcss"
//         },
//         "postgresql": {
//             "hex": "#4169E1",
//             "title": "PostgreSQL",
//             "slug": "postgresql"
//         },
//         "posthog": {
//             "hex": "#000000",
//             "title": "PostHog",
//             "slug": "posthog"
//         },
//         "postman": {
//             "hex": "#FF6C37",
//             "title": "Postman",
//             "slug": "postman"
//         },
//         "postmates": {
//             "hex": "#FFDF18",
//             "title": "Postmates",
//             "slug": "postmates"
//         },
//         "powers": {
//             "hex": "#E74536",
//             "title": "POWERS",
//             "slug": "powers"
//         },
//         "prdotco": {
//             "hex": "#0080FF",
//             "title": "pr.co",
//             "slug": "prdotco"
//         },
//         "precommit": {
//             "hex": "#FAB040",
//             "title": "pre-commit",
//             "slug": "precommit"
//         },
//         "preact": {
//             "hex": "#673AB8",
//             "title": "Preact",
//             "slug": "preact"
//         },
//         "prefect": {
//             "hex": "#070E10",
//             "title": "Prefect",
//             "slug": "prefect"
//         },
//         "premierleague": {
//             "hex": "#360D3A",
//             "title": "Premier League",
//             "slug": "premierleague"
//         },
//         "prepbytes": {
//             "hex": "#5A87C6",
//             "title": "PrepBytes",
//             "slug": "prepbytes"
//         },
//         "prestashop": {
//             "hex": "#DF0067",
//             "title": "PrestaShop",
//             "slug": "prestashop"
//         },
//         "presto": {
//             "hex": "#5890FF",
//             "title": "Presto",
//             "slug": "presto"
//         },
//         "prettier": {
//             "hex": "#F7B93E",
//             "title": "Prettier",
//             "slug": "prettier"
//         },
//         "pretzel": {
//             "hex": "#1BB3A4",
//             "title": "Pretzel",
//             "slug": "pretzel"
//         },
//         "prevention": {
//             "hex": "#44C1C5",
//             "title": "Prevention",
//             "slug": "prevention"
//         },
//         "prezi": {
//             "hex": "#3181FF",
//             "title": "Prezi",
//             "slug": "prezi"
//         },
//         "prime": {
//             "hex": "#00A8E1",
//             "title": "Prime",
//             "slug": "prime"
//         },
//         "primevideo": {
//             "hex": "#1F2E3E",
//             "title": "Prime Video",
//             "slug": "primevideo"
//         },
//         "primefaces": {
//             "hex": "#263238",
//             "title": "PrimeFaces",
//             "slug": "primefaces"
//         },
//         "primeng": {
//             "hex": "#DD0031",
//             "title": "PrimeNG",
//             "slug": "primeng"
//         },
//         "primereact": {
//             "hex": "#03C4E8",
//             "title": "PrimeReact",
//             "slug": "primereact"
//         },
//         "primevue": {
//             "hex": "#41B883",
//             "title": "PrimeVue",
//             "slug": "primevue"
//         },
//         "printables": {
//             "hex": "#FA6831",
//             "title": "Printables",
//             "slug": "printables"
//         },
//         "prisma": {
//             "hex": "#2D3748",
//             "title": "Prisma",
//             "slug": "prisma"
//         },
//         "prismic": {
//             "hex": "#5163BA",
//             "title": "Prismic",
//             "slug": "prismic"
//         },
//         "privatedivision": {
//             "hex": "#000000",
//             "title": "Private Division",
//             "slug": "privatedivision"
//         },
//         "privateinternetaccess": {
//             "hex": "#1E811F",
//             "title": "Private Internet Access",
//             "slug": "privateinternetaccess"
//         },
//         "protools": {
//             "hex": "#7ACB10",
//             "title": "Pro Tools",
//             "slug": "protools"
//         },
//         "probot": {
//             "hex": "#00B0D8",
//             "title": "Probot",
//             "slug": "probot"
//         },
//         "processingfoundation": {
//             "hex": "#006699",
//             "title": "Processing Foundation",
//             "slug": "processingfoundation"
//         },
//         "processwire": {
//             "hex": "#2480E6",
//             "title": "ProcessWire",
//             "slug": "processwire"
//         },
//         "producthunt": {
//             "hex": "#DA552F",
//             "title": "Product Hunt",
//             "slug": "producthunt"
//         },
//         "progate": {
//             "hex": "#380953",
//             "title": "Progate",
//             "slug": "progate"
//         },
//         "progress": {
//             "hex": "#5CE500",
//             "title": "Progress",
//             "slug": "progress"
//         },
//         "prometheus": {
//             "hex": "#E6522C",
//             "title": "Prometheus",
//             "slug": "prometheus"
//         },
//         "pronounsdotpage": {
//             "hex": "#C71585",
//             "title": "Pronouns.page",
//             "slug": "pronounsdotpage"
//         },
//         "prosieben": {
//             "hex": "#E6000F",
//             "title": "ProSieben",
//             "slug": "prosieben"
//         },
//         "proteus": {
//             "hex": "#1C79B3",
//             "title": "Proteus",
//             "slug": "proteus"
//         },
//         "protodotio": {
//             "hex": "#34A7C1",
//             "title": "Proto.io",
//             "slug": "protodotio"
//         },
//         "protocolsdotio": {
//             "hex": "#4D9FE7",
//             "title": "protocols.io",
//             "slug": "protocolsdotio"
//         },
//         "proton": {
//             "hex": "#6D4AFF",
//             "title": "Proton",
//             "slug": "proton"
//         },
//         "protoncalendar": {
//             "hex": "#50B0E9",
//             "title": "Proton Calendar",
//             "slug": "protoncalendar"
//         },
//         "protondrive": {
//             "hex": "#EB508D",
//             "title": "Proton Drive",
//             "slug": "protondrive"
//         },
//         "protonmail": {
//             "hex": "#6D4AFF",
//             "title": "Proton Mail",
//             "slug": "protonmail"
//         },
//         "protonvpn": {
//             "hex": "#66DEB1",
//             "title": "Proton VPN",
//             "slug": "protonvpn"
//         },
//         "protondb": {
//             "hex": "#F50057",
//             "title": "ProtonDB",
//             "slug": "protondb"
//         },
//         "protractor": {
//             "hex": "#ED163A",
//             "title": "Protractor",
//             "slug": "protractor"
//         },
//         "proxmox": {
//             "hex": "#E57000",
//             "title": "Proxmox",
//             "slug": "proxmox"
//         },
//         "pterodactyl": {
//             "hex": "#10539F",
//             "title": "Pterodactyl",
//             "slug": "pterodactyl"
//         },
//         "pubg": {
//             "hex": "#F4B942",
//             "title": "PUBG",
//             "slug": "pubg"
//         },
//         "publons": {
//             "hex": "#336699",
//             "title": "Publons",
//             "slug": "publons"
//         },
//         "pubmed": {
//             "hex": "#326599",
//             "title": "PubMed",
//             "slug": "pubmed"
//         },
//         "pug": {
//             "hex": "#A86454",
//             "title": "Pug",
//             "slug": "pug"
//         },
//         "pulumi": {
//             "hex": "#8A3391",
//             "title": "Pulumi",
//             "slug": "pulumi"
//         },
//         "puma": {
//             "hex": "#242B2F",
//             "title": "Puma",
//             "slug": "puma"
//         },
//         "puppet": {
//             "hex": "#FFAE1A",
//             "title": "Puppet",
//             "slug": "puppet"
//         },
//         "puppeteer": {
//             "hex": "#40B5A4",
//             "title": "Puppeteer",
//             "slug": "puppeteer"
//         },
//         "purescript": {
//             "hex": "#14161A",
//             "title": "PureScript",
//             "slug": "purescript"
//         },
//         "purgecss": {
//             "hex": "#14161A",
//             "title": "PurgeCSS",
//             "slug": "purgecss"
//         },
//         "purism": {
//             "hex": "#2D2D2D",
//             "title": "Purism",
//             "slug": "purism"
//         },
//         "pushbullet": {
//             "hex": "#4AB367",
//             "title": "Pushbullet",
//             "slug": "pushbullet"
//         },
//         "pusher": {
//             "hex": "#300D4F",
//             "title": "Pusher",
//             "slug": "pusher"
//         },
//         "pwa": {
//             "hex": "#5A0FC8",
//             "title": "PWA",
//             "slug": "pwa"
//         },
//         "pycharm": {
//             "hex": "#000000",
//             "title": "PyCharm",
//             "slug": "pycharm"
//         },
//         "pycqa": {
//             "hex": "#201B44",
//             "title": "PyCQA",
//             "slug": "pycqa"
//         },
//         "pydantic": {
//             "hex": "#E92063",
//             "title": "Pydantic",
//             "slug": "pydantic"
//         },
//         "pyg": {
//             "hex": "#3C2179",
//             "title": "PyG",
//             "slug": "pyg"
//         },
//         "pypi": {
//             "hex": "#3775A9",
//             "title": "PyPI",
//             "slug": "pypi"
//         },
//         "pypy": {
//             "hex": "#193440",
//             "title": "PyPy",
//             "slug": "pypy"
//         },
//         "pyscaffold": {
//             "hex": "#005CA0",
//             "title": "PyScaffold",
//             "slug": "pyscaffold"
//         },
//         "pysyft": {
//             "hex": "#F1BF7A",
//             "title": "PySyft",
//             "slug": "pysyft"
//         },
//         "pytest": {
//             "hex": "#0A9EDC",
//             "title": "Pytest",
//             "slug": "pytest"
//         },
//         "python": {
//             "hex": "#3776AB",
//             "title": "Python",
//             "slug": "python"
//         },
//         "pythonanywhere": {
//             "hex": "#1D9FD7",
//             "title": "PythonAnywhere",
//             "slug": "pythonanywhere"
//         },
//         "pytorch": {
//             "hex": "#EE4C2C",
//             "title": "PyTorch",
//             "slug": "pytorch"
//         },
//         "pyup": {
//             "hex": "#9F55FF",
//             "title": "PyUp",
//             "slug": "pyup"
//         },
//         "qantas": {
//             "hex": "#E40000",
//             "title": "Qantas",
//             "slug": "qantas"
//         },
//         "qase": {
//             "hex": "#4F46DC",
//             "title": "Qase",
//             "slug": "qase"
//         },
//         "qatarairways": {
//             "hex": "#5C0D34",
//             "title": "Qatar Airways",
//             "slug": "qatarairways"
//         },
//         "qbittorrent": {
//             "hex": "#2F67BA",
//             "title": "qbittorrent",
//             "slug": "qbittorrent"
//         },
//         "qemu": {
//             "hex": "#FF6600",
//             "title": "QEMU",
//             "slug": "qemu"
//         },
//         "qgis": {
//             "hex": "#589632",
//             "title": "Qgis",
//             "slug": "qgis"
//         },
//         "qi": {
//             "hex": "#000000",
//             "title": "Qi",
//             "slug": "qi"
//         },
//         "qiita": {
//             "hex": "#55C500",
//             "title": "Qiita",
//             "slug": "qiita"
//         },
//         "qiskit": {
//             "hex": "#6929C4",
//             "title": "Qiskit",
//             "slug": "qiskit"
//         },
//         "qiwi": {
//             "hex": "#FF8C00",
//             "title": "QIWI",
//             "slug": "qiwi"
//         },
//         "qlik": {
//             "hex": "#009848",
//             "title": "Qlik",
//             "slug": "qlik"
//         },
//         "qmk": {
//             "hex": "#333333",
//             "title": "QMK",
//             "slug": "qmk"
//         },
//         "qnap": {
//             "hex": "#0C2E82",
//             "title": "QNAP",
//             "slug": "qnap"
//         },
//         "qq": {
//             "hex": "#1EBAFC",
//             "title": "QQ",
//             "slug": "qq"
//         },
//         "qt": {
//             "hex": "#41CD52",
//             "title": "Qt",
//             "slug": "qt"
//         },
//         "qualcomm": {
//             "hex": "#3253DC",
//             "title": "Qualcomm",
//             "slug": "qualcomm"
//         },
//         "qualtrics": {
//             "hex": "#00B4EF",
//             "title": "Qualtrics",
//             "slug": "qualtrics"
//         },
//         "qualys": {
//             "hex": "#ED2E26",
//             "title": "Qualys",
//             "slug": "qualys"
//         },
//         "quantcast": {
//             "hex": "#000000",
//             "title": "Quantcast",
//             "slug": "quantcast"
//         },
//         "quantconnect": {
//             "hex": "#F98309",
//             "title": "QuantConnect",
//             "slug": "quantconnect"
//         },
//         "quarkus": {
//             "hex": "#4695EB",
//             "title": "Quarkus",
//             "slug": "quarkus"
//         },
//         "quarto": {
//             "hex": "#39729E",
//             "title": "Quarto",
//             "slug": "quarto"
//         },
//         "quasar": {
//             "hex": "#050A14",
//             "title": "Quasar",
//             "slug": "quasar"
//         },
//         "qubesos": {
//             "hex": "#3874D8",
//             "title": "Qubes OS",
//             "slug": "qubesos"
//         },
//         "quest": {
//             "hex": "#FB4F14",
//             "title": "Quest",
//             "slug": "quest"
//         },
//         "quickbooks": {
//             "hex": "#2CA01C",
//             "title": "QuickBooks",
//             "slug": "quickbooks"
//         },
//         "quicklook": {
//             "hex": "#0078D3",
//             "title": "QuickLook",
//             "slug": "quicklook"
//         },
//         "quicktime": {
//             "hex": "#1C69F0",
//             "title": "QuickTime",
//             "slug": "quicktime"
//         },
//         "quicktype": {
//             "hex": "#159588",
//             "title": "quicktype",
//             "slug": "quicktype"
//         },
//         "quip": {
//             "hex": "#F27557",
//             "title": "Quip",
//             "slug": "quip"
//         },
//         "quizlet": {
//             "hex": "#4255FF",
//             "title": "Quizlet",
//             "slug": "quizlet"
//         },
//         "quora": {
//             "hex": "#B92B27",
//             "title": "Quora",
//             "slug": "quora"
//         },
//         "qwant": {
//             "hex": "#282B2F",
//             "title": "Qwant",
//             "slug": "qwant"
//         },
//         "qwik": {
//             "hex": "#AC7EF4",
//             "title": "Qwik",
//             "slug": "qwik"
//         },
//         "qwiklabs": {
//             "hex": "#F5CD0E",
//             "title": "Qwiklabs",
//             "slug": "qwiklabs"
//         },
//         "qzone": {
//             "hex": "#FECE00",
//             "title": "Qzone",
//             "slug": "qzone"
//         },
//         "r": {
//             "hex": "#276DC3",
//             "title": "R",
//             "slug": "r"
//         },
//         "r3": {
//             "hex": "#EC1D24",
//             "title": "R3",
//             "slug": "r3"
//         },
//         "rabbitmq": {
//             "hex": "#FF6600",
//             "title": "RabbitMQ",
//             "slug": "rabbitmq"
//         },
//         "racket": {
//             "hex": "#9F1D20",
//             "title": "Racket",
//             "slug": "racket"
//         },
//         "radstudio": {
//             "hex": "#E62431",
//             "title": "RAD Studio",
//             "slug": "radstudio"
//         },
//         "radar": {
//             "hex": "#007AFF",
//             "title": "Radar",
//             "slug": "radar"
//         },
//         "radarr": {
//             "hex": "#FFCB3D",
//             "title": "radarr",
//             "slug": "radarr"
//         },
//         "radixui": {
//             "hex": "#161618",
//             "title": "Radix UI",
//             "slug": "radixui"
//         },
//         "railway": {
//             "hex": "#0B0D0E",
//             "title": "Railway",
//             "slug": "railway"
//         },
//         "rainmeter": {
//             "hex": "#19519B",
//             "title": "Rainmeter",
//             "slug": "rainmeter"
//         },
//         "rakuten": {
//             "hex": "#BF0000",
//             "title": "Rakuten",
//             "slug": "rakuten"
//         },
//         "ram": {
//             "hex": "#000000",
//             "title": "Ram",
//             "slug": "ram"
//         },
//         "rancher": {
//             "hex": "#0075A8",
//             "title": "Rancher",
//             "slug": "rancher"
//         },
//         "rapid": {
//             "hex": "#0055DA",
//             "title": "Rapid",
//             "slug": "rapid"
//         },
//         "rarible": {
//             "hex": "#FEDA03",
//             "title": "Rarible",
//             "slug": "rarible"
//         },
//         "rasa": {
//             "hex": "#5A17EE",
//             "title": "Rasa",
//             "slug": "rasa"
//         },
//         "raspberrypi": {
//             "hex": "#A22846",
//             "title": "Raspberry Pi",
//             "slug": "raspberrypi"
//         },
//         "ravelry": {
//             "hex": "#EE6E62",
//             "title": "Ravelry",
//             "slug": "ravelry"
//         },
//         "ray": {
//             "hex": "#028CF0",
//             "title": "Ray",
//             "slug": "ray"
//         },
//         "raycast": {
//             "hex": "#FF6363",
//             "title": "Raycast",
//             "slug": "raycast"
//         },
//         "raylib": {
//             "hex": "#000000",
//             "title": "Raylib",
//             "slug": "raylib"
//         },
//         "razer": {
//             "hex": "#00FF00",
//             "title": "Razer",
//             "slug": "razer"
//         },
//         "razorpay": {
//             "hex": "#0C2451",
//             "title": "Razorpay",
//             "slug": "razorpay"
//         },
//         "rclone": {
//             "hex": "#3F79AD",
//             "title": "Rclone",
//             "slug": "rclone"
//         },
//         "react": {
//             "hex": "#61DAFB",
//             "title": "React",
//             "slug": "react"
//         },
//         "reactbootstrap": {
//             "hex": "#41E0FD",
//             "title": "React Bootstrap",
//             "slug": "reactbootstrap"
//         },
//         "reacthookform": {
//             "hex": "#EC5990",
//             "title": "React Hook Form",
//             "slug": "reacthookform"
//         },
//         "reactquery": {
//             "hex": "#FF4154",
//             "title": "React Query",
//             "slug": "reactquery"
//         },
//         "reactrouter": {
//             "hex": "#CA4245",
//             "title": "React Router",
//             "slug": "reactrouter"
//         },
//         "reacttable": {
//             "hex": "#FF4154",
//             "title": "React Table",
//             "slug": "reacttable"
//         },
//         "reactiveresume": {
//             "hex": "#000000",
//             "title": "Reactive Resume",
//             "slug": "reactiveresume"
//         },
//         "reactivex": {
//             "hex": "#B7178C",
//             "title": "ReactiveX",
//             "slug": "reactivex"
//         },
//         "reactos": {
//             "hex": "#0088CC",
//             "title": "ReactOS",
//             "slug": "reactos"
//         },
//         "readthedocs": {
//             "hex": "#8CA1AF",
//             "title": "Read the Docs",
//             "slug": "readthedocs"
//         },
//         "readdotcv": {
//             "hex": "#111111",
//             "title": "Read.cv",
//             "slug": "readdotcv"
//         },
//         "readme": {
//             "hex": "#018EF5",
//             "title": "ReadMe",
//             "slug": "readme"
//         },
//         "reason": {
//             "hex": "#DD4B39",
//             "title": "Reason",
//             "slug": "reason"
//         },
//         "reasonstudios": {
//             "hex": "#FFFFFF",
//             "title": "Reason Studios",
//             "slug": "reasonstudios"
//         },
//         "recoil": {
//             "hex": "#3578E5",
//             "title": "Recoil",
//             "slug": "recoil"
//         },
//         "red": {
//             "hex": "#B32629",
//             "title": "Red",
//             "slug": "red"
//         },
//         "redbull": {
//             "hex": "#DB0A40",
//             "title": "Red Bull",
//             "slug": "redbull"
//         },
//         "redcandlegames": {
//             "hex": "#D23735",
//             "title": "Red Candle Games",
//             "slug": "redcandlegames"
//         },
//         "redhat": {
//             "hex": "#EE0000",
//             "title": "Red Hat",
//             "slug": "redhat"
//         },
//         "redhatopenshift": {
//             "hex": "#EE0000",
//             "title": "Red Hat Open Shift",
//             "slug": "redhatopenshift"
//         },
//         "redash": {
//             "hex": "#FF7964",
//             "title": "Redash",
//             "slug": "redash"
//         },
//         "redbubble": {
//             "hex": "#E41321",
//             "title": "Redbubble",
//             "slug": "redbubble"
//         },
//         "reddit": {
//             "hex": "#FF4500",
//             "title": "Reddit",
//             "slug": "reddit"
//         },
//         "redis": {
//             "hex": "#FF4438",
//             "title": "Redis",
//             "slug": "redis"
//         },
//         "redmine": {
//             "hex": "#B32024",
//             "title": "Redmine",
//             "slug": "redmine"
//         },
//         "redox": {
//             "hex": "#000000",
//             "title": "Redox",
//             "slug": "redox"
//         },
//         "redragon": {
//             "hex": "#E60012",
//             "title": "Redragon",
//             "slug": "redragon"
//         },
//         "redsys": {
//             "hex": "#DC7C26",
//             "title": "Redsys",
//             "slug": "redsys"
//         },
//         "redux": {
//             "hex": "#764ABC",
//             "title": "Redux",
//             "slug": "redux"
//         },
//         "reduxsaga": {
//             "hex": "#999999",
//             "title": "Redux-Saga",
//             "slug": "reduxsaga"
//         },
//         "redwoodjs": {
//             "hex": "#BF4722",
//             "title": "RedwoodJS",
//             "slug": "redwoodjs"
//         },
//         "reebok": {
//             "hex": "#E41D1B",
//             "title": "Reebok",
//             "slug": "reebok"
//         },
//         "refine": {
//             "hex": "#14141F",
//             "title": "Refine",
//             "slug": "refine"
//         },
//         "refinedgithub": {
//             "hex": "#9E95B7",
//             "title": "Refined GitHub",
//             "slug": "refinedgithub"
//         },
//         "relay": {
//             "hex": "#F26B00",
//             "title": "Relay",
//             "slug": "relay"
//         },
//         "relianceindustrieslimited": {
//             "hex": "#D1AB66",
//             "title": "Reliance Industries Limited",
//             "slug": "relianceindustrieslimited"
//         },
//         "remark": {
//             "hex": "#000000",
//             "title": "remark",
//             "slug": "remark"
//         },
//         "remedyentertainment": {
//             "hex": "#D6001C",
//             "title": "Remedy Entertainment",
//             "slug": "remedyentertainment"
//         },
//         "remix": {
//             "hex": "#000000",
//             "title": "Remix",
//             "slug": "remix"
//         },
//         "removedotbg": {
//             "hex": "#54616C",
//             "title": "remove.bg",
//             "slug": "removedotbg"
//         },
//         "renpy": {
//             "hex": "#FF7F7F",
//             "title": "Ren'Py",
//             "slug": "renpy"
//         },
//         "renault": {
//             "hex": "#FFCC33",
//             "title": "Renault",
//             "slug": "renault"
//         },
//         "render": {
//             "hex": "#000000",
//             "title": "Render",
//             "slug": "render"
//         },
//         "renovate": {
//             "hex": "#308BE3",
//             "title": "Renovate",
//             "slug": "renovate"
//         },
//         "renren": {
//             "hex": "#217DC6",
//             "title": "Renren",
//             "slug": "renren"
//         },
//         "replicate": {
//             "hex": "#000000",
//             "title": "Replicate",
//             "slug": "replicate"
//         },
//         "replit": {
//             "hex": "#F26207",
//             "title": "Replit",
//             "slug": "replit"
//         },
//         "republicofgamers": {
//             "hex": "#FF0029",
//             "title": "Republic of Gamers",
//             "slug": "republicofgamers"
//         },
//         "rescript": {
//             "hex": "#E6484F",
//             "title": "ReScript",
//             "slug": "rescript"
//         },
//         "rescuetime": {
//             "hex": "#161A3B",
//             "title": "RescueTime",
//             "slug": "rescuetime"
//         },
//         "researchgate": {
//             "hex": "#00CCBB",
//             "title": "ResearchGate",
//             "slug": "researchgate"
//         },
//         "resend": {
//             "hex": "#000000",
//             "title": "Resend",
//             "slug": "resend"
//         },
//         "resharper": {
//             "hex": "#000000",
//             "title": "ReSharper",
//             "slug": "resharper"
//         },
//         "resurrectionremixos": {
//             "hex": "#000000",
//             "title": "Resurrection Remix OS",
//             "slug": "resurrectionremixos"
//         },
//         "retool": {
//             "hex": "#3D3D3D",
//             "title": "Retool",
//             "slug": "retool"
//         },
//         "retroarch": {
//             "hex": "#000000",
//             "title": "RetroArch",
//             "slug": "retroarch"
//         },
//         "retropie": {
//             "hex": "#CC0000",
//             "title": "RetroPie",
//             "slug": "retropie"
//         },
//         "revanced": {
//             "hex": "#9ED5FF",
//             "title": "ReVanced",
//             "slug": "revanced"
//         },
//         "revealdotjs": {
//             "hex": "#F2E142",
//             "title": "reveal.js",
//             "slug": "revealdotjs"
//         },
//         "reverbnation": {
//             "hex": "#E43526",
//             "title": "ReverbNation",
//             "slug": "reverbnation"
//         },
//         "revoltdotchat": {
//             "hex": "#FF4655",
//             "title": "Revolt.chat",
//             "slug": "revoltdotchat"
//         },
//         "revolut": {
//             "hex": "#191C1F",
//             "title": "Revolut",
//             "slug": "revolut"
//         },
//         "rewe": {
//             "hex": "#CC071E",
//             "title": "REWE",
//             "slug": "rewe"
//         },
//         "rezgo": {
//             "hex": "#F76C00",
//             "title": "Rezgo",
//             "slug": "rezgo"
//         },
//         "rhinoceros": {
//             "hex": "#801010",
//             "title": "Rhinoceros",
//             "slug": "rhinoceros"
//         },
//         "rich": {
//             "hex": "#FAE742",
//             "title": "Rich",
//             "slug": "rich"
//         },
//         "rider": {
//             "hex": "#000000",
//             "title": "Rider",
//             "slug": "rider"
//         },
//         "rimacautomobili": {
//             "hex": "#0A222E",
//             "title": "Rimac Automobili",
//             "slug": "rimacautomobili"
//         },
//         "rime": {
//             "hex": "#000000",
//             "title": "Rime",
//             "slug": "rime"
//         },
//         "ring": {
//             "hex": "#1C9AD6",
//             "title": "Ring",
//             "slug": "ring"
//         },
//         "riotgames": {
//             "hex": "#EB0029",
//             "title": "Riot Games",
//             "slug": "riotgames"
//         },
//         "ripple": {
//             "hex": "#0085C0",
//             "title": "Ripple",
//             "slug": "ripple"
//         },
//         "riscv": {
//             "hex": "#283272",
//             "title": "RISC-V",
//             "slug": "riscv"
//         },
//         "riseup": {
//             "hex": "#FF0000",
//             "title": "Riseup",
//             "slug": "riseup"
//         },
//         "ritzcarlton": {
//             "hex": "#000000",
//             "title": "Ritz Carlton",
//             "slug": "ritzcarlton"
//         },
//         "rive": {
//             "hex": "#1D1D1D",
//             "title": "Rive",
//             "slug": "rive"
//         },
//         "roadmapdotsh": {
//             "hex": "#000000",
//             "title": "roadmap.sh",
//             "slug": "roadmapdotsh"
//         },
//         "roamresearch": {
//             "hex": "#343A40",
//             "title": "Roam Research",
//             "slug": "roamresearch"
//         },
//         "robinhood": {
//             "hex": "#CCFF00",
//             "title": "Robinhood",
//             "slug": "robinhood"
//         },
//         "roblox": {
//             "hex": "#000000",
//             "title": "Roblox",
//             "slug": "roblox"
//         },
//         "robloxstudio": {
//             "hex": "#00A2FF",
//             "title": "Roblox Studio",
//             "slug": "robloxstudio"
//         },
//         "roboflow": {
//             "hex": "#6706CE",
//             "title": "Roboflow",
//             "slug": "roboflow"
//         },
//         "robotframework": {
//             "hex": "#000000",
//             "title": "Robot Framework",
//             "slug": "robotframework"
//         },
//         "rocket": {
//             "hex": "#D33847",
//             "title": "Rocket",
//             "slug": "rocket"
//         },
//         "rocketdotchat": {
//             "hex": "#F5455C",
//             "title": "Rocket.Chat",
//             "slug": "rocketdotchat"
//         },
//         "rocksdb": {
//             "hex": "#2A2A2A",
//             "title": "RocksDB",
//             "slug": "rocksdb"
//         },
//         "rockstargames": {
//             "hex": "#FCAF17",
//             "title": "Rockstar Games",
//             "slug": "rockstargames"
//         },
//         "rockwellautomation": {
//             "hex": "#CD163F",
//             "title": "Rockwell Automation",
//             "slug": "rockwellautomation"
//         },
//         "rockylinux": {
//             "hex": "#10B981",
//             "title": "Rocky Linux",
//             "slug": "rockylinux"
//         },
//         "roku": {
//             "hex": "#662D91",
//             "title": "Roku",
//             "slug": "roku"
//         },
//         "roll20": {
//             "hex": "#E10085",
//             "title": "Roll20",
//             "slug": "roll20"
//         },
//         "rollsroyce": {
//             "hex": "#281432",
//             "title": "Rolls-Royce",
//             "slug": "rollsroyce"
//         },
//         "rollupdotjs": {
//             "hex": "#EC4A3F",
//             "title": "rollup.js",
//             "slug": "rollupdotjs"
//         },
//         "roon": {
//             "hex": "#2039F3",
//             "title": "Roon",
//             "slug": "roon"
//         },
//         "rootme": {
//             "hex": "#000000",
//             "title": "Root Me",
//             "slug": "rootme"
//         },
//         "roots": {
//             "hex": "#525DDC",
//             "title": "Roots",
//             "slug": "roots"
//         },
//         "rootsbedrock": {
//             "hex": "#525DDC",
//             "title": "Roots Bedrock",
//             "slug": "rootsbedrock"
//         },
//         "rootssage": {
//             "hex": "#525DDC",
//             "title": "Roots Sage",
//             "slug": "rootssage"
//         },
//         "ros": {
//             "hex": "#22314E",
//             "title": "ROS",
//             "slug": "ros"
//         },
//         "rossmann": {
//             "hex": "#C3002D",
//             "title": "Rossmann",
//             "slug": "rossmann"
//         },
//         "rotaryinternational": {
//             "hex": "#F7A81B",
//             "title": "Rotary International",
//             "slug": "rotaryinternational"
//         },
//         "rottentomatoes": {
//             "hex": "#FA320A",
//             "title": "Rotten Tomatoes",
//             "slug": "rottentomatoes"
//         },
//         "roundcube": {
//             "hex": "#37BEFF",
//             "title": "Roundcube",
//             "slug": "roundcube"
//         },
//         "rsocket": {
//             "hex": "#EF0092",
//             "title": "RSocket",
//             "slug": "rsocket"
//         },
//         "rss": {
//             "hex": "#FFA500",
//             "title": "RSS",
//             "slug": "rss"
//         },
//         "rstudioide": {
//             "hex": "#75AADB",
//             "title": "RStudio IDE",
//             "slug": "rstudioide"
//         },
//         "rte": {
//             "hex": "#00A7B3",
//             "title": "RTÉ",
//             "slug": "rte"
//         },
//         "rtl": {
//             "hex": "#FA002E",
//             "title": "RTL",
//             "slug": "rtl"
//         },
//         "rtlzwei": {
//             "hex": "#00BCF6",
//             "title": "RTLZWEI",
//             "slug": "rtlzwei"
//         },
//         "rtm": {
//             "hex": "#36474F",
//             "title": "RTM",
//             "slug": "rtm"
//         },
//         "rubocop": {
//             "hex": "#000000",
//             "title": "RuboCop",
//             "slug": "rubocop"
//         },
//         "ruby": {
//             "hex": "#CC342D",
//             "title": "Ruby",
//             "slug": "ruby"
//         },
//         "rubyonrails": {
//             "hex": "#D30001",
//             "title": "Ruby on Rails",
//             "slug": "rubyonrails"
//         },
//         "rubysinatra": {
//             "hex": "#000000",
//             "title": "Ruby Sinatra",
//             "slug": "rubysinatra"
//         },
//         "rubygems": {
//             "hex": "#E9573F",
//             "title": "RubyGems",
//             "slug": "rubygems"
//         },
//         "rubymine": {
//             "hex": "#000000",
//             "title": "RubyMine",
//             "slug": "rubymine"
//         },
//         "ruff": {
//             "hex": "#D7FF64",
//             "title": "Ruff",
//             "slug": "ruff"
//         },
//         "rumahweb": {
//             "hex": "#2EB4E3",
//             "title": "Rumahweb",
//             "slug": "rumahweb"
//         },
//         "rumble": {
//             "hex": "#85C742",
//             "title": "Rumble",
//             "slug": "rumble"
//         },
//         "rundeck": {
//             "hex": "#F73F39",
//             "title": "Rundeck",
//             "slug": "rundeck"
//         },
//         "runkeeper": {
//             "hex": "#001E62",
//             "title": "Runkeeper",
//             "slug": "runkeeper"
//         },
//         "runkit": {
//             "hex": "#491757",
//             "title": "RunKit",
//             "slug": "runkit"
//         },
//         "runrundotit": {
//             "hex": "#DB3729",
//             "title": "Runrun.it",
//             "slug": "runrundotit"
//         },
//         "rust": {
//             "hex": "#000000",
//             "title": "Rust",
//             "slug": "rust"
//         },
//         "rustdesk": {
//             "hex": "#024EFF",
//             "title": "RustDesk",
//             "slug": "rustdesk"
//         },
//         "rxdb": {
//             "hex": "#8D1F89",
//             "title": "RxDB",
//             "slug": "rxdb"
//         },
//         "ryanair": {
//             "hex": "#073590",
//             "title": "Ryanair",
//             "slug": "ryanair"
//         },
//         "rye": {
//             "hex": "#000000",
//             "title": "Rye",
//             "slug": "rye"
//         },
//         "s7airlines": {
//             "hex": "#C4D600",
//             "title": "S7 Airlines",
//             "slug": "s7airlines"
//         },
//         "sabanci": {
//             "hex": "#004B93",
//             "title": "Sabanci",
//             "slug": "sabanci"
//         },
//         "safari": {
//             "hex": "#006CFF",
//             "title": "Safari",
//             "slug": "safari"
//         },
//         "sage": {
//             "hex": "#00D639",
//             "title": "Sage",
//             "slug": "sage"
//         },
//         "sahibinden": {
//             "hex": "#FFE800",
//             "title": "Sahibinden",
//             "slug": "sahibinden"
//         },
//         "sailfishos": {
//             "hex": "#053766",
//             "title": "Sailfish OS",
//             "slug": "sailfishos"
//         },
//         "sailsdotjs": {
//             "hex": "#14ACC2",
//             "title": "Sails.js",
//             "slug": "sailsdotjs"
//         },
//         "salesforce": {
//             "hex": "#00A1E0",
//             "title": "Salesforce",
//             "slug": "salesforce"
//         },
//         "salla": {
//             "hex": "#BAF3E6",
//             "title": "Salla",
//             "slug": "salla"
//         },
//         "saltproject": {
//             "hex": "#57BCAD",
//             "title": "Salt Project",
//             "slug": "saltproject"
//         },
//         "samsclub": {
//             "hex": "#0067A0",
//             "title": "Sam's Club",
//             "slug": "samsclub"
//         },
//         "samsung": {
//             "hex": "#1428A0",
//             "title": "Samsung",
//             "slug": "samsung"
//         },
//         "samsungpay": {
//             "hex": "#1428A0",
//             "title": "Samsung Pay",
//             "slug": "samsungpay"
//         },
//         "sanfranciscomunicipalrailway": {
//             "hex": "#BA0C2F",
//             "title": "San Francisco Municipal Railway",
//             "slug": "sanfranciscomunicipalrailway"
//         },
//         "sandisk": {
//             "hex": "#ED1C24",
//             "title": "SanDisk",
//             "slug": "sandisk"
//         },
//         "sanic": {
//             "hex": "#FF0D68",
//             "title": "Sanic",
//             "slug": "sanic"
//         },
//         "sanity": {
//             "hex": "#F03E2F",
//             "title": "Sanity",
//             "slug": "sanity"
//         },
//         "saopaulometro": {
//             "hex": "#004382",
//             "title": "São Paulo Metro",
//             "slug": "saopaulometro"
//         },
//         "sap": {
//             "hex": "#0FAAFF",
//             "title": "SAP",
//             "slug": "sap"
//         },
//         "sartorius": {
//             "hex": "#FFED00",
//             "title": "Sartorius",
//             "slug": "sartorius"
//         },
//         "sass": {
//             "hex": "#CC6699",
//             "title": "Sass",
//             "slug": "sass"
//         },
//         "satdot1": {
//             "hex": "#047DA3",
//             "title": "Sat.1",
//             "slug": "satdot1"
//         },
//         "satellite": {
//             "hex": "#000000",
//             "title": "Satellite",
//             "slug": "satellite"
//         },
//         "saturn": {
//             "hex": "#EB680B",
//             "title": "Saturn",
//             "slug": "saturn"
//         },
//         "saucelabs": {
//             "hex": "#3DDC91",
//             "title": "Sauce Labs",
//             "slug": "saucelabs"
//         },
//         "saudia": {
//             "hex": "#026938",
//             "title": "Saudia",
//             "slug": "saudia"
//         },
//         "scala": {
//             "hex": "#DC322F",
//             "title": "Scala",
//             "slug": "scala"
//         },
//         "scalar": {
//             "hex": "#1A1A1A",
//             "title": "Scalar",
//             "slug": "scalar"
//         },
//         "scaleway": {
//             "hex": "#4F0599",
//             "title": "Scaleway",
//             "slug": "scaleway"
//         },
//         "scania": {
//             "hex": "#041E42",
//             "title": "Scania",
//             "slug": "scania"
//         },
//         "schneiderelectric": {
//             "hex": "#3DCD58",
//             "title": "Schneider Electric",
//             "slug": "schneiderelectric"
//         },
//         "scikitlearn": {
//             "hex": "#F7931E",
//             "title": "scikit-learn",
//             "slug": "scikitlearn"
//         },
//         "scilab": {
//             "hex": "#CD1925",
//             "title": "Scilab",
//             "slug": "scilab"
//         },
//         "scipy": {
//             "hex": "#8CAAE6",
//             "title": "SciPy",
//             "slug": "scipy"
//         },
//         "scopus": {
//             "hex": "#E9711C",
//             "title": "Scopus",
//             "slug": "scopus"
//         },
//         "scpfoundation": {
//             "hex": "#FFFFFF",
//             "title": "SCP Foundation",
//             "slug": "scpfoundation"
//         },
//         "scrapbox": {
//             "hex": "#06B632",
//             "title": "Scrapbox",
//             "slug": "scrapbox"
//         },
//         "scrapy": {
//             "hex": "#60A839",
//             "title": "Scrapy",
//             "slug": "scrapy"
//         },
//         "scratch": {
//             "hex": "#4D97FF",
//             "title": "Scratch",
//             "slug": "scratch"
//         },
//         "screencastify": {
//             "hex": "#FF8282",
//             "title": "Screencastify",
//             "slug": "screencastify"
//         },
//         "scribd": {
//             "hex": "#1E7B85",
//             "title": "Scribd",
//             "slug": "scribd"
//         },
//         "scrimba": {
//             "hex": "#2B283A",
//             "title": "Scrimba",
//             "slug": "scrimba"
//         },
//         "scrollreveal": {
//             "hex": "#FFCB36",
//             "title": "ScrollReveal",
//             "slug": "scrollreveal"
//         },
//         "scrumalliance": {
//             "hex": "#009FDA",
//             "title": "Scrum Alliance",
//             "slug": "scrumalliance"
//         },
//         "scrutinizerci": {
//             "hex": "#8A9296",
//             "title": "Scrutinizer CI",
//             "slug": "scrutinizerci"
//         },
//         "scylladb": {
//             "hex": "#6CD5E7",
//             "title": "ScyllaDB",
//             "slug": "scylladb"
//         },
//         "seagate": {
//             "hex": "#6EBE49",
//             "title": "Seagate",
//             "slug": "seagate"
//         },
//         "searxng": {
//             "hex": "#3050FF",
//             "title": "SearXNG",
//             "slug": "searxng"
//         },
//         "seat": {
//             "hex": "#33302E",
//             "title": "SEAT",
//             "slug": "seat"
//         },
//         "seatgeek": {
//             "hex": "#FF5B49",
//             "title": "SeatGeek",
//             "slug": "seatgeek"
//         },
//         "securityscorecard": {
//             "hex": "#7033FD",
//             "title": "SecurityScorecard",
//             "slug": "securityscorecard"
//         },
//         "sefaria": {
//             "hex": "#212E50",
//             "title": "Sefaria",
//             "slug": "sefaria"
//         },
//         "sega": {
//             "hex": "#0089CF",
//             "title": "Sega",
//             "slug": "sega"
//         },
//         "selenium": {
//             "hex": "#43B02A",
//             "title": "Selenium",
//             "slug": "selenium"
//         },
//         "sellfy": {
//             "hex": "#21B352",
//             "title": "Sellfy",
//             "slug": "sellfy"
//         },
//         "semanticscholar": {
//             "hex": "#1857B6",
//             "title": "Semantic Scholar",
//             "slug": "semanticscholar"
//         },
//         "semanticui": {
//             "hex": "#00B5AD",
//             "title": "Semantic UI",
//             "slug": "semanticui"
//         },
//         "semanticuireact": {
//             "hex": "#35BDB2",
//             "title": "Semantic UI React",
//             "slug": "semanticuireact"
//         },
//         "semanticweb": {
//             "hex": "#005A9C",
//             "title": "Semantic Web",
//             "slug": "semanticweb"
//         },
//         "semanticrelease": {
//             "hex": "#494949",
//             "title": "semantic-release",
//             "slug": "semanticrelease"
//         },
//         "semaphoreci": {
//             "hex": "#19A974",
//             "title": "Semaphore CI",
//             "slug": "semaphoreci"
//         },
//         "semrush": {
//             "hex": "#FF642D",
//             "title": "Semrush",
//             "slug": "semrush"
//         },
//         "semver": {
//             "hex": "#3F4551",
//             "title": "SemVer",
//             "slug": "semver"
//         },
//         "sencha": {
//             "hex": "#86BC40",
//             "title": "Sencha",
//             "slug": "sencha"
//         },
//         "sendgrid": {
//             "hex": "#51A9E3",
//             "title": "SendGrid",
//             "slug": "sendgrid"
//         },
//         "sennheiser": {
//             "hex": "#000000",
//             "title": "Sennheiser",
//             "slug": "sennheiser"
//         },
//         "sensu": {
//             "hex": "#89C967",
//             "title": "Sensu",
//             "slug": "sensu"
//         },
//         "sentry": {
//             "hex": "#362D59",
//             "title": "Sentry",
//             "slug": "sentry"
//         },
//         "sepa": {
//             "hex": "#2350A9",
//             "title": "SEPA",
//             "slug": "sepa"
//         },
//         "sequelize": {
//             "hex": "#52B0E7",
//             "title": "Sequelize",
//             "slug": "sequelize"
//         },
//         "serverfault": {
//             "hex": "#E7282D",
//             "title": "Server Fault",
//             "slug": "serverfault"
//         },
//         "serverless": {
//             "hex": "#FD5750",
//             "title": "Serverless",
//             "slug": "serverless"
//         },
//         "session": {
//             "hex": "#000000",
//             "title": "Session",
//             "slug": "session"
//         },
//         "sessionize": {
//             "hex": "#1AB394",
//             "title": "Sessionize",
//             "slug": "sessionize"
//         },
//         "setapp": {
//             "hex": "#E6C3A5",
//             "title": "Setapp",
//             "slug": "setapp"
//         },
//         "sfml": {
//             "hex": "#8CC445",
//             "title": "SFML",
//             "slug": "sfml"
//         },
//         "shadcnui": {
//             "hex": "#000000",
//             "title": "shadcn/ui",
//             "slug": "shadcnui"
//         },
//         "shadow": {
//             "hex": "#0A0C0D",
//             "title": "Shadow",
//             "slug": "shadow"
//         },
//         "shanghaimetro": {
//             "hex": "#EC1C24",
//             "title": "Shanghai Metro",
//             "slug": "shanghaimetro"
//         },
//         "sharex": {
//             "hex": "#2885F1",
//             "title": "ShareX",
//             "slug": "sharex"
//         },
//         "sharp": {
//             "hex": "#99CC00",
//             "title": "sharp",
//             "slug": "sharp"
//         },
//         "shazam": {
//             "hex": "#0088FF",
//             "title": "Shazam",
//             "slug": "shazam"
//         },
//         "shell": {
//             "hex": "#FFD500",
//             "title": "Shell",
//             "slug": "shell"
//         },
//         "shelly": {
//             "hex": "#4495D1",
//             "title": "Shelly",
//             "slug": "shelly"
//         },
//         "shenzhenmetro": {
//             "hex": "#009943",
//             "title": "Shenzhen Metro",
//             "slug": "shenzhenmetro"
//         },
//         "shieldsdotio": {
//             "hex": "#000000",
//             "title": "Shields.io",
//             "slug": "shieldsdotio"
//         },
//         "shikimori": {
//             "hex": "#343434",
//             "title": "Shikimori",
//             "slug": "shikimori"
//         },
//         "shopee": {
//             "hex": "#EE4D2D",
//             "title": "Shopee",
//             "slug": "shopee"
//         },
//         "shopify": {
//             "hex": "#7AB55C",
//             "title": "Shopify",
//             "slug": "shopify"
//         },
//         "shopware": {
//             "hex": "#189EFF",
//             "title": "Shopware",
//             "slug": "shopware"
//         },
//         "shortcut": {
//             "hex": "#58B1E4",
//             "title": "Shortcut",
//             "slug": "shortcut"
//         },
//         "showpad": {
//             "hex": "#2D2E83",
//             "title": "Showpad",
//             "slug": "showpad"
//         },
//         "showtime": {
//             "hex": "#B10000",
//             "title": "Showtime",
//             "slug": "showtime"
//         },
//         "showwcase": {
//             "hex": "#0A0D14",
//             "title": "Showwcase",
//             "slug": "showwcase"
//         },
//         "shutterstock": {
//             "hex": "#EE2B24",
//             "title": "Shutterstock",
//             "slug": "shutterstock"
//         },
//         "sidekiq": {
//             "hex": "#B1003E",
//             "title": "Sidekiq",
//             "slug": "sidekiq"
//         },
//         "sidequest": {
//             "hex": "#101227",
//             "title": "SideQuest",
//             "slug": "sidequest"
//         },
//         "siemens": {
//             "hex": "#009999",
//             "title": "Siemens",
//             "slug": "siemens"
//         },
//         "sifive": {
//             "hex": "#252323",
//             "title": "SiFive",
//             "slug": "sifive"
//         },
//         "signal": {
//             "hex": "#3B45FD",
//             "title": "Signal",
//             "slug": "signal"
//         },
//         "silverairways": {
//             "hex": "#D0006F",
//             "title": "Silver Airways",
//             "slug": "silverairways"
//         },
//         "similarweb": {
//             "hex": "#092540",
//             "title": "Similarweb",
//             "slug": "similarweb"
//         },
//         "simkl": {
//             "hex": "#000000",
//             "title": "Simkl",
//             "slug": "simkl"
//         },
//         "simpleanalytics": {
//             "hex": "#FF4F64",
//             "title": "Simple Analytics",
//             "slug": "simpleanalytics"
//         },
//         "simpleicons": {
//             "hex": "#111111",
//             "title": "Simple Icons",
//             "slug": "simpleicons"
//         },
//         "simplelogin": {
//             "hex": "#EA319F",
//             "title": "SimpleLogin",
//             "slug": "simplelogin"
//         },
//         "simplenote": {
//             "hex": "#3361CC",
//             "title": "Simplenote",
//             "slug": "simplenote"
//         },
//         "simplex": {
//             "hex": "#000000",
//             "title": "SimpleX",
//             "slug": "simplex"
//         },
//         "sinaweibo": {
//             "hex": "#E6162D",
//             "title": "Sina Weibo",
//             "slug": "sinaweibo"
//         },
//         "singaporeairlines": {
//             "hex": "#F99F1C",
//             "title": "Singapore Airlines",
//             "slug": "singaporeairlines"
//         },
//         "singlestore": {
//             "hex": "#AA00FF",
//             "title": "SingleStore",
//             "slug": "singlestore"
//         },
//         "sitecore": {
//             "hex": "#EB1F1F",
//             "title": "Sitecore",
//             "slug": "sitecore"
//         },
//         "sitepoint": {
//             "hex": "#258AAF",
//             "title": "SitePoint",
//             "slug": "sitepoint"
//         },
//         "siyuan": {
//             "hex": "#D23F31",
//             "title": "SiYuan",
//             "slug": "siyuan"
//         },
//         "skaffold": {
//             "hex": "#2AA2D6",
//             "title": "Skaffold",
//             "slug": "skaffold"
//         },
//         "sketch": {
//             "hex": "#F7B500",
//             "title": "Sketch",
//             "slug": "sketch"
//         },
//         "sketchfab": {
//             "hex": "#1CAAD9",
//             "title": "Sketchfab",
//             "slug": "sketchfab"
//         },
//         "sketchup": {
//             "hex": "#005F9E",
//             "title": "SketchUp",
//             "slug": "sketchup"
//         },
//         "skillshare": {
//             "hex": "#00FF84",
//             "title": "Skillshare",
//             "slug": "skillshare"
//         },
//         "skoda": {
//             "hex": "#0E3A2F",
//             "title": "ŠKODA",
//             "slug": "skoda"
//         },
//         "sky": {
//             "hex": "#0072C9",
//             "title": "Sky",
//             "slug": "sky"
//         },
//         "skypack": {
//             "hex": "#3167FF",
//             "title": "Skypack",
//             "slug": "skypack"
//         },
//         "slack": {
//             "hex": "#4A154B",
//             "title": "Slack",
//             "slug": "slack"
//         },
//         "slackware": {
//             "hex": "#000000",
//             "title": "Slackware",
//             "slug": "slackware"
//         },
//         "slashdot": {
//             "hex": "#026664",
//             "title": "Slashdot",
//             "slug": "slashdot"
//         },
//         "slickpic": {
//             "hex": "#FF880F",
//             "title": "SlickPic",
//             "slug": "slickpic"
//         },
//         "slides": {
//             "hex": "#E4637C",
//             "title": "Slides",
//             "slug": "slides"
//         },
//         "slideshare": {
//             "hex": "#008ED2",
//             "title": "SlideShare",
//             "slug": "slideshare"
//         },
//         "slint": {
//             "hex": "#2379F4",
//             "title": "Slint",
//             "slug": "slint"
//         },
//         "smart": {
//             "hex": "#D7E600",
//             "title": "smart",
//             "slug": "smart"
//         },
//         "smartthings": {
//             "hex": "#15BFFF",
//             "title": "SmartThings",
//             "slug": "smartthings"
//         },
//         "smashingmagazine": {
//             "hex": "#E85C33",
//             "title": "Smashing Magazine",
//             "slug": "smashingmagazine"
//         },
//         "smrt": {
//             "hex": "#EE2E24",
//             "title": "SMRT",
//             "slug": "smrt"
//         },
//         "smugmug": {
//             "hex": "#6DB944",
//             "title": "SmugMug",
//             "slug": "smugmug"
//         },
//         "snapchat": {
//             "hex": "#FFFC00",
//             "title": "Snapchat",
//             "slug": "snapchat"
//         },
//         "snapcraft": {
//             "hex": "#82BEA0",
//             "title": "Snapcraft",
//             "slug": "snapcraft"
//         },
//         "snapdragon": {
//             "hex": "#C33139",
//             "title": "Snapdragon",
//             "slug": "snapdragon"
//         },
//         "sncf": {
//             "hex": "#CA0939",
//             "title": "SNCF",
//             "slug": "sncf"
//         },
//         "snort": {
//             "hex": "#F6A7AA",
//             "title": "Snort",
//             "slug": "snort"
//         },
//         "snowflake": {
//             "hex": "#29B5E8",
//             "title": "Snowflake",
//             "slug": "snowflake"
//         },
//         "snowpack": {
//             "hex": "#2E5E82",
//             "title": "Snowpack",
//             "slug": "snowpack"
//         },
//         "snyk": {
//             "hex": "#4C4A73",
//             "title": "Snyk",
//             "slug": "snyk"
//         },
//         "socialblade": {
//             "hex": "#B3382C",
//             "title": "Social Blade",
//             "slug": "socialblade"
//         },
//         "society6": {
//             "hex": "#000000",
//             "title": "Society6",
//             "slug": "society6"
//         },
//         "socket": {
//             "hex": "#C93CD7",
//             "title": "Socket",
//             "slug": "socket"
//         },
//         "socketdotio": {
//             "hex": "#010101",
//             "title": "Socket.io",
//             "slug": "socketdotio"
//         },
//         "softcatala": {
//             "hex": "#BA2626",
//             "title": "Softcatalà",
//             "slug": "softcatala"
//         },
//         "softpedia": {
//             "hex": "#002873",
//             "title": "Softpedia",
//             "slug": "softpedia"
//         },
//         "sogou": {
//             "hex": "#FB6022",
//             "title": "Sogou",
//             "slug": "sogou"
//         },
//         "solana": {
//             "hex": "#9945FF",
//             "title": "Solana",
//             "slug": "solana"
//         },
//         "solid": {
//             "hex": "#2C4F7C",
//             "title": "Solid",
//             "slug": "solid"
//         },
//         "solidity": {
//             "hex": "#363636",
//             "title": "Solidity",
//             "slug": "solidity"
//         },
//         "sololearn": {
//             "hex": "#149EF2",
//             "title": "Sololearn",
//             "slug": "sololearn"
//         },
//         "solus": {
//             "hex": "#5294E2",
//             "title": "Solus",
//             "slug": "solus"
//         },
//         "sonar": {
//             "hex": "#FD3456",
//             "title": "Sonar",
//             "slug": "sonar"
//         },
//         "sonarcloud": {
//             "hex": "#F3702A",
//             "title": "SonarCloud",
//             "slug": "sonarcloud"
//         },
//         "sonarlint": {
//             "hex": "#CB2029",
//             "title": "SonarLint",
//             "slug": "sonarlint"
//         },
//         "sonarqube": {
//             "hex": "#4E9BCD",
//             "title": "SonarQube",
//             "slug": "sonarqube"
//         },
//         "sonarr": {
//             "hex": "#2596BE",
//             "title": "sonarr",
//             "slug": "sonarr"
//         },
//         "sonatype": {
//             "hex": "#1B1C30",
//             "title": "Sonatype",
//             "slug": "sonatype"
//         },
//         "songkick": {
//             "hex": "#F80046",
//             "title": "Songkick",
//             "slug": "songkick"
//         },
//         "songoda": {
//             "hex": "#FC494A",
//             "title": "Songoda",
//             "slug": "songoda"
//         },
//         "sonicwall": {
//             "hex": "#FF791A",
//             "title": "SonicWall",
//             "slug": "sonicwall"
//         },
//         "sonos": {
//             "hex": "#000000",
//             "title": "Sonos",
//             "slug": "sonos"
//         },
//         "sony": {
//             "hex": "#FFFFFF",
//             "title": "Sony",
//             "slug": "sony"
//         },
//         "soriana": {
//             "hex": "#D52B1E",
//             "title": "Soriana",
//             "slug": "soriana"
//         },
//         "soundcharts": {
//             "hex": "#0C1528",
//             "title": "Soundcharts",
//             "slug": "soundcharts"
//         },
//         "soundcloud": {
//             "hex": "#FF5500",
//             "title": "SoundCloud",
//             "slug": "soundcloud"
//         },
//         "sourceengine": {
//             "hex": "#F79A10",
//             "title": "Source Engine",
//             "slug": "sourceengine"
//         },
//         "sourceforge": {
//             "hex": "#FF6600",
//             "title": "SourceForge",
//             "slug": "sourceforge"
//         },
//         "sourcehut": {
//             "hex": "#000000",
//             "title": "SourceHut",
//             "slug": "sourcehut"
//         },
//         "sourcetree": {
//             "hex": "#0052CC",
//             "title": "Sourcetree",
//             "slug": "sourcetree"
//         },
//         "southwestairlines": {
//             "hex": "#304CB2",
//             "title": "Southwest Airlines",
//             "slug": "southwestairlines"
//         },
//         "spacemacs": {
//             "hex": "#9266CC",
//             "title": "Spacemacs",
//             "slug": "spacemacs"
//         },
//         "spaceship": {
//             "hex": "#394EFF",
//             "title": "Spaceship",
//             "slug": "spaceship"
//         },
//         "spacex": {
//             "hex": "#000000",
//             "title": "SpaceX",
//             "slug": "spacex"
//         },
//         "spacy": {
//             "hex": "#09A3D5",
//             "title": "spaCy",
//             "slug": "spacy"
//         },
//         "sparkar": {
//             "hex": "#FF5C83",
//             "title": "Spark AR",
//             "slug": "sparkar"
//         },
//         "sparkasse": {
//             "hex": "#FF0000",
//             "title": "Sparkasse",
//             "slug": "sparkasse"
//         },
//         "sparkfun": {
//             "hex": "#E53525",
//             "title": "SparkFun",
//             "slug": "sparkfun"
//         },
//         "sparkpost": {
//             "hex": "#FA6423",
//             "title": "SparkPost",
//             "slug": "sparkpost"
//         },
//         "spdx": {
//             "hex": "#4398CC",
//             "title": "SPDX",
//             "slug": "spdx"
//         },
//         "speakerdeck": {
//             "hex": "#009287",
//             "title": "Speaker Deck",
//             "slug": "speakerdeck"
//         },
//         "spectrum": {
//             "hex": "#7B16FF",
//             "title": "Spectrum",
//             "slug": "spectrum"
//         },
//         "speedtest": {
//             "hex": "#141526",
//             "title": "Speedtest",
//             "slug": "speedtest"
//         },
//         "speedypage": {
//             "hex": "#1C71F9",
//             "title": "SpeedyPage",
//             "slug": "speedypage"
//         },
//         "sphereonlinejudge": {
//             "hex": "#337AB7",
//             "title": "Sphere Online Judge",
//             "slug": "sphereonlinejudge"
//         },
//         "sphinx": {
//             "hex": "#000000",
//             "title": "Sphinx",
//             "slug": "sphinx"
//         },
//         "spigotmc": {
//             "hex": "#ED8106",
//             "title": "SpigotMC",
//             "slug": "spigotmc"
//         },
//         "spine": {
//             "hex": "#FF4000",
//             "title": "Spine",
//             "slug": "spine"
//         },
//         "spinnaker": {
//             "hex": "#139BB4",
//             "title": "Spinnaker",
//             "slug": "spinnaker"
//         },
//         "splunk": {
//             "hex": "#000000",
//             "title": "Splunk",
//             "slug": "splunk"
//         },
//         "spond": {
//             "hex": "#EE4353",
//             "title": "Spond",
//             "slug": "spond"
//         },
//         "spotify": {
//             "hex": "#1ED760",
//             "title": "Spotify",
//             "slug": "spotify"
//         },
//         "spotlight": {
//             "hex": "#352A71",
//             "title": "Spotlight",
//             "slug": "spotlight"
//         },
//         "spreadshirt": {
//             "hex": "#00B2A5",
//             "title": "Spreadshirt",
//             "slug": "spreadshirt"
//         },
//         "spreaker": {
//             "hex": "#F5C300",
//             "title": "Spreaker",
//             "slug": "spreaker"
//         },
//         "spring": {
//             "hex": "#000000",
//             "title": "Spring",
//             "slug": "spring"
//         },
//         "springboot": {
//             "hex": "#6DB33F",
//             "title": "Spring Boot",
//             "slug": "springboot"
//         },
//         "springsecurity": {
//             "hex": "#6DB33F",
//             "title": "Spring Security",
//             "slug": "springsecurity"
//         },
//         "spyderide": {
//             "hex": "#8C0000",
//             "title": "Spyder IDE",
//             "slug": "spyderide"
//         },
//         "sqlalchemy": {
//             "hex": "#D71F00",
//             "title": "SQLAlchemy",
//             "slug": "sqlalchemy"
//         },
//         "sqlite": {
//             "hex": "#003B57",
//             "title": "SQLite",
//             "slug": "sqlite"
//         },
//         "square": {
//             "hex": "#3E4348",
//             "title": "Square",
//             "slug": "square"
//         },
//         "squareenix": {
//             "hex": "#ED1C24",
//             "title": "Square Enix",
//             "slug": "squareenix"
//         },
//         "squarespace": {
//             "hex": "#000000",
//             "title": "Squarespace",
//             "slug": "squarespace"
//         },
//         "srgssr": {
//             "hex": "#AF001E",
//             "title": "SRG SSR",
//             "slug": "srgssr"
//         },
//         "ssrn": {
//             "hex": "#154881",
//             "title": "SSRN",
//             "slug": "ssrn"
//         },
//         "sst": {
//             "hex": "#E27152",
//             "title": "SST",
//             "slug": "sst"
//         },
//         "stackexchange": {
//             "hex": "#1E5397",
//             "title": "Stack Exchange",
//             "slug": "stackexchange"
//         },
//         "stackoverflow": {
//             "hex": "#F58025",
//             "title": "Stack Overflow",
//             "slug": "stackoverflow"
//         },
//         "stackbit": {
//             "hex": "#207BEA",
//             "title": "Stackbit",
//             "slug": "stackbit"
//         },
//         "stackblitz": {
//             "hex": "#1269D3",
//             "title": "StackBlitz",
//             "slug": "stackblitz"
//         },
//         "stackedit": {
//             "hex": "#606060",
//             "title": "StackEdit",
//             "slug": "stackedit"
//         },
//         "stackhawk": {
//             "hex": "#00CBC6",
//             "title": "StackHawk",
//             "slug": "stackhawk"
//         },
//         "stackshare": {
//             "hex": "#0690FA",
//             "title": "StackShare",
//             "slug": "stackshare"
//         },
//         "stadia": {
//             "hex": "#CD2640",
//             "title": "Stadia",
//             "slug": "stadia"
//         },
//         "staffbase": {
//             "hex": "#00A4FD",
//             "title": "Staffbase",
//             "slug": "staffbase"
//         },
//         "stagetimer": {
//             "hex": "#00A66C",
//             "title": "Stagetimer",
//             "slug": "stagetimer"
//         },
//         "standardresume": {
//             "hex": "#2A3FFB",
//             "title": "Standard Resume",
//             "slug": "standardresume"
//         },
//         "standardjs": {
//             "hex": "#F3DF49",
//             "title": "StandardJS",
//             "slug": "standardjs"
//         },
//         "startrek": {
//             "hex": "#FFE200",
//             "title": "Star Trek",
//             "slug": "startrek"
//         },
//         "starbucks": {
//             "hex": "#006241",
//             "title": "Starbucks",
//             "slug": "starbucks"
//         },
//         "stardock": {
//             "hex": "#004B8D",
//             "title": "Stardock",
//             "slug": "stardock"
//         },
//         "starlingbank": {
//             "hex": "#6935D3",
//             "title": "Starling Bank",
//             "slug": "starlingbank"
//         },
//         "starship": {
//             "hex": "#DD0B78",
//             "title": "Starship",
//             "slug": "starship"
//         },
//         "startdotgg": {
//             "hex": "#2E75BA",
//             "title": "start.gg",
//             "slug": "startdotgg"
//         },
//         "startpage": {
//             "hex": "#6563FF",
//             "title": "Startpage",
//             "slug": "startpage"
//         },
//         "starz": {
//             "hex": "#082125",
//             "title": "STARZ",
//             "slug": "starz"
//         },
//         "statamic": {
//             "hex": "#FF269E",
//             "title": "Statamic",
//             "slug": "statamic"
//         },
//         "statista": {
//             "hex": "#001327",
//             "title": "Statista",
//             "slug": "statista"
//         },
//         "statuspage": {
//             "hex": "#172B4D",
//             "title": "Statuspage",
//             "slug": "statuspage"
//         },
//         "statuspal": {
//             "hex": "#4934BF",
//             "title": "Statuspal",
//             "slug": "statuspal"
//         },
//         "steam": {
//             "hex": "#000000",
//             "title": "Steam",
//             "slug": "steam"
//         },
//         "steamdeck": {
//             "hex": "#1A9FFF",
//             "title": "Steam Deck",
//             "slug": "steamdeck"
//         },
//         "steamdb": {
//             "hex": "#000000",
//             "title": "SteamDB",
//             "slug": "steamdb"
//         },
//         "steamworks": {
//             "hex": "#1E1E1E",
//             "title": "Steamworks",
//             "slug": "steamworks"
//         },
//         "steelseries": {
//             "hex": "#FF5200",
//             "title": "Steelseries",
//             "slug": "steelseries"
//         },
//         "steem": {
//             "hex": "#171FC9",
//             "title": "Steem",
//             "slug": "steem"
//         },
//         "steemit": {
//             "hex": "#06D6A9",
//             "title": "Steemit",
//             "slug": "steemit"
//         },
//         "steinberg": {
//             "hex": "#C90827",
//             "title": "Steinberg",
//             "slug": "steinberg"
//         },
//         "stellar": {
//             "hex": "#7D00FF",
//             "title": "Stellar",
//             "slug": "stellar"
//         },
//         "stencil": {
//             "hex": "#5530FF",
//             "title": "Stencil",
//             "slug": "stencil"
//         },
//         "stencyl": {
//             "hex": "#8E1C04",
//             "title": "Stencyl",
//             "slug": "stencyl"
//         },
//         "stimulus": {
//             "hex": "#77E8B9",
//             "title": "Stimulus",
//             "slug": "stimulus"
//         },
//         "stmicroelectronics": {
//             "hex": "#03234B",
//             "title": "STMicroelectronics",
//             "slug": "stmicroelectronics"
//         },
//         "stockx": {
//             "hex": "#006340",
//             "title": "StockX",
//             "slug": "stockx"
//         },
//         "stopstalk": {
//             "hex": "#536DFE",
//             "title": "StopStalk",
//             "slug": "stopstalk"
//         },
//         "storyblok": {
//             "hex": "#09B3AF",
//             "title": "Storyblok",
//             "slug": "storyblok"
//         },
//         "storybook": {
//             "hex": "#FF4785",
//             "title": "Storybook",
//             "slug": "storybook"
//         },
//         "strapi": {
//             "hex": "#4945FF",
//             "title": "Strapi",
//             "slug": "strapi"
//         },
//         "strava": {
//             "hex": "#FC4C02",
//             "title": "Strava",
//             "slug": "strava"
//         },
//         "streamlabs": {
//             "hex": "#80F5D2",
//             "title": "Streamlabs",
//             "slug": "streamlabs"
//         },
//         "streamlit": {
//             "hex": "#FF4B4B",
//             "title": "Streamlit",
//             "slug": "streamlit"
//         },
//         "streamrunners": {
//             "hex": "#6644F8",
//             "title": "StreamRunners",
//             "slug": "streamrunners"
//         },
//         "stremio": {
//             "hex": "#685CEE",
//             "title": "Stremio",
//             "slug": "stremio"
//         },
//         "stripe": {
//             "hex": "#635BFF",
//             "title": "Stripe",
//             "slug": "stripe"
//         },
//         "strongswan": {
//             "hex": "#E00033",
//             "title": "strongSwan",
//             "slug": "strongswan"
//         },
//         "stryker": {
//             "hex": "#E74C3C",
//             "title": "Stryker",
//             "slug": "stryker"
//         },
//         "stubhub": {
//             "hex": "#003168",
//             "title": "StubHub",
//             "slug": "stubhub"
//         },
//         "studio3t": {
//             "hex": "#17AF66",
//             "title": "Studio 3T",
//             "slug": "studio3t"
//         },
//         "styledcomponents": {
//             "hex": "#DB7093",
//             "title": "styled-components",
//             "slug": "styledcomponents"
//         },
//         "stylelint": {
//             "hex": "#263238",
//             "title": "stylelint",
//             "slug": "stylelint"
//         },
//         "styleshare": {
//             "hex": "#212121",
//             "title": "StyleShare",
//             "slug": "styleshare"
//         },
//         "stylus": {
//             "hex": "#333333",
//             "title": "Stylus",
//             "slug": "stylus"
//         },
//         "subaru": {
//             "hex": "#013C74",
//             "title": "Subaru",
//             "slug": "subaru"
//         },
//         "sublimetext": {
//             "hex": "#FF9800",
//             "title": "Sublime Text",
//             "slug": "sublimetext"
//         },
//         "substack": {
//             "hex": "#FF6719",
//             "title": "Substack",
//             "slug": "substack"
//         },
//         "subtitleedit": {
//             "hex": "#CC2424",
//             "title": "Subtitle Edit",
//             "slug": "subtitleedit"
//         },
//         "subversion": {
//             "hex": "#809CC9",
//             "title": "Subversion",
//             "slug": "subversion"
//         },
//         "suckless": {
//             "hex": "#1177AA",
//             "title": "suckless",
//             "slug": "suckless"
//         },
//         "sui": {
//             "hex": "#4DA2FF",
//             "title": "Sui",
//             "slug": "sui"
//         },
//         "sumologic": {
//             "hex": "#000099",
//             "title": "Sumo Logic",
//             "slug": "sumologic"
//         },
//         "suno": {
//             "hex": "#000000",
//             "title": "Suno",
//             "slug": "suno"
//         },
//         "sunrise": {
//             "hex": "#DA291C",
//             "title": "Sunrise",
//             "slug": "sunrise"
//         },
//         "supabase": {
//             "hex": "#3FCF8E",
//             "title": "Supabase",
//             "slug": "supabase"
//         },
//         "superuser": {
//             "hex": "#38A1CE",
//             "title": "Super User",
//             "slug": "superuser"
//         },
//         "supercrease": {
//             "hex": "#000000",
//             "title": "Supercrease",
//             "slug": "supercrease"
//         },
//         "supermicro": {
//             "hex": "#151F6D",
//             "title": "Supermicro",
//             "slug": "supermicro"
//         },
//         "surfshark": {
//             "hex": "#1EBFBF",
//             "title": "Surfshark",
//             "slug": "surfshark"
//         },
//         "surrealdb": {
//             "hex": "#FF00A0",
//             "title": "SurrealDB",
//             "slug": "surrealdb"
//         },
//         "surveymonkey": {
//             "hex": "#00BF6F",
//             "title": "SurveyMonkey",
//             "slug": "surveymonkey"
//         },
//         "suse": {
//             "hex": "#0C322C",
//             "title": "SUSE",
//             "slug": "suse"
//         },
//         "suzuki": {
//             "hex": "#E30613",
//             "title": "Suzuki",
//             "slug": "suzuki"
//         },
//         "svelte": {
//             "hex": "#FF3E00",
//             "title": "Svelte",
//             "slug": "svelte"
//         },
//         "svg": {
//             "hex": "#FFB13B",
//             "title": "SVG",
//             "slug": "svg"
//         },
//         "svgdotjs": {
//             "hex": "#FF0066",
//             "title": "SVG.js",
//             "slug": "svgdotjs"
//         },
//         "svgo": {
//             "hex": "#3E7FC1",
//             "title": "SVGO",
//             "slug": "svgo"
//         },
//         "svgtrace": {
//             "hex": "#F453C4",
//             "title": "SvgTrace",
//             "slug": "svgtrace"
//         },
//         "swagger": {
//             "hex": "#85EA2D",
//             "title": "Swagger",
//             "slug": "swagger"
//         },
//         "swarm": {
//             "hex": "#FFA633",
//             "title": "Swarm",
//             "slug": "swarm"
//         },
//         "sway": {
//             "hex": "#68751C",
//             "title": "Sway",
//             "slug": "sway"
//         },
//         "swc": {
//             "hex": "#F8C457",
//             "title": "SWC",
//             "slug": "swc"
//         },
//         "swift": {
//             "hex": "#F05138",
//             "title": "Swift",
//             "slug": "swift"
//         },
//         "swiggy": {
//             "hex": "#FC8019",
//             "title": "Swiggy",
//             "slug": "swiggy"
//         },
//         "swiper": {
//             "hex": "#6332F6",
//             "title": "Swiper",
//             "slug": "swiper"
//         },
//         "swr": {
//             "hex": "#000000",
//             "title": "SWR",
//             "slug": "swr"
//         },
//         "symantec": {
//             "hex": "#FDB511",
//             "title": "Symantec",
//             "slug": "symantec"
//         },
//         "symbolab": {
//             "hex": "#DB3F59",
//             "title": "Symbolab",
//             "slug": "symbolab"
//         },
//         "symfony": {
//             "hex": "#000000",
//             "title": "Symfony",
//             "slug": "symfony"
//         },
//         "symphony": {
//             "hex": "#0098FF",
//             "title": "Symphony",
//             "slug": "symphony"
//         },
//         "sympy": {
//             "hex": "#3B5526",
//             "title": "SymPy",
//             "slug": "sympy"
//         },
//         "syncthing": {
//             "hex": "#0891D1",
//             "title": "Syncthing",
//             "slug": "syncthing"
//         },
//         "synology": {
//             "hex": "#B5B5B6",
//             "title": "Synology",
//             "slug": "synology"
//         },
//         "system76": {
//             "hex": "#585048",
//             "title": "System76",
//             "slug": "system76"
//         },
//         "tabelog": {
//             "hex": "#F2CC38",
//             "title": "Tabelog",
//             "slug": "tabelog"
//         },
//         "tablecheck": {
//             "hex": "#7935D2",
//             "title": "TableCheck",
//             "slug": "tablecheck"
//         },
//         "tacobell": {
//             "hex": "#38096C",
//             "title": "Taco Bell",
//             "slug": "tacobell"
//         },
//         "tado": {
//             "hex": "#FFA900",
//             "title": "tado°",
//             "slug": "tado"
//         },
//         "taichigraphics": {
//             "hex": "#000000",
//             "title": "Taichi Graphics",
//             "slug": "taichigraphics"
//         },
//         "taichilang": {
//             "hex": "#000000",
//             "title": "Taichi Lang",
//             "slug": "taichilang"
//         },
//         "tails": {
//             "hex": "#56347C",
//             "title": "Tails",
//             "slug": "tails"
//         },
//         "tailscale": {
//             "hex": "#242424",
//             "title": "Tailscale",
//             "slug": "tailscale"
//         },
//         "tailwindcss": {
//             "hex": "#06B6D4",
//             "title": "Tailwind CSS",
//             "slug": "tailwindcss"
//         },
//         "taipy": {
//             "hex": "#FF371A",
//             "title": "Taipy",
//             "slug": "taipy"
//         },
//         "taketwointeractivesoftware": {
//             "hex": "#000000",
//             "title": "Take-Two Interactive Software",
//             "slug": "taketwointeractivesoftware"
//         },
//         "talend": {
//             "hex": "#FF6D70",
//             "title": "Talend",
//             "slug": "talend"
//         },
//         "talenthouse": {
//             "hex": "#000000",
//             "title": "Talenthouse",
//             "slug": "talenthouse"
//         },
//         "talos": {
//             "hex": "#FF7300",
//             "title": "Talos",
//             "slug": "talos"
//         },
//         "tamiya": {
//             "hex": "#000000",
//             "title": "Tamiya",
//             "slug": "tamiya"
//         },
//         "tampermonkey": {
//             "hex": "#00485B",
//             "title": "Tampermonkey",
//             "slug": "tampermonkey"
//         },
//         "taobao": {
//             "hex": "#E94F20",
//             "title": "Taobao",
//             "slug": "taobao"
//         },
//         "tapas": {
//             "hex": "#FFCE00",
//             "title": "Tapas",
//             "slug": "tapas"
//         },
//         "target": {
//             "hex": "#CC0000",
//             "title": "Target",
//             "slug": "target"
//         },
//         "tarom": {
//             "hex": "#003366",
//             "title": "TAROM",
//             "slug": "tarom"
//         },
//         "task": {
//             "hex": "#29BEB0",
//             "title": "Task",
//             "slug": "task"
//         },
//         "tasmota": {
//             "hex": "#1FA3EC",
//             "title": "Tasmota",
//             "slug": "tasmota"
//         },
//         "tata": {
//             "hex": "#486AAE",
//             "title": "Tata",
//             "slug": "tata"
//         },
//         "tataconsultancyservices": {
//             "hex": "#EE3984",
//             "title": "Tata Consultancy Services",
//             "slug": "tataconsultancyservices"
//         },
//         "tauri": {
//             "hex": "#24C8D8",
//             "title": "Tauri",
//             "slug": "tauri"
//         },
//         "taxbuzz": {
//             "hex": "#ED8B0B",
//             "title": "TaxBuzz",
//             "slug": "taxbuzz"
//         },
//         "teal": {
//             "hex": "#005149",
//             "title": "Teal",
//             "slug": "teal"
//         },
//         "teamcity": {
//             "hex": "#000000",
//             "title": "TeamCity",
//             "slug": "teamcity"
//         },
//         "teamspeak": {
//             "hex": "#4B69B6",
//             "title": "TeamSpeak",
//             "slug": "teamspeak"
//         },
//         "teamviewer": {
//             "hex": "#050A52",
//             "title": "TeamViewer",
//             "slug": "teamviewer"
//         },
//         "techcrunch": {
//             "hex": "#029F00",
//             "title": "TechCrunch",
//             "slug": "techcrunch"
//         },
//         "ted": {
//             "hex": "#E62B1E",
//             "title": "TED",
//             "slug": "ted"
//         },
//         "teepublic": {
//             "hex": "#4E64DF",
//             "title": "TeePublic",
//             "slug": "teepublic"
//         },
//         "teespring": {
//             "hex": "#ED2761",
//             "title": "Teespring",
//             "slug": "teespring"
//         },
//         "tekton": {
//             "hex": "#FD495C",
//             "title": "Tekton",
//             "slug": "tekton"
//         },
//         "tele5": {
//             "hex": "#FF00FF",
//             "title": "TELE 5",
//             "slug": "tele5"
//         },
//         "telequebec": {
//             "hex": "#1343FB",
//             "title": "Télé-Québec",
//             "slug": "telequebec"
//         },
//         "telefonica": {
//             "hex": "#0066FF",
//             "title": "Telefónica",
//             "slug": "telefonica"
//         },
//         "telegram": {
//             "hex": "#26A5E4",
//             "title": "Telegram",
//             "slug": "telegram"
//         },
//         "telegraph": {
//             "hex": "#FAFAFA",
//             "title": "Telegraph",
//             "slug": "telegraph"
//         },
//         "temporal": {
//             "hex": "#000000",
//             "title": "Temporal",
//             "slug": "temporal"
//         },
//         "tensorflow": {
//             "hex": "#FF6F00",
//             "title": "TensorFlow",
//             "slug": "tensorflow"
//         },
//         "teradata": {
//             "hex": "#F37440",
//             "title": "Teradata",
//             "slug": "teradata"
//         },
//         "teratail": {
//             "hex": "#F4C51C",
//             "title": "teratail",
//             "slug": "teratail"
//         },
//         "termius": {
//             "hex": "#000000",
//             "title": "Termius",
//             "slug": "termius"
//         },
//         "terraform": {
//             "hex": "#844FBA",
//             "title": "Terraform",
//             "slug": "terraform"
//         },
//         "tesco": {
//             "hex": "#00539F",
//             "title": "Tesco",
//             "slug": "tesco"
//         },
//         "tesla": {
//             "hex": "#CC0000",
//             "title": "Tesla",
//             "slug": "tesla"
//         },
//         "testcafe": {
//             "hex": "#36B6E5",
//             "title": "TestCafe",
//             "slug": "testcafe"
//         },
//         "testin": {
//             "hex": "#007DD7",
//             "title": "Testin",
//             "slug": "testin"
//         },
//         "testinglibrary": {
//             "hex": "#E33332",
//             "title": "Testing Library",
//             "slug": "testinglibrary"
//         },
//         "testrail": {
//             "hex": "#65C179",
//             "title": "TestRail",
//             "slug": "testrail"
//         },
//         "tether": {
//             "hex": "#50AF95",
//             "title": "Tether",
//             "slug": "tether"
//         },
//         "textpattern": {
//             "hex": "#FFDA44",
//             "title": "Textpattern",
//             "slug": "textpattern"
//         },
//         "tga": {
//             "hex": "#0014FF",
//             "title": "TGA",
//             "slug": "tga"
//         },
//         "thangs": {
//             "hex": "#FFBC00",
//             "title": "Thangs",
//             "slug": "thangs"
//         },
//         "thanos": {
//             "hex": "#6D41FF",
//             "title": "Thanos",
//             "slug": "thanos"
//         },
//         "thealgorithms": {
//             "hex": "#00BCB4",
//             "title": "The Algorithms",
//             "slug": "thealgorithms"
//         },
//         "theboringcompany": {
//             "hex": "#000000",
//             "title": "The Boring Company",
//             "slug": "theboringcompany"
//         },
//         "theconversation": {
//             "hex": "#D8352A",
//             "title": "The Conversation",
//             "slug": "theconversation"
//         },
//         "thefinals": {
//             "hex": "#D31F3C",
//             "title": "THE FINALS",
//             "slug": "thefinals"
//         },
//         "theguardian": {
//             "hex": "#052962",
//             "title": "The Guardian",
//             "slug": "theguardian"
//         },
//         "theirishtimes": {
//             "hex": "#000000",
//             "title": "The Irish Times",
//             "slug": "theirishtimes"
//         },
//         "themighty": {
//             "hex": "#D0072A",
//             "title": "The Mighty",
//             "slug": "themighty"
//         },
//         "themodelsresource": {
//             "hex": "#3A75BD",
//             "title": "The Models Resource",
//             "slug": "themodelsresource"
//         },
//         "themoviedatabase": {
//             "hex": "#01B4E4",
//             "title": "The Movie Database",
//             "slug": "themoviedatabase"
//         },
//         "thenorthface": {
//             "hex": "#000000",
//             "title": "The North Face",
//             "slug": "thenorthface"
//         },
//         "theodinproject": {
//             "hex": "#A9792B",
//             "title": "The Odin Project",
//             "slug": "theodinproject"
//         },
//         "theregister": {
//             "hex": "#FF0000",
//             "title": "The Register",
//             "slug": "theregister"
//         },
//         "thesoundsresource": {
//             "hex": "#39BE6B",
//             "title": "The Sounds Resource",
//             "slug": "thesoundsresource"
//         },
//         "thespritersresource": {
//             "hex": "#BE3939",
//             "title": "The Spriters Resource",
//             "slug": "thespritersresource"
//         },
//         "thewashingtonpost": {
//             "hex": "#231F20",
//             "title": "The Washington Post",
//             "slug": "thewashingtonpost"
//         },
//         "theweatherchannel": {
//             "hex": "#003399",
//             "title": "The Weather Channel",
//             "slug": "theweatherchannel"
//         },
//         "thingiverse": {
//             "hex": "#248BFB",
//             "title": "Thingiverse",
//             "slug": "thingiverse"
//         },
//         "thinkpad": {
//             "hex": "#EE2624",
//             "title": "ThinkPad",
//             "slug": "thinkpad"
//         },
//         "thirdweb": {
//             "hex": "#F213A4",
//             "title": "thirdweb",
//             "slug": "thirdweb"
//         },
//         "threadless": {
//             "hex": "#0099FF",
//             "title": "Threadless",
//             "slug": "threadless"
//         },
//         "threads": {
//             "hex": "#000000",
//             "title": "Threads",
//             "slug": "threads"
//         },
//         "threedotjs": {
//             "hex": "#000000",
//             "title": "Three.js",
//             "slug": "threedotjs"
//         },
//         "threema": {
//             "hex": "#3FE669",
//             "title": "Threema",
//             "slug": "threema"
//         },
//         "thumbtack": {
//             "hex": "#009FD9",
//             "title": "Thumbtack",
//             "slug": "thumbtack"
//         },
//         "thunderbird": {
//             "hex": "#0A84FF",
//             "title": "Thunderbird",
//             "slug": "thunderbird"
//         },
//         "thunderstore": {
//             "hex": "#23FFB0",
//             "title": "Thunderstore",
//             "slug": "thunderstore"
//         },
//         "thurgauerkantonalbank": {
//             "hex": "#006D41",
//             "title": "Thurgauer Kantonalbank",
//             "slug": "thurgauerkantonalbank"
//         },
//         "thymeleaf": {
//             "hex": "#005F0F",
//             "title": "Thymeleaf",
//             "slug": "thymeleaf"
//         },
//         "ticketmaster": {
//             "hex": "#026CDF",
//             "title": "Ticketmaster",
//             "slug": "ticketmaster"
//         },
//         "ticktick": {
//             "hex": "#4772FA",
//             "title": "TickTick",
//             "slug": "ticktick"
//         },
//         "tidal": {
//             "hex": "#000000",
//             "title": "Tidal",
//             "slug": "tidal"
//         },
//         "tiddlywiki": {
//             "hex": "#111111",
//             "title": "TiddlyWiki",
//             "slug": "tiddlywiki"
//         },
//         "tide": {
//             "hex": "#4050FB",
//             "title": "Tide",
//             "slug": "tide"
//         },
//         "tidyverse": {
//             "hex": "#1A162D",
//             "title": "Tidyverse",
//             "slug": "tidyverse"
//         },
//         "tietoevry": {
//             "hex": "#063752",
//             "title": "TietoEVRY",
//             "slug": "tietoevry"
//         },
//         "tiktok": {
//             "hex": "#000000",
//             "title": "TikTok",
//             "slug": "tiktok"
//         },
//         "tildapublishing": {
//             "hex": "#FFA282",
//             "title": "Tilda Publishing",
//             "slug": "tildapublishing"
//         },
//         "tile": {
//             "hex": "#000000",
//             "title": "Tile",
//             "slug": "tile"
//         },
//         "timescale": {
//             "hex": "#FDB515",
//             "title": "Timescale",
//             "slug": "timescale"
//         },
//         "tina": {
//             "hex": "#EC4815",
//             "title": "Tina",
//             "slug": "tina"
//         },
//         "tinder": {
//             "hex": "#FF6B6B",
//             "title": "Tinder",
//             "slug": "tinder"
//         },
//         "tindie": {
//             "hex": "#17AEB9",
//             "title": "Tindie",
//             "slug": "tindie"
//         },
//         "tinkercad": {
//             "hex": "#1477D1",
//             "title": "Tinkercad",
//             "slug": "tinkercad"
//         },
//         "tinygrad": {
//             "hex": "#FFFFFF",
//             "title": "tinygrad",
//             "slug": "tinygrad"
//         },
//         "tinyletter": {
//             "hex": "#ED1C24",
//             "title": "TinyLetter",
//             "slug": "tinyletter"
//         },
//         "tistory": {
//             "hex": "#000000",
//             "title": "Tistory",
//             "slug": "tistory"
//         },
//         "tldraw": {
//             "hex": "#FAFAFA",
//             "title": "tldraw",
//             "slug": "tldraw"
//         },
//         "tmux": {
//             "hex": "#1BB91F",
//             "title": "tmux",
//             "slug": "tmux"
//         },
//         "todoist": {
//             "hex": "#E44332",
//             "title": "Todoist",
//             "slug": "todoist"
//         },
//         "toggl": {
//             "hex": "#FFDE91",
//             "title": "Toggl",
//             "slug": "toggl"
//         },
//         "toggltrack": {
//             "hex": "#E57CD8",
//             "title": "Toggl Track",
//             "slug": "toggltrack"
//         },
//         "tokyometro": {
//             "hex": "#149DD3",
//             "title": "Tokyo Metro",
//             "slug": "tokyometro"
//         },
//         "toll": {
//             "hex": "#007A68",
//             "title": "Toll",
//             "slug": "toll"
//         },
//         "toml": {
//             "hex": "#9C4121",
//             "title": "TOML",
//             "slug": "toml"
//         },
//         "tomorrowland": {
//             "hex": "#000000",
//             "title": "Tomorrowland",
//             "slug": "tomorrowland"
//         },
//         "tomtom": {
//             "hex": "#DF1B12",
//             "title": "TomTom",
//             "slug": "tomtom"
//         },
//         "ton": {
//             "hex": "#0098EA",
//             "title": "TON",
//             "slug": "ton"
//         },
//         "topdotgg": {
//             "hex": "#FF3366",
//             "title": "Top.gg",
//             "slug": "topdotgg"
//         },
//         "topcoder": {
//             "hex": "#29A7DF",
//             "title": "Topcoder",
//             "slug": "topcoder"
//         },
//         "toptal": {
//             "hex": "#3863A0",
//             "title": "Toptal",
//             "slug": "toptal"
//         },
//         "torbrowser": {
//             "hex": "#7D4698",
//             "title": "Tor Browser",
//             "slug": "torbrowser"
//         },
//         "torproject": {
//             "hex": "#7D4698",
//             "title": "Tor Project",
//             "slug": "torproject"
//         },
//         "toshiba": {
//             "hex": "#FF0000",
//             "title": "Toshiba",
//             "slug": "toshiba"
//         },
//         "totvs": {
//             "hex": "#363636",
//             "title": "TOTVS",
//             "slug": "totvs"
//         },
//         "tourbox": {
//             "hex": "#231F20",
//             "title": "TourBox",
//             "slug": "tourbox"
//         },
//         "tower": {
//             "hex": "#00CAF4",
//             "title": "Tower",
//             "slug": "tower"
//         },
//         "toyota": {
//             "hex": "#EB0A1E",
//             "title": "Toyota",
//             "slug": "toyota"
//         },
//         "tplink": {
//             "hex": "#4ACBD6",
//             "title": "TP-Link",
//             "slug": "tplink"
//         },
//         "tqdm": {
//             "hex": "#FFC107",
//             "title": "tqdm",
//             "slug": "tqdm"
//         },
//         "traccar": {
//             "hex": "#000000",
//             "title": "Traccar",
//             "slug": "traccar"
//         },
//         "tradingview": {
//             "hex": "#131622",
//             "title": "TradingView",
//             "slug": "tradingview"
//         },
//         "traefikmesh": {
//             "hex": "#9D0FB0",
//             "title": "Traefik Mesh",
//             "slug": "traefikmesh"
//         },
//         "traefikproxy": {
//             "hex": "#24A1C1",
//             "title": "Traefik Proxy",
//             "slug": "traefikproxy"
//         },
//         "trailforks": {
//             "hex": "#FFCD00",
//             "title": "Trailforks",
//             "slug": "trailforks"
//         },
//         "trainerroad": {
//             "hex": "#DA291C",
//             "title": "TrainerRoad",
//             "slug": "trainerroad"
//         },
//         "trakt": {
//             "hex": "#ED1C24",
//             "title": "Trakt",
//             "slug": "trakt"
//         },
//         "transifex": {
//             "hex": "#0064AB",
//             "title": "Transifex",
//             "slug": "transifex"
//         },
//         "transmission": {
//             "hex": "#D70008",
//             "title": "Transmission",
//             "slug": "transmission"
//         },
//         "transportforireland": {
//             "hex": "#00B274",
//             "title": "Transport for Ireland",
//             "slug": "transportforireland"
//         },
//         "transportforlondon": {
//             "hex": "#113B92",
//             "title": "Transport for London",
//             "slug": "transportforlondon"
//         },
//         "travisci": {
//             "hex": "#3EAAAF",
//             "title": "Travis CI",
//             "slug": "travisci"
//         },
//         "treehouse": {
//             "hex": "#5FCF80",
//             "title": "Treehouse",
//             "slug": "treehouse"
//         },
//         "trello": {
//             "hex": "#0052CC",
//             "title": "Trello",
//             "slug": "trello"
//         },
//         "trendmicro": {
//             "hex": "#D71921",
//             "title": "Trend Micro",
//             "slug": "trendmicro"
//         },
//         "treyarch": {
//             "hex": "#000000",
//             "title": "Treyarch",
//             "slug": "treyarch"
//         },
//         "tricentis": {
//             "hex": "#12438C",
//             "title": "Tricentis",
//             "slug": "tricentis"
//         },
//         "trilium": {
//             "hex": "#000000",
//             "title": "Trilium",
//             "slug": "trilium"
//         },
//         "triller": {
//             "hex": "#FF0089",
//             "title": "Triller",
//             "slug": "triller"
//         },
//         "trillertv": {
//             "hex": "#E61414",
//             "title": "TrillerTV",
//             "slug": "trillertv"
//         },
//         "trimble": {
//             "hex": "#0063A3",
//             "title": "Trimble",
//             "slug": "trimble"
//         },
//         "trino": {
//             "hex": "#DD00A1",
//             "title": "Trino",
//             "slug": "trino"
//         },
//         "tripdotcom": {
//             "hex": "#287DFA",
//             "title": "Trip.com",
//             "slug": "tripdotcom"
//         },
//         "tripadvisor": {
//             "hex": "#34E0A1",
//             "title": "Tripadvisor",
//             "slug": "tripadvisor"
//         },
//         "trivago": {
//             "hex": "#E32851",
//             "title": "trivago",
//             "slug": "trivago"
//         },
//         "trivy": {
//             "hex": "#1904DA",
//             "title": "Trivy",
//             "slug": "trivy"
//         },
//         "trove": {
//             "hex": "#2D004B",
//             "title": "Trove",
//             "slug": "trove"
//         },
//         "trpc": {
//             "hex": "#2596BE",
//             "title": "tRPC",
//             "slug": "trpc"
//         },
//         "truenas": {
//             "hex": "#0095D5",
//             "title": "TrueNAS",
//             "slug": "truenas"
//         },
//         "trueup": {
//             "hex": "#4E71DA",
//             "title": "TrueUp",
//             "slug": "trueup"
//         },
//         "trulia": {
//             "hex": "#0A0B09",
//             "title": "trulia",
//             "slug": "trulia"
//         },
//         "trustedshops": {
//             "hex": "#FFDC0F",
//             "title": "Trusted Shops",
//             "slug": "trustedshops"
//         },
//         "trustpilot": {
//             "hex": "#00B67A",
//             "title": "Trustpilot",
//             "slug": "trustpilot"
//         },
//         "tryitonline": {
//             "hex": "#303030",
//             "title": "Try It Online",
//             "slug": "tryitonline"
//         },
//         "tryhackme": {
//             "hex": "#212C42",
//             "title": "TryHackMe",
//             "slug": "tryhackme"
//         },
//         "tsnode": {
//             "hex": "#3178C6",
//             "title": "ts-node",
//             "slug": "tsnode"
//         },
//         "tubi": {
//             "hex": "#7408FF",
//             "title": "Tubi",
//             "slug": "tubi"
//         },
//         "tui": {
//             "hex": "#D40E14",
//             "title": "TUI",
//             "slug": "tui"
//         },
//         "tumblr": {
//             "hex": "#36465D",
//             "title": "Tumblr",
//             "slug": "tumblr"
//         },
//         "tunein": {
//             "hex": "#14D8CC",
//             "title": "TuneIn",
//             "slug": "tunein"
//         },
//         "turbo": {
//             "hex": "#5CD8E5",
//             "title": "Turbo",
//             "slug": "turbo"
//         },
//         "turborepo": {
//             "hex": "#EF4444",
//             "title": "Turborepo",
//             "slug": "turborepo"
//         },
//         "turbosquid": {
//             "hex": "#FF8135",
//             "title": "TurboSquid",
//             "slug": "turbosquid"
//         },
//         "turkishairlines": {
//             "hex": "#C70A0C",
//             "title": "Turkish Airlines",
//             "slug": "turkishairlines"
//         },
//         "turso": {
//             "hex": "#4FF8D2",
//             "title": "Turso",
//             "slug": "turso"
//         },
//         "tuta": {
//             "hex": "#850122",
//             "title": "Tuta",
//             "slug": "tuta"
//         },
//         "tvtime": {
//             "hex": "#FFD400",
//             "title": "TV Time",
//             "slug": "tvtime"
//         },
//         "tv4play": {
//             "hex": "#E0001C",
//             "title": "TV4 Play",
//             "slug": "tv4play"
//         },
//         "twilio": {
//             "hex": "#F22F46",
//             "title": "Twilio",
//             "slug": "twilio"
//         },
//         "twinkly": {
//             "hex": "#FCC15E",
//             "title": "Twinkly",
//             "slug": "twinkly"
//         },
//         "twinmotion": {
//             "hex": "#000000",
//             "title": "Twinmotion",
//             "slug": "twinmotion"
//         },
//         "twitch": {
//             "hex": "#9146FF",
//             "title": "Twitch",
//             "slug": "twitch"
//         },
//         "typeform": {
//             "hex": "#262627",
//             "title": "Typeform",
//             "slug": "typeform"
//         },
//         "typeorm": {
//             "hex": "#FE0803",
//             "title": "TypeORM",
//             "slug": "typeorm"
//         },
//         "typer": {
//             "hex": "#000000",
//             "title": "Typer",
//             "slug": "typer"
//         },
//         "typescript": {
//             "hex": "#3178C6",
//             "title": "TypeScript",
//             "slug": "typescript"
//         },
//         "typo3": {
//             "hex": "#FF8700",
//             "title": "TYPO3",
//             "slug": "typo3"
//         },
//         "typst": {
//             "hex": "#239DAD",
//             "title": "Typst",
//             "slug": "typst"
//         },
//         "udotsdotnews": {
//             "hex": "#005EA6",
//             "title": "U.S. News",
//             "slug": "udotsdotnews"
//         },
//         "uber": {
//             "hex": "#000000",
//             "title": "Uber",
//             "slug": "uber"
//         },
//         "ubereats": {
//             "hex": "#06C167",
//             "title": "Uber Eats",
//             "slug": "ubereats"
//         },
//         "ubiquiti": {
//             "hex": "#0559C9",
//             "title": "Ubiquiti",
//             "slug": "ubiquiti"
//         },
//         "ubisoft": {
//             "hex": "#000000",
//             "title": "Ubisoft",
//             "slug": "ubisoft"
//         },
//         "ublockorigin": {
//             "hex": "#800000",
//             "title": "uBlock Origin",
//             "slug": "ublockorigin"
//         },
//         "ubuntu": {
//             "hex": "#E95420",
//             "title": "Ubuntu",
//             "slug": "ubuntu"
//         },
//         "ubuntumate": {
//             "hex": "#84A454",
//             "title": "Ubuntu MATE",
//             "slug": "ubuntumate"
//         },
//         "udacity": {
//             "hex": "#02B3E4",
//             "title": "Udacity",
//             "slug": "udacity"
//         },
//         "udemy": {
//             "hex": "#A435F0",
//             "title": "Udemy",
//             "slug": "udemy"
//         },
//         "ufc": {
//             "hex": "#D20A0A",
//             "title": "UFC",
//             "slug": "ufc"
//         },
//         "uikit": {
//             "hex": "#2396F3",
//             "title": "UIkit",
//             "slug": "uikit"
//         },
//         "uipath": {
//             "hex": "#FA4616",
//             "title": "UiPath",
//             "slug": "uipath"
//         },
//         "ukca": {
//             "hex": "#000000",
//             "title": "UKCA",
//             "slug": "ukca"
//         },
//         "ulule": {
//             "hex": "#18A5D6",
//             "title": "Ulule",
//             "slug": "ulule"
//         },
//         "umami": {
//             "hex": "#000000",
//             "title": "Umami",
//             "slug": "umami"
//         },
//         "umbraco": {
//             "hex": "#3544B1",
//             "title": "Umbraco",
//             "slug": "umbraco"
//         },
//         "uml": {
//             "hex": "#FABD14",
//             "title": "UML",
//             "slug": "uml"
//         },
//         "unacademy": {
//             "hex": "#08BD80",
//             "title": "Unacademy",
//             "slug": "unacademy"
//         },
//         "underarmour": {
//             "hex": "#1D1D1D",
//             "title": "Under Armour",
//             "slug": "underarmour"
//         },
//         "underscoredotjs": {
//             "hex": "#0371B5",
//             "title": "Underscore.js",
//             "slug": "underscoredotjs"
//         },
//         "undertale": {
//             "hex": "#E71D29",
//             "title": "Undertale",
//             "slug": "undertale"
//         },
//         "unicode": {
//             "hex": "#5455FE",
//             "title": "Unicode",
//             "slug": "unicode"
//         },
//         "unilever": {
//             "hex": "#1F36C7",
//             "title": "Unilever",
//             "slug": "unilever"
//         },
//         "uniqlo": {
//             "hex": "#FF0000",
//             "title": "Uniqlo",
//             "slug": "uniqlo"
//         },
//         "unitedairlines": {
//             "hex": "#002244",
//             "title": "United Airlines",
//             "slug": "unitedairlines"
//         },
//         "unitednations": {
//             "hex": "#009EDB",
//             "title": "United Nations",
//             "slug": "unitednations"
//         },
//         "unity": {
//             "hex": "#FFFFFF",
//             "title": "Unity",
//             "slug": "unity"
//         },
//         "unjs": {
//             "hex": "#ECDC5A",
//             "title": "UnJS",
//             "slug": "unjs"
//         },
//         "unlicense": {
//             "hex": "#808080",
//             "title": "Unlicense",
//             "slug": "unlicense"
//         },
//         "unocss": {
//             "hex": "#333333",
//             "title": "UnoCSS",
//             "slug": "unocss"
//         },
//         "unpkg": {
//             "hex": "#000000",
//             "title": "unpkg",
//             "slug": "unpkg"
//         },
//         "unraid": {
//             "hex": "#F15A2C",
//             "title": "Unraid",
//             "slug": "unraid"
//         },
//         "unrealengine": {
//             "hex": "#0E1128",
//             "title": "Unreal Engine",
//             "slug": "unrealengine"
//         },
//         "unsplash": {
//             "hex": "#000000",
//             "title": "Unsplash",
//             "slug": "unsplash"
//         },
//         "untappd": {
//             "hex": "#FFC000",
//             "title": "Untappd",
//             "slug": "untappd"
//         },
//         "upcloud": {
//             "hex": "#7B00FF",
//             "title": "UpCloud",
//             "slug": "upcloud"
//         },
//         "uphold": {
//             "hex": "#49CC68",
//             "title": "Uphold",
//             "slug": "uphold"
//         },
//         "uplabs": {
//             "hex": "#3930D8",
//             "title": "UpLabs",
//             "slug": "uplabs"
//         },
//         "upptime": {
//             "hex": "#1ABC9C",
//             "title": "Upptime",
//             "slug": "upptime"
//         },
//         "ups": {
//             "hex": "#150400",
//             "title": "UPS",
//             "slug": "ups"
//         },
//         "upstash": {
//             "hex": "#00E9A3",
//             "title": "Upstash",
//             "slug": "upstash"
//         },
//         "uptimekuma": {
//             "hex": "#5CDD8B",
//             "title": "Uptime Kuma",
//             "slug": "uptimekuma"
//         },
//         "upwork": {
//             "hex": "#6FDA44",
//             "title": "Upwork",
//             "slug": "upwork"
//         },
//         "usps": {
//             "hex": "#333366",
//             "title": "USPS",
//             "slug": "usps"
//         },
//         "utorrent": {
//             "hex": "#76B83F",
//             "title": "uTorrent",
//             "slug": "utorrent"
//         },
//         "uv": {
//             "hex": "#DE5FE9",
//             "title": "uv",
//             "slug": "uv"
//         },
//         "v": {
//             "hex": "#5D87BF",
//             "title": "V",
//             "slug": "v"
//         },
//         "v2ex": {
//             "hex": "#1F1F1F",
//             "title": "V2EX",
//             "slug": "v2ex"
//         },
//         "v8": {
//             "hex": "#4B8BF5",
//             "title": "V8",
//             "slug": "v8"
//         },
//         "vaadin": {
//             "hex": "#00B4F0",
//             "title": "Vaadin",
//             "slug": "vaadin"
//         },
//         "vagrant": {
//             "hex": "#1868F2",
//             "title": "Vagrant",
//             "slug": "vagrant"
//         },
//         "vala": {
//             "hex": "#7239B3",
//             "title": "Vala",
//             "slug": "vala"
//         },
//         "valorant": {
//             "hex": "#FA4454",
//             "title": "Valorant",
//             "slug": "valorant"
//         },
//         "valve": {
//             "hex": "#F74843",
//             "title": "Valve",
//             "slug": "valve"
//         },
//         "vapor": {
//             "hex": "#0D0D0D",
//             "title": "Vapor",
//             "slug": "vapor"
//         },
//         "vault": {
//             "hex": "#FFEC6E",
//             "title": "Vault",
//             "slug": "vault"
//         },
//         "vaultwarden": {
//             "hex": "#000000",
//             "title": "Vaultwarden",
//             "slug": "vaultwarden"
//         },
//         "vauxhall": {
//             "hex": "#EB001E",
//             "title": "Vauxhall",
//             "slug": "vauxhall"
//         },
//         "vbulletin": {
//             "hex": "#184D66",
//             "title": "vBulletin",
//             "slug": "vbulletin"
//         },
//         "vectary": {
//             "hex": "#6100FF",
//             "title": "Vectary",
//             "slug": "vectary"
//         },
//         "vectorlogozone": {
//             "hex": "#184D66",
//             "title": "Vector Logo Zone",
//             "slug": "vectorlogozone"
//         },
//         "vectorworks": {
//             "hex": "#000000",
//             "title": "Vectorworks",
//             "slug": "vectorworks"
//         },
//         "veeam": {
//             "hex": "#00B336",
//             "title": "Veeam",
//             "slug": "veeam"
//         },
//         "veed": {
//             "hex": "#B6FF60",
//             "title": "VEED",
//             "slug": "veed"
//         },
//         "veepee": {
//             "hex": "#EC008C",
//             "title": "Veepee",
//             "slug": "veepee"
//         },
//         "vega": {
//             "hex": "#2450B2",
//             "title": "Vega",
//             "slug": "vega"
//         },
//         "vegas": {
//             "hex": "#1A1A1A",
//             "title": "VEGAS",
//             "slug": "vegas"
//         },
//         "velog": {
//             "hex": "#20C997",
//             "title": "Velog",
//             "slug": "velog"
//         },
//         "vencord": {
//             "hex": "#D3859B",
//             "title": "Vencord",
//             "slug": "vencord"
//         },
//         "venmo": {
//             "hex": "#008CFF",
//             "title": "Venmo",
//             "slug": "venmo"
//         },
//         "vercel": {
//             "hex": "#000000",
//             "title": "Vercel",
//             "slug": "vercel"
//         },
//         "verdaccio": {
//             "hex": "#4B5E40",
//             "title": "Verdaccio",
//             "slug": "verdaccio"
//         },
//         "veritas": {
//             "hex": "#B1181E",
//             "title": "Veritas",
//             "slug": "veritas"
//         },
//         "verizon": {
//             "hex": "#CD040B",
//             "title": "Verizon",
//             "slug": "verizon"
//         },
//         "vespa": {
//             "hex": "#85B09A",
//             "title": "Vespa",
//             "slug": "vespa"
//         },
//         "vestel": {
//             "hex": "#DD052B",
//             "title": "Vestel",
//             "slug": "vestel"
//         },
//         "vexxhost": {
//             "hex": "#2A1659",
//             "title": "VEXXHOST",
//             "slug": "vexxhost"
//         },
//         "vfairs": {
//             "hex": "#EF4678",
//             "title": "vFairs",
//             "slug": "vfairs"
//         },
//         "viadeo": {
//             "hex": "#F07355",
//             "title": "Viadeo",
//             "slug": "viadeo"
//         },
//         "viaplay": {
//             "hex": "#FE365F",
//             "title": "Viaplay",
//             "slug": "viaplay"
//         },
//         "viber": {
//             "hex": "#7360F2",
//             "title": "Viber",
//             "slug": "viber"
//         },
//         "viblo": {
//             "hex": "#5387C6",
//             "title": "Viblo",
//             "slug": "viblo"
//         },
//         "victoriametrics": {
//             "hex": "#621773",
//             "title": "VictoriaMetrics",
//             "slug": "victoriametrics"
//         },
//         "victronenergy": {
//             "hex": "#0066B2",
//             "title": "Victron Energy",
//             "slug": "victronenergy"
//         },
//         "vim": {
//             "hex": "#019733",
//             "title": "Vim",
//             "slug": "vim"
//         },
//         "vimeo": {
//             "hex": "#1AB7EA",
//             "title": "Vimeo",
//             "slug": "vimeo"
//         },
//         "vimeolivestream": {
//             "hex": "#0A0A20",
//             "title": "Vimeo Livestream",
//             "slug": "vimeolivestream"
//         },
//         "virgin": {
//             "hex": "#E10A0A",
//             "title": "Virgin",
//             "slug": "virgin"
//         },
//         "virginatlantic": {
//             "hex": "#DA0530",
//             "title": "Virgin Atlantic",
//             "slug": "virginatlantic"
//         },
//         "virginmedia": {
//             "hex": "#ED1A37",
//             "title": "Virgin Media",
//             "slug": "virginmedia"
//         },
//         "virtualbox": {
//             "hex": "#2F61B4",
//             "title": "VirtualBox",
//             "slug": "virtualbox"
//         },
//         "virustotal": {
//             "hex": "#394EFF",
//             "title": "VirusTotal",
//             "slug": "virustotal"
//         },
//         "visa": {
//             "hex": "#1A1F71",
//             "title": "Visa",
//             "slug": "visa"
//         },
//         "visx": {
//             "hex": "#FF1231",
//             "title": "visx",
//             "slug": "visx"
//         },
//         "vite": {
//             "hex": "#646CFF",
//             "title": "Vite",
//             "slug": "vite"
//         },
//         "vitepress": {
//             "hex": "#5C73E7",
//             "title": "VitePress",
//             "slug": "vitepress"
//         },
//         "vitess": {
//             "hex": "#F16728",
//             "title": "Vitess",
//             "slug": "vitess"
//         },
//         "vitest": {
//             "hex": "#6E9F18",
//             "title": "Vitest",
//             "slug": "vitest"
//         },
//         "vivawallet": {
//             "hex": "#1F263A",
//             "title": "Viva Wallet",
//             "slug": "vivawallet"
//         },
//         "vivaldi": {
//             "hex": "#EF3939",
//             "title": "Vivaldi",
//             "slug": "vivaldi"
//         },
//         "vivino": {
//             "hex": "#A61A30",
//             "title": "Vivino",
//             "slug": "vivino"
//         },
//         "vivint": {
//             "hex": "#212721",
//             "title": "Vivint",
//             "slug": "vivint"
//         },
//         "vivo": {
//             "hex": "#415FFF",
//             "title": "vivo",
//             "slug": "vivo"
//         },
//         "vk": {
//             "hex": "#0077FF",
//             "title": "VK",
//             "slug": "vk"
//         },
//         "vlcmediaplayer": {
//             "hex": "#FF8800",
//             "title": "VLC media player",
//             "slug": "vlcmediaplayer"
//         },
//         "vmware": {
//             "hex": "#607078",
//             "title": "VMware",
//             "slug": "vmware"
//         },
//         "vodafone": {
//             "hex": "#E60000",
//             "title": "Vodafone",
//             "slug": "vodafone"
//         },
//         "voidlinux": {
//             "hex": "#478061",
//             "title": "Void Linux",
//             "slug": "voidlinux"
//         },
//         "voipdotms": {
//             "hex": "#E1382D",
//             "title": "VoIP.ms",
//             "slug": "voipdotms"
//         },
//         "volkswagen": {
//             "hex": "#151F5D",
//             "title": "Volkswagen",
//             "slug": "volkswagen"
//         },
//         "volvo": {
//             "hex": "#003057",
//             "title": "Volvo",
//             "slug": "volvo"
//         },
//         "vonage": {
//             "hex": "#000000",
//             "title": "Vonage",
//             "slug": "vonage"
//         },
//         "vorondesign": {
//             "hex": "#ED3023",
//             "title": "Voron Design",
//             "slug": "vorondesign"
//         },
//         "vowpalwabbit": {
//             "hex": "#FF81F9",
//             "title": "Vowpal Wabbit",
//             "slug": "vowpalwabbit"
//         },
//         "vox": {
//             "hex": "#DA074A",
//             "title": "VOX",
//             "slug": "vox"
//         },
//         "vrchat": {
//             "hex": "#000000",
//             "title": "VRChat",
//             "slug": "vrchat"
//         },
//         "vsco": {
//             "hex": "#000000",
//             "title": "VSCO",
//             "slug": "vsco"
//         },
//         "vscodium": {
//             "hex": "#2F80ED",
//             "title": "VSCodium",
//             "slug": "vscodium"
//         },
//         "vtex": {
//             "hex": "#ED125F",
//             "title": "VTEX",
//             "slug": "vtex"
//         },
//         "vuedotjs": {
//             "hex": "#4FC08D",
//             "title": "Vue.js",
//             "slug": "vuedotjs"
//         },
//         "vuetify": {
//             "hex": "#1867C0",
//             "title": "Vuetify",
//             "slug": "vuetify"
//         },
//         "vulkan": {
//             "hex": "#A41E22",
//             "title": "Vulkan",
//             "slug": "vulkan"
//         },
//         "vultr": {
//             "hex": "#007BFC",
//             "title": "Vultr",
//             "slug": "vultr"
//         },
//         "vyond": {
//             "hex": "#D95E26",
//             "title": "Vyond",
//             "slug": "vyond"
//         },
//         "w3schools": {
//             "hex": "#04AA6D",
//             "title": "W3Schools",
//             "slug": "w3schools"
//         },
//         "wacom": {
//             "hex": "#000000",
//             "title": "Wacom",
//             "slug": "wacom"
//         },
//         "wagmi": {
//             "hex": "#000000",
//             "title": "Wagmi",
//             "slug": "wagmi"
//         },
//         "wagtail": {
//             "hex": "#43B1B0",
//             "title": "Wagtail",
//             "slug": "wagtail"
//         },
//         "wails": {
//             "hex": "#DF0000",
//             "title": "Wails",
//             "slug": "wails"
//         },
//         "wakatime": {
//             "hex": "#000000",
//             "title": "WakaTime",
//             "slug": "wakatime"
//         },
//         "walkman": {
//             "hex": "#000000",
//             "title": "WALKMAN",
//             "slug": "walkman"
//         },
//         "wallabag": {
//             "hex": "#3F6184",
//             "title": "Wallabag",
//             "slug": "wallabag"
//         },
//         "walletconnect": {
//             "hex": "#3B99FC",
//             "title": "WalletConnect",
//             "slug": "walletconnect"
//         },
//         "walmart": {
//             "hex": "#0071CE",
//             "title": "Walmart",
//             "slug": "walmart"
//         },
//         "wantedly": {
//             "hex": "#21BDDB",
//             "title": "Wantedly",
//             "slug": "wantedly"
//         },
//         "wappalyzer": {
//             "hex": "#4608AD",
//             "title": "Wappalyzer",
//             "slug": "wappalyzer"
//         },
//         "warnerbrosdot": {
//             "hex": "#004DB4",
//             "title": "Warner Bros.",
//             "slug": "warnerbrosdot"
//         },
//         "warp": {
//             "hex": "#01A4FF",
//             "title": "Warp",
//             "slug": "warp"
//         },
//         "wasabi": {
//             "hex": "#01CD3E",
//             "title": "Wasabi",
//             "slug": "wasabi"
//         },
//         "wasmcloud": {
//             "hex": "#00BC8E",
//             "title": "wasmCloud",
//             "slug": "wasmcloud"
//         },
//         "wasmer": {
//             "hex": "#4946DD",
//             "title": "Wasmer",
//             "slug": "wasmer"
//         },
//         "watchtower": {
//             "hex": "#416271",
//             "title": "Watchtower",
//             "slug": "watchtower"
//         },
//         "wattpad": {
//             "hex": "#FF500A",
//             "title": "Wattpad",
//             "slug": "wattpad"
//         },
//         "wayland": {
//             "hex": "#FFBC00",
//             "title": "Wayland",
//             "slug": "wayland"
//         },
//         "waze": {
//             "hex": "#33CCFF",
//             "title": "Waze",
//             "slug": "waze"
//         },
//         "wazirx": {
//             "hex": "#3067F0",
//             "title": "WazirX",
//             "slug": "wazirx"
//         },
//         "wearos": {
//             "hex": "#4285F4",
//             "title": "Wear OS",
//             "slug": "wearos"
//         },
//         "weasyl": {
//             "hex": "#990000",
//             "title": "Weasyl",
//             "slug": "weasyl"
//         },
//         "webdotde": {
//             "hex": "#FFD800",
//             "title": "WEB.DE",
//             "slug": "webdotde"
//         },
//         "web3dotjs": {
//             "hex": "#F16822",
//             "title": "Web3.js",
//             "slug": "web3dotjs"
//         },
//         "webassembly": {
//             "hex": "#654FF0",
//             "title": "WebAssembly",
//             "slug": "webassembly"
//         },
//         "webauthn": {
//             "hex": "#3423A6",
//             "title": "WebAuthn",
//             "slug": "webauthn"
//         },
//         "webcomponentsdotorg": {
//             "hex": "#29ABE2",
//             "title": "webcomponents.org",
//             "slug": "webcomponentsdotorg"
//         },
//         "webdriverio": {
//             "hex": "#EA5906",
//             "title": "WebdriverIO",
//             "slug": "webdriverio"
//         },
//         "webex": {
//             "hex": "#000000",
//             "title": "Webex",
//             "slug": "webex"
//         },
//         "webflow": {
//             "hex": "#146EF5",
//             "title": "Webflow",
//             "slug": "webflow"
//         },
//         "webgl": {
//             "hex": "#990000",
//             "title": "WebGL",
//             "slug": "webgl"
//         },
//         "webgpu": {
//             "hex": "#005A9C",
//             "title": "WebGPU",
//             "slug": "webgpu"
//         },
//         "weblate": {
//             "hex": "#2ECCAA",
//             "title": "Weblate",
//             "slug": "weblate"
//         },
//         "webmin": {
//             "hex": "#7DA0D0",
//             "title": "Webmin",
//             "slug": "webmin"
//         },
//         "webmoney": {
//             "hex": "#036CB5",
//             "title": "WebMoney",
//             "slug": "webmoney"
//         },
//         "webpack": {
//             "hex": "#8DD6F9",
//             "title": "Webpack",
//             "slug": "webpack"
//         },
//         "webrtc": {
//             "hex": "#333333",
//             "title": "WebRTC",
//             "slug": "webrtc"
//         },
//         "webstorm": {
//             "hex": "#000000",
//             "title": "WebStorm",
//             "slug": "webstorm"
//         },
//         "webtoon": {
//             "hex": "#00D564",
//             "title": "WEBTOON",
//             "slug": "webtoon"
//         },
//         "webtrees": {
//             "hex": "#2694E8",
//             "title": "webtrees",
//             "slug": "webtrees"
//         },
//         "wechat": {
//             "hex": "#07C160",
//             "title": "WeChat",
//             "slug": "wechat"
//         },
//         "wegame": {
//             "hex": "#FAAB00",
//             "title": "WeGame",
//             "slug": "wegame"
//         },
//         "weightsandbiases": {
//             "hex": "#FFBE00",
//             "title": "Weights & Biases",
//             "slug": "weightsandbiases"
//         },
//         "welcometothejungle": {
//             "hex": "#FFCD00",
//             "title": "Welcome to the Jungle",
//             "slug": "welcometothejungle"
//         },
//         "wellfound": {
//             "hex": "#000000",
//             "title": "Wellfound",
//             "slug": "wellfound"
//         },
//         "wellsfargo": {
//             "hex": "#D71E28",
//             "title": "Wells Fargo",
//             "slug": "wellsfargo"
//         },
//         "wemo": {
//             "hex": "#72D44C",
//             "title": "WEMO",
//             "slug": "wemo"
//         },
//         "westerndigital": {
//             "hex": "#995DFF",
//             "title": "Western Digital",
//             "slug": "westerndigital"
//         },
//         "westernunion": {
//             "hex": "#FFDD00",
//             "title": "Western Union",
//             "slug": "westernunion"
//         },
//         "wetransfer": {
//             "hex": "#409FFF",
//             "title": "WeTransfer",
//             "slug": "wetransfer"
//         },
//         "wezterm": {
//             "hex": "#4E49EE",
//             "title": "WezTerm",
//             "slug": "wezterm"
//         },
//         "wgpu": {
//             "hex": "#40E0D0",
//             "title": "wgpu",
//             "slug": "wgpu"
//         },
//         "whatsapp": {
//             "hex": "#25D366",
//             "title": "WhatsApp",
//             "slug": "whatsapp"
//         },
//         "wheniwork": {
//             "hex": "#51A33D",
//             "title": "When I Work",
//             "slug": "wheniwork"
//         },
//         "wikidotgg": {
//             "hex": "#FF1985",
//             "title": "wiki.gg",
//             "slug": "wikidotgg"
//         },
//         "wikidotjs": {
//             "hex": "#1976D2",
//             "title": "Wiki.js",
//             "slug": "wikidotjs"
//         },
//         "wikibooks": {
//             "hex": "#006699",
//             "title": "Wikibooks",
//             "slug": "wikibooks"
//         },
//         "wikidata": {
//             "hex": "#006699",
//             "title": "Wikidata",
//             "slug": "wikidata"
//         },
//         "wikimediacommons": {
//             "hex": "#006699",
//             "title": "Wikimedia Commons",
//             "slug": "wikimediacommons"
//         },
//         "wikimediafoundation": {
//             "hex": "#000000",
//             "title": "Wikimedia Foundation",
//             "slug": "wikimediafoundation"
//         },
//         "wikipedia": {
//             "hex": "#000000",
//             "title": "Wikipedia",
//             "slug": "wikipedia"
//         },
//         "wikiquote": {
//             "hex": "#006699",
//             "title": "Wikiquote",
//             "slug": "wikiquote"
//         },
//         "wikiversity": {
//             "hex": "#00649A",
//             "title": "Wikiversity",
//             "slug": "wikiversity"
//         },
//         "wikivoyage": {
//             "hex": "#006699",
//             "title": "Wikivoyage",
//             "slug": "wikivoyage"
//         },
//         "winamp": {
//             "hex": "#F93821",
//             "title": "Winamp",
//             "slug": "winamp"
//         },
//         "wine": {
//             "hex": "#800000",
//             "title": "Wine",
//             "slug": "wine"
//         },
//         "wipro": {
//             "hex": "#341C53",
//             "title": "Wipro",
//             "slug": "wipro"
//         },
//         "wire": {
//             "hex": "#000000",
//             "title": "Wire",
//             "slug": "wire"
//         },
//         "wireguard": {
//             "hex": "#88171A",
//             "title": "WireGuard",
//             "slug": "wireguard"
//         },
//         "wireshark": {
//             "hex": "#1679A7",
//             "title": "Wireshark",
//             "slug": "wireshark"
//         },
//         "wise": {
//             "hex": "#9FE870",
//             "title": "Wise",
//             "slug": "wise"
//         },
//         "wish": {
//             "hex": "#32E476",
//             "title": "Wish",
//             "slug": "wish"
//         },
//         "wistia": {
//             "hex": "#58B7FE",
//             "title": "Wistia",
//             "slug": "wistia"
//         },
//         "wix": {
//             "hex": "#0C6EFC",
//             "title": "Wix",
//             "slug": "wix"
//         },
//         "wizzair": {
//             "hex": "#C6007E",
//             "title": "Wizz Air",
//             "slug": "wizzair"
//         },
//         "wolfram": {
//             "hex": "#DD1100",
//             "title": "Wolfram",
//             "slug": "wolfram"
//         },
//         "wolframlanguage": {
//             "hex": "#DD1100",
//             "title": "Wolfram Language",
//             "slug": "wolframlanguage"
//         },
//         "wolframmathematica": {
//             "hex": "#DD1100",
//             "title": "Wolfram Mathematica",
//             "slug": "wolframmathematica"
//         },
//         "wondershare": {
//             "hex": "#000000",
//             "title": "Wondershare",
//             "slug": "wondershare"
//         },
//         "wondersharefilmora": {
//             "hex": "#07273D",
//             "title": "Wondershare Filmora",
//             "slug": "wondersharefilmora"
//         },
//         "woo": {
//             "hex": "#96588A",
//             "title": "Woo",
//             "slug": "woo"
//         },
//         "woocommerce": {
//             "hex": "#96588A",
//             "title": "WooCommerce",
//             "slug": "woocommerce"
//         },
//         "wordpress": {
//             "hex": "#21759B",
//             "title": "WordPress",
//             "slug": "wordpress"
//         },
//         "workplace": {
//             "hex": "#4526CE",
//             "title": "Workplace",
//             "slug": "workplace"
//         },
//         "worldhealthorganization": {
//             "hex": "#0093D5",
//             "title": "World Health Organization",
//             "slug": "worldhealthorganization"
//         },
//         "wpengine": {
//             "hex": "#0ECAD4",
//             "title": "WP Engine",
//             "slug": "wpengine"
//         },
//         "wprocket": {
//             "hex": "#F56640",
//             "title": "WP Rocket",
//             "slug": "wprocket"
//         },
//         "wpexplorer": {
//             "hex": "#2563EB",
//             "title": "WPExplorer",
//             "slug": "wpexplorer"
//         },
//         "writedotas": {
//             "hex": "#5AC4EE",
//             "title": "Write.as",
//             "slug": "writedotas"
//         },
//         "wwe": {
//             "hex": "#000000",
//             "title": "WWE",
//             "slug": "wwe"
//         },
//         "wwise": {
//             "hex": "#00549F",
//             "title": "Wwise",
//             "slug": "wwise"
//         },
//         "wykop": {
//             "hex": "#367DA9",
//             "title": "Wykop",
//             "slug": "wykop"
//         },
//         "wyze": {
//             "hex": "#1DF0BB",
//             "title": "Wyze",
//             "slug": "wyze"
//         },
//         "x": {
//             "hex": "#000000",
//             "title": "X",
//             "slug": "x"
//         },
//         "xdotorg": {
//             "hex": "#F28834",
//             "title": "X.Org",
//             "slug": "xdotorg"
//         },
//         "xampp": {
//             "hex": "#FB7A24",
//             "title": "XAMPP",
//             "slug": "xampp"
//         },
//         "xcode": {
//             "hex": "#147EFB",
//             "title": "Xcode",
//             "slug": "xcode"
//         },
//         "xdadevelopers": {
//             "hex": "#EA7100",
//             "title": "XDA Developers",
//             "slug": "xdadevelopers"
//         },
//         "xendit": {
//             "hex": "#4573FF",
//             "title": "Xendit",
//             "slug": "xendit"
//         },
//         "xero": {
//             "hex": "#13B5EA",
//             "title": "Xero",
//             "slug": "xero"
//         },
//         "xfce": {
//             "hex": "#2284F2",
//             "title": "XFCE",
//             "slug": "xfce"
//         },
//         "xiaohongshu": {
//             "hex": "#FF2442",
//             "title": "Xiaohongshu",
//             "slug": "xiaohongshu"
//         },
//         "xiaomi": {
//             "hex": "#FF6900",
//             "title": "Xiaomi",
//             "slug": "xiaomi"
//         },
//         "xing": {
//             "hex": "#006567",
//             "title": "Xing",
//             "slug": "xing"
//         },
//         "xml": {
//             "hex": "#005FAD",
//             "title": "XML",
//             "slug": "xml"
//         },
//         "xmpp": {
//             "hex": "#002B5C",
//             "title": "XMPP",
//             "slug": "xmpp"
//         },
//         "xo": {
//             "hex": "#5ED9C7",
//             "title": "XO",
//             "slug": "xo"
//         },
//         "xrp": {
//             "hex": "#25A768",
//             "title": "XRP",
//             "slug": "xrp"
//         },
//         "xsplit": {
//             "hex": "#0095DE",
//             "title": "XSplit",
//             "slug": "xsplit"
//         },
//         "xstate": {
//             "hex": "#2C3E50",
//             "title": "XState",
//             "slug": "xstate"
//         },
//         "xubuntu": {
//             "hex": "#0044AA",
//             "title": "Xubuntu",
//             "slug": "xubuntu"
//         },
//         "ycombinator": {
//             "hex": "#F0652F",
//             "title": "Y Combinator",
//             "slug": "ycombinator"
//         },
//         "yabai": {
//             "hex": "#00364B",
//             "title": "yabai",
//             "slug": "yabai"
//         },
//         "yale": {
//             "hex": "#FFD900",
//             "title": "Yale",
//             "slug": "yale"
//         },
//         "yamahacorporation": {
//             "hex": "#4B1E78",
//             "title": "Yamaha Corporation",
//             "slug": "yamahacorporation"
//         },
//         "yamahamotorcorporation": {
//             "hex": "#E60012",
//             "title": "Yamaha Motor Corporation",
//             "slug": "yamahamotorcorporation"
//         },
//         "yaml": {
//             "hex": "#CB171E",
//             "title": "YAML",
//             "slug": "yaml"
//         },
//         "yandexcloud": {
//             "hex": "#5282FF",
//             "title": "Yandex Cloud",
//             "slug": "yandexcloud"
//         },
//         "yarn": {
//             "hex": "#2C8EBB",
//             "title": "Yarn",
//             "slug": "yarn"
//         },
//         "yelp": {
//             "hex": "#FF1A1A",
//             "title": "Yelp",
//             "slug": "yelp"
//         },
//         "yeti": {
//             "hex": "#00263C",
//             "title": "Yeti",
//             "slug": "yeti"
//         },
//         "yii": {
//             "hex": "#40B3D8",
//             "title": "Yii",
//             "slug": "yii"
//         },
//         "yoast": {
//             "hex": "#A61E69",
//             "title": "Yoast",
//             "slug": "yoast"
//         },
//         "youhodler": {
//             "hex": "#546DF9",
//             "title": "YouHodler",
//             "slug": "youhodler"
//         },
//         "youtube": {
//             "hex": "#FF0000",
//             "title": "YouTube",
//             "slug": "youtube"
//         },
//         "youtubegaming": {
//             "hex": "#FF0000",
//             "title": "YouTube Gaming",
//             "slug": "youtubegaming"
//         },
//         "youtubekids": {
//             "hex": "#FF0000",
//             "title": "YouTube Kids",
//             "slug": "youtubekids"
//         },
//         "youtubemusic": {
//             "hex": "#FF0000",
//             "title": "YouTube Music",
//             "slug": "youtubemusic"
//         },
//         "youtubeshorts": {
//             "hex": "#FF0000",
//             "title": "YouTube Shorts",
//             "slug": "youtubeshorts"
//         },
//         "youtubestudio": {
//             "hex": "#FF0000",
//             "title": "YouTube Studio",
//             "slug": "youtubestudio"
//         },
//         "youtubetv": {
//             "hex": "#FF0000",
//             "title": "YouTube TV",
//             "slug": "youtubetv"
//         },
//         "yr": {
//             "hex": "#00B9F1",
//             "title": "Yr",
//             "slug": "yr"
//         },
//         "yubico": {
//             "hex": "#84BD00",
//             "title": "Yubico",
//             "slug": "yubico"
//         },
//         "yunohost": {
//             "hex": "#000000",
//             "title": "YunoHost",
//             "slug": "yunohost"
//         },
//         "zabka": {
//             "hex": "#006420",
//             "title": "Żabka",
//             "slug": "zabka"
//         },
//         "zaim": {
//             "hex": "#50A135",
//             "title": "Zaim",
//             "slug": "zaim"
//         },
//         "zalando": {
//             "hex": "#FF6900",
//             "title": "Zalando",
//             "slug": "zalando"
//         },
//         "zalo": {
//             "hex": "#0068FF",
//             "title": "Zalo",
//             "slug": "zalo"
//         },
//         "zap": {
//             "hex": "#00549E",
//             "title": "ZAP",
//             "slug": "zap"
//         },
//         "zapier": {
//             "hex": "#FF4F00",
//             "title": "Zapier",
//             "slug": "zapier"
//         },
//         "zara": {
//             "hex": "#000000",
//             "title": "Zara",
//             "slug": "zara"
//         },
//         "zazzle": {
//             "hex": "#212121",
//             "title": "Zazzle",
//             "slug": "zazzle"
//         },
//         "zcash": {
//             "hex": "#F3B724",
//             "title": "Zcash",
//             "slug": "zcash"
//         },
//         "zcool": {
//             "hex": "#FFF200",
//             "title": "ZCOOL",
//             "slug": "zcool"
//         },
//         "zdf": {
//             "hex": "#FA7D19",
//             "title": "ZDF",
//             "slug": "zdf"
//         },
//         "zebpay": {
//             "hex": "#2072EF",
//             "title": "ZebPay",
//             "slug": "zebpay"
//         },
//         "zebratechnologies": {
//             "hex": "#000000",
//             "title": "Zebra Technologies",
//             "slug": "zebratechnologies"
//         },
//         "zedindustries": {
//             "hex": "#084CCF",
//             "title": "Zed Industries",
//             "slug": "zedindustries"
//         },
//         "zelle": {
//             "hex": "#6D1ED4",
//             "title": "Zelle",
//             "slug": "zelle"
//         },
//         "zend": {
//             "hex": "#0679EA",
//             "title": "Zend",
//             "slug": "zend"
//         },
//         "zendesk": {
//             "hex": "#03363D",
//             "title": "Zendesk",
//             "slug": "zendesk"
//         },
//         "zenn": {
//             "hex": "#3EA8FF",
//             "title": "Zenn",
//             "slug": "zenn"
//         },
//         "zenodo": {
//             "hex": "#1682D4",
//             "title": "Zenodo",
//             "slug": "zenodo"
//         },
//         "zensar": {
//             "hex": "#000000",
//             "title": "Zensar",
//             "slug": "zensar"
//         },
//         "zerodha": {
//             "hex": "#387ED1",
//             "title": "Zerodha",
//             "slug": "zerodha"
//         },
//         "zerotier": {
//             "hex": "#FFB441",
//             "title": "ZeroTier",
//             "slug": "zerotier"
//         },
//         "zettlr": {
//             "hex": "#1CB27E",
//             "title": "Zettlr",
//             "slug": "zettlr"
//         },
//         "zhihu": {
//             "hex": "#0084FF",
//             "title": "Zhihu",
//             "slug": "zhihu"
//         },
//         "zig": {
//             "hex": "#F7A41D",
//             "title": "Zig",
//             "slug": "zig"
//         },
//         "zigbee": {
//             "hex": "#EB0443",
//             "title": "Zigbee",
//             "slug": "zigbee"
//         },
//         "zigbee2mqtt": {
//             "hex": "#FFC135",
//             "title": "Zigbee2MQTT",
//             "slug": "zigbee2mqtt"
//         },
//         "ziggo": {
//             "hex": "#F48C00",
//             "title": "Ziggo",
//             "slug": "ziggo"
//         },
//         "zilch": {
//             "hex": "#00D287",
//             "title": "Zilch",
//             "slug": "zilch"
//         },
//         "zillow": {
//             "hex": "#006AFF",
//             "title": "Zillow",
//             "slug": "zillow"
//         },
//         "zincsearch": {
//             "hex": "#5BA37F",
//             "title": "ZincSearch",
//             "slug": "zincsearch"
//         },
//         "zingat": {
//             "hex": "#009CFB",
//             "title": "Zingat",
//             "slug": "zingat"
//         },
//         "zod": {
//             "hex": "#3E67B1",
//             "title": "Zod",
//             "slug": "zod"
//         },
//         "zoho": {
//             "hex": "#E42527",
//             "title": "Zoho",
//             "slug": "zoho"
//         },
//         "zoiper": {
//             "hex": "#F47920",
//             "title": "Zoiper",
//             "slug": "zoiper"
//         },
//         "zomato": {
//             "hex": "#E23744",
//             "title": "Zomato",
//             "slug": "zomato"
//         },
//         "zoom": {
//             "hex": "#0B5CFF",
//             "title": "Zoom",
//             "slug": "zoom"
//         },
//         "zorin": {
//             "hex": "#15A6F0",
//             "title": "Zorin",
//             "slug": "zorin"
//         },
//         "zotero": {
//             "hex": "#CC2936",
//             "title": "Zotero",
//             "slug": "zotero"
//         },
//         "zsh": {
//             "hex": "#F15A24",
//             "title": "Zsh",
//             "slug": "zsh"
//         },
//         "zulip": {
//             "hex": "#6492FE",
//             "title": "Zulip",
//             "slug": "zulip"
//         },
//         "zyte": {
//             "hex": "#B02CCE",
//             "title": "Zyte",
//             "slug": "zyte"
//         }
//     }
// }

// // type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

// // import typescript from "simple-icons/icons/typescript";
// // import javascript from "simple-icons/icons/javascript";
// // import java from "simple-icons/icons/java";
// // import nextdotjs from "simple-icons/icons/nextdotjs";
// // import nodedotjs from "simple-icons/icons/nodedotjs";

// // const staticIcons = [typescript, javascript, java, nodedotjs, nextdotjs];

// const slugs = ['javascript', 'java', 'dart', 'typescript']


// export type DynamicCloudProps = {
//   iconSlugs: string[];
// };

// type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

// export default function SkillCloud() {
//     // const cloudIcons = staticIcons.map((i) => renderCustomIcon(i, '#000'))
//     // const [data, setData] = React.useState<IconData>();
//     // React.useEffect(() => {
//     //     fetchSimpleIcons({ slugs: [] }).then(setData);
//     // }, []);

// //   const renderedIcons = React.useMemo(() => {
// //     if (!data) {
// //       return null;
// //     }

// //     const icons = [];
// //     for (const k of Object.keys(data.simpleIcons)) {
// //       icons.push(data.simpleIcons[k]);
// //     }

// //     return icons.map((i) => renderCustomIcon(i, "black"));
// //   }, [data]);


// /* dynamic */
//   const [data, setData] = React.useState<IconData>(dummy);
//   React.useEffect(() => {
//     // fetchSimpleIcons({ slugs: slugs }).then(setData);
//   }, []);
//   const renderedIcons = React.useMemo(() => {
//     if (!data || !data.simpleIcons) {
//       return null;
//     }

//     const icons = [];
//     for (const k of Object.keys(data.simpleIcons)) {
//       icons.push(data.simpleIcons[k]);
//     }

//     return icons.map((i) => renderCustomIcon(i, "#000"));
//   }, [data]);

// console.log('-----------------data-----------', data)

// /* dynamic end */

//   return (
//     <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] select-none">
//         {/* <Cloud
//             options={{
//                 dragControl: true,
//                 fadeIn: 1000,
//                 depth: 1,
//                 wheelZoom: false,
//             }}
//         >
//             {skills.map((skill, i) => (
//             <span
//                 key={i}
//                 className="text-3xl hover:scale-125 transition-transform cursor-pointer select-none"
//             >
//                 {skill.icon}
//             </span>
//             ))}
//         </Cloud> */}

//         {/* <Cloud {...cloudProps}>{renderedIcons}</Cloud> */}
//         {/* <Cloud {...cloudProps}>
//         <a style={{ color: "red" }}>hello</a>
//         <a
//           href="https://emojipedia.org/globe-showing-americas/"
//           title="Visual Studio Code"
//           target="_blank"
//           rel="noopener"
//         >
//           <img
//             height="42"
//             width="42"
//             alt="Visual Studio Code"
//             src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
//           />
//         </a>
//         {cloudIcons}
//       </Cloud> */}

//       {/* for dynamic slug */}
//       <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
//     </div>
//   );
// }
