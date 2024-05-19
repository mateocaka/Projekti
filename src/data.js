import app from "./App";
import React from "react";
const parfumeData = [
    {
        id: 1,
        title: "Angel's Share",
        author: "Kilian",
        notes: [
            "woody warm spicy sweet vanilla cinnamon amber powdery",
        ],
        link: "https://www.bykilian.com/product/19797/82905/perfume/angels-share/the-liquors#/sku/125687",
        photoName: "pizzas/1.jpg",
        reviews: {
            Sephora: {
                rating: 4.55,
                ratingsCount: 12000,
                reviewsCount: 950
            },
            Fragrantica: {
                rating: 4.2,
                ratingsCount: 8760,
                reviewsCount: 720
            },
        },

    },
    {
        id: 2,
        title: "Naxos Xerjoff",
        author: "Xerjoff",
        notes: [
            "sweet vanilla honey tobacoo lavender citrus aromatic florar warm spicy powdery",
        ],
        link: "https://xerjoff.com/xerjoff-1861-collection/201-naxos-eau-de-parfum-8033488155070.html",
        photoName: "pizzas/naxos.jpg",
        reviews: {
            Sephora: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            Fragrantica: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Oud Wood",
        author: "Tom Ford",
        notes: [
            "oud woodsy vanilla amber cardamom sandalwood"
        ],
        link: "https://www.tomfordbeauty.com/product/oud-wood-eau-de-parfum",
        photoName: "pizzas/Tom-Ford-Oud-Wood.jpg",
        reviews: {
            Sephora: {
                rating: 4.7,
                ratingsCount: 25500,
                reviewsCount: 3400
            },
            Fragrantica: {
                rating: 4.65,
                ratingsCount: 18300,
                reviewsCount: 1100
            }
        }
    },
    {
        id: 4,
        title: "Santal 33",
        author: "Le Labo",
        notes: [
            "sandalwood cedarwood cardamom violet papyrus leather"
        ],
        link: "https://www.lelabofragrances.com/santal-33-147.html",
        photoName: "pizzas/Santal.jpg",
        reviews: {
            Sephora: {
                rating: 4.55,
                ratingsCount: 12000,
                reviewsCount: 950
            },
            Fragrantica: {
                rating: 4.2,
                ratingsCount: 8760,
                reviewsCount: 720
            },
        },
    },
    {
        id: 5,
        title: "Black Orchid",
        author: "Tom Ford",
        notes: [
            "orchid black truffle patchouli incense vanilla"
        ],
        link: "https://www.tomfordbeauty.com/product/black-orchid-eau-de-parfum",
        photoName: "pizzas/TF_RND_Orchid.jpg",
        reviews: {
            Sephora: {
                rating: 4.4,
                ratingsCount: 19500,
                reviewsCount: 2300
            },
            Fragrantica: {
                rating: 4.35,
                ratingsCount: 14700,
                reviewsCount: 1000
            }
        }
    },
    {
        id: 6,
        title: "Molecule 01",
        author: "Escentric Molecules",
        notes: [
            "iso e super"
        ],
        link: "https://www.escentric.com/collections/molecule-01",
        photoName: 'pizzas/2.jpg',
        reviews: {
            Sephora: {
                rating: 4.6,
                ratingsCount: 9800,
                reviewsCount: 900
            },
            Fragrantica: {
                rating: 4.5,
                ratingsCount: 5000,
                reviewsCount: 650
            }
        }
    },
    {
        id: 7,
        title: "Philosykos",
        author: "Diptyque",
        notes: [
            "fig fig leaf cedar"
        ],
        link: "https://www.diptyqueparis.com/en_us/p/philosykos-eau-de-parfum-75ml-1.html",
        photoName: 'pizzas/Philosykos.jpg',
        reviews: {
            Sephora: {
                rating: 4.65,
                ratingsCount: 7300,
                reviewsCount: 670
            },
            Fragrantica: {
                rating: 4.4,
                ratingsCount: 9600,
                reviewsCount: 560
            },
        },
    },
    {
        id: 8,
        title: "Silver Mountain Water",
        author: "Creed",
        notes: [
            "bergamot mandarin green tea blackcurrant musk sandalwood"
        ],
        link: "https://creedboutique.com/products/silver-mountain-water?variant=32812869615713",
        photoName: 'pizzas/Silver Mountain Water.jpg',
        reviews: {
            Sephora: {
                rating: 4.3,
                ratingsCount: 8400,
                reviewsCount: 790
            },
            Fragrantica: {
                rating: 4.25,
                ratingsCount: 6800,
                reviewsCount: 500
            }
        }
    },
    {
        id: 9,
        title: "Reflection Man",
        author: "Amouage",
        notes: [
            "neroli pink pepper jasmine sandalwood cedar vetiver"
        ],
        photoName: "pizzas/Amouage.jpg",
        link: "https://amouage.com/en-euro/products/reflection-man-100ml",
        reviews: {
            Sephora: {
                rating: 4.6,
                ratingsCount: 2900,
                reviewsCount: 270
            },
            Fragrantica: {
                rating: 4.5,
                ratingsCount: 6200,
                reviewsCount: 530
            }
        }
    },
    {
        id: 10,
        title: "Encre Noire",
        author: "Lalique",
        photoName: "pizzas/Encre Noire.jpg",
        notes: [
            "vetiver cypress cashmere wood musk"
        ],
        link: "https://fr.lalique.com/en/products/encre-noire-eau-de-toilette",
        reviews: {
            Fragrantica: {
                rating: 4.2,
                ratingsCount: 11200,
                reviewsCount: 900
            },
            Sephora: {
                rating: 4.45,
                ratingsCount: 5600,
                reviewsCount: 620
            }
        }
    },
    {
        id: 11,
        title: "J'adore",
        author: "Dior",
        photoName: "pizzas/adore.jpg",
        notes: [
            "jasmine ylang-ylang rose orchid"
        ],
        link: "https://www.dior.com/en_int/beauty/products/jadore-Y0715201.html",
        reviews: {
            Sephora: {
                rating: 4.8,
                ratingsCount: 31000,
                reviewsCount: 4200
            },
            Fragrantica: {
                rating: 4.6,
                ratingsCount: 15600,
                reviewsCount: 1250
            }
        }
    },
    {
        id: 12,
        title: "Coco Mademoiselle",
        author: "Chanel",
        photoName: "pizzas/Coco Mademoiselle.jpg",
        notes: [
            "orange bergamor rose jasmine patchouli vanilla"
        ],
        link: "https://www.sephora.com/product/coco-mademoiselle-P12495",
        reviews: {
            Sephora: {
                rating: 4.9,
                ratingsCount: 50000,
                reviewsCount: 6000
            },
            Fragrantica: {
                rating: 4.75,
                ratingsCount: 34000,
                reviewsCount: 2200
            }
        }
    },
    {
        id: 13,
        title: "La Vie Est Belle",
        author: "Lancome",
        photoName: "pizzas/La Vie Est Belle.jpg",
        notes: [
            "iris jasmine orange blossom patchouli"
        ],
        link: "https://www.lancome-usa.com/fragrance/fragrance-by-collection/la-vie-est-belle/la-vie-est-belle-rose-extraordinaire/00920-LAC.html",
        reviews: {
            Sephora: {
                rating: 4.8,
                ratingsCount: 30000,
                reviewsCount: 5000
            },
            Fragrantica: {
                rating: 4.85,
                ratingsCount: 30000,
                reviewsCount: 2100
            }
        }
    },
    {
        id: 14,
        title: "Terre d'Hermès",
        author: "Hermès",
        photoName: "pizzas/Terre.jpg",
        notes: [
            "orange grapefruit pepper pelargonium vetiver cedar patchouli"
        ],
        link: "https://www.hermes.com/us/en/product/terre-d-hermes-parfum-V107757V0/",
        reviews: {
            Sephora: {
                rating: 4.7,
                ratingsCount: 15200,
                reviewsCount: 1300
            },
            Fragrantica: {
                rating: 4.6,
                ratingsCount: 21000,
                reviewsCount: 1700
            }
        }
    },
    {
        id: 15,
        title: "Aventus",
        author: "Creed",
        photoName: "pizzas/Aventus.jpg",
        notes: [
            "pineapple apple bergamot black currant birch jasmine musk oak moss ambergris"
        ],
        link: "https://creedboutique.com/products/aventus?variant=32812846743649",
        reviews: {
            Sephora: {
                rating: 4.8,
                ratingsCount: 18900,
                reviewsCount: 2500
            },
            Fragrantica: {
                rating: 4.55,
                ratingsCount: 32000,
                reviewsCount: 2900
            }
        }
    },
    {
        id: 16,
        title: "Blue de Chanel",
        author: "Chanel",
        photoName: "pizzas/Blue de Chanel.jpg",
        notes: [
            "grapefruit lemon vetiver ginger incense nutmeg"
        ],
        link: "https://www.chanel.com/al/fragrance/p/107360/bleu-de-chanel-eau-de-parfum-spray/",
        reviews: {
            Sephora: {
                rating: 4.7,
                ratingsCount: 28000,
                reviewsCount: 3400
            },
            Fragrantica: {
                rating: 4.3,
                ratingsCount: 24000,
                reviewsCount: 2200
            }
        }
    },
    {
        id: 17,
        title: "Acqua di Gio",
        author: "Giorgio Armani",
        photoName: "pizzas/Acqua di Gio.jpg",
        notes: [
            "sea notes lime lemon jasmine calone peach cedar"
        ],
        link: "https://www.giorgioarmanibeauty-usa.com/fragrances/mens-cologne/acqua-di-gio-eau-de-parfum/ww-00631-arm.html",
        reviews: {
            Sephora: {
                rating: 4.6,
                ratingsCount: 35000,
                reviewsCount: 4300
            },
            Fragrantica: {
                rating: 4.2,
                ratingsCount: 27500,
                reviewsCount: 2500
            }
        }
    },
    {
        id: 18,
        title: "Spicebomb",
        author: "Viktor & Rolf",
        photoName: "pizzas/Spicebomb.jpg",
        notes: [
            "tobacco spices leather vanilla grapefruit"
        ],
        link: "https://us.viktor-rolf.com/fragrance/spicebomb-extreme-VKR_034.html",
        reviews: {
            Sephora: {
                rating: 4.5,
                ratingsCount: 9300,
                reviewsCount: 860
            },
            Fragrantica: {
                rating: 4.1,
                ratingsCount: 15400,
                reviewsCount: 1380
            }
        }
    },
    {
        id: 19,
        title: "Invictus",
        author: "Paco Rabanne",
        photoName: "pizzas/Invictus.jpg",
        notes: [
            "grapefruit sea notes bay leaf ambergris guaiac wood"
        ],
        link: "https://www.rabanne.com/ww/en/fragrance/p/invictus-parfum--000000000065199569",
        reviews: {
            Sephora: {
                rating: 4.3,
                ratingsCount: 17600,
                reviewsCount: 2100
            },
            Fragrantica: {
                rating: 3.9,
                ratingsCount: 22000,
                reviewsCount: 1900
            }
        }
    },
    {
        id: 20,
        title: "Eros",
        author: "Versace",
        photoName: "pizzas/Eros.jpg",
        notes: [
            "mint green apple lemon tonka bean ambroxan vanilla"
        ],
        link: "https://www.versace.com/us/en/men/accessories/fragrances-body-care/eros/eros-edt-100-ml-blue/R740010-R100MLS_RNUL.html?dwvar_R740010-R100MLS__RNUL_color=RNUL",
        reviews: {
            Sephora: {
                rating: 4.6,
                ratingsCount: 12500,
                reviewsCount: 980
            },
            Fragrantica: {
                rating: 4.0,
                ratingsCount: 24000,
                reviewsCount: 2100
            }
        }
    },
    {
        id: 21,
        title: "Le Male",
        author: "Jean Paul Gaultier",
        photoName: "pizzas/Le Male.jpg",
        notes: [
            "lavender mint cardamom vanilla cinnamon"
        ],
        link: "https://www.jeanpaulgaultier.com/ww/en/fragrances/range-le-male/le-male-eau-de-toilette",
        reviews: {
            Sephora: {
                rating: 4.4,
                ratingsCount: 29500,
                reviewsCount: 3400
            },
            Fragrantica: {
                rating: 3.8,
                ratingsCount: 26000,
                reviewsCount: 2400
            }
        }
    },
    {
        id: 22,
        title: "Sauvage",
        author: "Dior",
        photoName: "pizzas/Sauvage.jpg",
        notes: [
            "pepper bergamot lavender sichuan pepper vetiver patchouli"
        ],
        link: "https://www.dior.com/en_int/beauty/products/sauvage-eau-de-parfum-Y0785220.html",
        reviews: {
            Sephora: {
                rating: 4.5,
                ratingsCount: 31000,
                reviewsCount: 3700
            },
            Fragrantica: {
                rating: 3.9,
                ratingsCount: 21500,
                reviewsCount: 1980
            }
        }
    },
    {
        id: 23,
        title: "Man in Black",
        author: "Bvlgari",
        photoName: "pizzas/Man in Black.jpg",
        notes: [
            "rum leather tobacco spices guaiac wood"
        ],
        link: "https://www.bulgari.com/en-us/41478.html",
        reviews: {
            Fragrantica: {
                rating: 4.3,
                ratingsCount: 12500,
                reviewsCount: 1050
            },
            Sephora: {
                rating: 4.55,
                ratingsCount: 8200,
                reviewsCount: 780
            }
        }
    },
    {
        id: 20,
        title: "Si",
        author: "Giorgio Armani",
        photoName: "pizzas/Si.jpg",
        notes: [
            "blackcurrant nectar modern chypre blonde wood musk freesia May rose"
        ],
        link: "https://www.giorgioarmanibeauty-usa.com/fragrances/womens-perfume/si/si-eau-de-parfum/A218.html",
        reviews: {
            Sephora: {
                rating: 4.5,
                ratingsCount: 11000,
                reviewsCount: 900
            },
            Fragrantica: {
                rating: 3.7,
                ratingsCount: 17000,
                reviewsCount: 1500
            }
        }
    },
    {
        id: 21,
        title: "Chance Eau Tendre",
        author: "Chanel",
        photoName: "pizzas/Chance Eau Tendre.jpg",
        notes: [
            "quince grapefruit hyacinth jasmine amber cedar iris musk"
        ],
        link: "https://www.chanel.com/al/fragrance/p/126260/chance-eau-tendre-eau-de-parfum-spray/",
        reviews: {
            Sephora: {
                rating: 4.8,
                ratingsCount: 18000,
                reviewsCount: 2200
            },
            Fragrantica: {
                rating: 4.4,
                ratingsCount: 12000,
                reviewsCount: 1000
            }
        }
    },
    {
        id: 22,
        title: "Mon Guerlain",
        author: "Guerlain",
        photoName: "pizzas/Mon Guerlain.jpg",
        notes: [
            "lavender vanilla sandalwood jasmine iris"
        ],
        link: "https://www.guerlain.com/us/en-us/p/mon-guerlain-eau-de-parfum-P013139.html",
        reviews: {
            Sephora: {
                rating: 4.5,
                ratingsCount: 9500,
                reviewsCount: 850
            },
            Fragrantica: {
                rating: 3.9,
                ratingsCount: 15000,
                reviewsCount: 1200
            }
        }
    },

];

export default parfumeData;