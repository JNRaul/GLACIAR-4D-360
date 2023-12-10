var APP_DATA = {
  "scenes": [
    {
      "id": "0-saln-comedor",
      "name": "Salón-Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.7057822720810103,
        "pitch": 0.1219674766190515,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.6781610725556071,
          "pitch": 0.24734501877078685,
          "rotation": 0,
          "target": "1-cocina"
        },
        {
          "yaw": 0.7555546378398912,
          "pitch": 0.308135107346061,
          "rotation": 1.5707963267948966,
          "target": "2-bao-general-blanco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.609041503492505,
        "pitch": 0.08030914431155267,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.5808825628076484,
          "pitch": 0.31532118300491874,
          "rotation": 0,
          "target": "0-saln-comedor"
        },
        {
          "yaw": -0.8274944070201897,
          "pitch": 0.5401263088756849,
          "rotation": 4.71238898038469,
          "target": "2-bao-general-blanco"
        },
        {
          "yaw": -0.8434319558106296,
          "pitch": 0.62332242382179,
          "rotation": 4.71238898038469,
          "target": "4-dormitorio-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao-general-blanco",
      "name": "Baño General Blanco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09485686105083424,
          "pitch": -0.020366900846523706,
          "rotation": 0,
          "target": "3-bao-general-beige"
        },
        {
          "yaw": -1.8674150054782395,
          "pitch": 0.670161538800798,
          "rotation": 4.71238898038469,
          "target": "1-cocina"
        },
        {
          "yaw": -1.8677109536611258,
          "pitch": 0.834941250625695,
          "rotation": 4.71238898038469,
          "target": "0-saln-comedor"
        },
        {
          "yaw": -1.4215364855861274,
          "pitch": 0.747251260631181,
          "rotation": 1.5707963267948966,
          "target": "4-dormitorio-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao-general-beige",
      "name": "Baño General Beige",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-bao-general-blanco"
        },
        {
          "yaw": -1.851098983263011,
          "pitch": 0.6772134795544176,
          "rotation": 10.995574287564278,
          "target": "1-cocina"
        },
        {
          "yaw": -1.856914333922841,
          "pitch": 0.8357761871737459,
          "rotation": 4.71238898038469,
          "target": "0-saln-comedor"
        },
        {
          "yaw": -1.422110767041298,
          "pitch": 0.7415904146438628,
          "rotation": 1.5707963267948966,
          "target": "4-dormitorio-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio-4",
      "name": "Dormitorio 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.135586145269473,
        "pitch": 0.07368292096464657,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.0265457836082916,
          "pitch": 0.5593403764973637,
          "rotation": 1.5707963267948966,
          "target": "2-bao-general-blanco"
        },
        {
          "yaw": 1.0154116572652647,
          "pitch": 0.6714162262319849,
          "rotation": 1.5707963267948966,
          "target": "1-cocina"
        },
        {
          "yaw": 0.7441784472700874,
          "pitch": 0.6467193856722222,
          "rotation": 4.71238898038469,
          "target": "5-dormitorio-3"
        },
        {
          "yaw": 0.7363379045462715,
          "pitch": 0.5579217490881447,
          "rotation": 4.71238898038469,
          "target": "6-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitorio-3",
      "name": "Dormitorio 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6593585659747383,
        "pitch": 0.0012338515100402958,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.5182618193489379,
          "pitch": 0.5545434777279432,
          "rotation": 1.5707963267948966,
          "target": "4-dormitorio-4"
        },
        {
          "yaw": 0.3165551616552449,
          "pitch": 0.2729500153337856,
          "rotation": 0,
          "target": "9-dormitorio-principal"
        },
        {
          "yaw": 0.3510705768428384,
          "pitch": 0.36142090786275816,
          "rotation": 1.5707963267948966,
          "target": "7-bao-principal-blanco"
        },
        {
          "yaw": 0.2657438453903165,
          "pitch": 0.5498502332015907,
          "rotation": 4.71238898038469,
          "target": "6-dormitorio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dormitorio-2",
      "name": "Dormitorio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0275292366962177,
        "pitch": 0.0581204892476066,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.05569856683354857,
          "pitch": 0.5726585841983187,
          "rotation": 1.5707963267948966,
          "target": "5-dormitorio-3"
        },
        {
          "yaw": -0.12858651542426713,
          "pitch": 0.351006833746645,
          "rotation": 1.5707963267948966,
          "target": "4-dormitorio-4"
        },
        {
          "yaw": -0.2603309694426095,
          "pitch": 0.2828927009015274,
          "rotation": 4.71238898038469,
          "target": "2-bao-general-blanco"
        },
        {
          "yaw": -0.1645850184920583,
          "pitch": 0.22146322514586458,
          "rotation": 1.5707963267948966,
          "target": "1-cocina"
        },
        {
          "yaw": -0.25697382398131197,
          "pitch": 0.20847289199037178,
          "rotation": 4.71238898038469,
          "target": "0-saln-comedor"
        },
        {
          "yaw": -0.34236952153421996,
          "pitch": 0.590372946433309,
          "rotation": 4.71238898038469,
          "target": "9-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-principal-blanco",
      "name": "Baño Principal Blanco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "8-bao-principal-beige"
        },
        {
          "yaw": 2.8973719632274264,
          "pitch": 0.7637249807380293,
          "rotation": 1.5707963267948966,
          "target": "9-dormitorio-principal"
        },
        {
          "yaw": 2.3896730324157245,
          "pitch": 0.7480283001249681,
          "rotation": 4.71238898038469,
          "target": "6-dormitorio-2"
        },
        {
          "yaw": 2.364674389682225,
          "pitch": 0.8912958805931872,
          "rotation": 4.71238898038469,
          "target": "5-dormitorio-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-principal-beige",
      "name": "Baño Principal Beige",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-bao-general-blanco"
        },
        {
          "yaw": 2.8994975263977842,
          "pitch": 0.7809639585169297,
          "rotation": 1.5707963267948966,
          "target": "9-dormitorio-principal"
        },
        {
          "yaw": 2.3712976904668244,
          "pitch": 0.7384409098129012,
          "rotation": 4.71238898038469,
          "target": "6-dormitorio-2"
        },
        {
          "yaw": 2.363990052443291,
          "pitch": 0.8778686912305407,
          "rotation": 4.71238898038469,
          "target": "5-dormitorio-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dormitorio-principal",
      "name": "Dormitorio Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.6596239031278266,
        "pitch": 0.08802588482357976,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.8054411038014875,
          "pitch": 0.45191122382369286,
          "rotation": 4.71238898038469,
          "target": "7-bao-principal-blanco"
        },
        {
          "yaw": 2.9765823098277266,
          "pitch": 0.24592934456139304,
          "rotation": 0,
          "target": "5-dormitorio-3"
        },
        {
          "yaw": 3.014957053500904,
          "pitch": 0.31531072290954043,
          "rotation": 1.5707963267948966,
          "target": "6-dormitorio-2"
        },
        {
          "yaw": 2.9348104011001297,
          "pitch": 0.30752314824675153,
          "rotation": 4.71238898038469,
          "target": "4-dormitorio-4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
