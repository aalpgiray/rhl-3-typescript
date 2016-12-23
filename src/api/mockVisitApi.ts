import delay from './delay';
import { IVisit } from '../reducers/visit.reducer';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export const visits: IVisit[] = [
    {
        "idVisit": "2D244575-B5E0-4F56-9014-2650DB4AB530",
        "visitedCityRef": 64,
        "visitedCityName": "KONYA",
        "visitedTownRef": 654,
        "visitedTownName": "SARAYÖNÜ",
        "visitedVillageRef": 144607,
        "visitedVillageName": "DOĞU İSTASYON",
        "visitedFirmRef": "14846596474",
        "visitedFirmName": "ŞÜKÜR POYRAZ",
        "userName": "FERHAT KOÇAK",
        "idUserRef": "22112353942",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "F3D14DFC-8C1E-444E-87CA-0BAC21817CE2",
        "visitedCityRef": 64,
        "visitedCityName": "KONYA",
        "visitedTownRef": 654,
        "visitedTownName": "SARAYÖNÜ",
        "visitedVillageRef": 22237,
        "visitedVillageName": "GÖZLÜ",
        "visitedFirmRef": "14846596474",
        "visitedFirmName": "ŞÜKÜR POYRAZ",
        "userName": "FERHAT KOÇAK",
        "idUserRef": "22112353942",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "B0B1E437-2125-431A-ABD5-B9C70D115C84",
        "visitedCityRef": 64,
        "visitedCityName": "KONYA",
        "visitedTownRef": 654,
        "visitedTownName": "SARAYÖNÜ",
        "visitedVillageRef": 145884,
        "visitedVillageName": "LADİK",
        "visitedFirmRef": "14846596474",
        "visitedFirmName": "ŞÜKÜR POYRAZ",
        "userName": "FERHAT KOÇAK",
        "idUserRef": "22112353942",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "45B2E306-E794-419E-BC24-98A771436D05",
        "visitedCityRef": 25,
        "visitedCityName": "AFYONKARAHİSAR",
        "visitedTownRef": 134,
        "visitedTownName": "EMİRDAĞ",
        "visitedVillageRef": 145107,
        "visitedVillageName": "HAMZAHACILI",
        "visitedFirmRef": "21418168168",
        "visitedFirmName": "SÜLEYMAN ERYÜRÜK",
        "userName": "SADULLAH OĞUZ ARI",
        "idUserRef": "13468433068",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "F44A94F6-3E14-4088-B18B-BF4B2451EFDB",
        "visitedCityRef": 28,
        "visitedCityName": "ANKARA",
        "visitedTownRef": 179,
        "visitedTownName": "POLATLI",
        "visitedVillageRef": 169277,
        "visitedVillageName": "ADATOPRAKPINAR",
        "visitedFirmRef": "10411310810",
        "visitedFirmName": "LÜTFİ KONUK",
        "userName": "LEVENT SAKA",
        "idUserRef": "52648152312",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "9A87EAE7-5C4B-498D-9F68-3187EC417843",
        "visitedCityRef": 102,
        "visitedCityName": "OSMANİYE",
        "visitedTownRef": 1016,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 128475,
        "visitedVillageName": "ORHANIYE",
        "visitedFirmRef": "53458750614",
        "visitedFirmName": "ALİ ÇALIŞIR",
        "userName": "İSMAİL TELSİZ",
        "idUserRef": "68008267108",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "82E25F7E-36F7-4DE5-AC49-1493BF67D840",
        "visitedCityRef": 102,
        "visitedCityName": "OSMANİYE",
        "visitedTownRef": 1016,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 128461,
        "visitedVillageName": "ENDEL",
        "visitedFirmRef": "53458750614",
        "visitedFirmName": "ALİ ÇALIŞIR",
        "userName": "İSMAİL TELSİZ",
        "idUserRef": "68008267108",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "CDE213F4-35E8-4606-A58E-2E0388DAF405",
        "visitedCityRef": 102,
        "visitedCityName": "OSMANİYE",
        "visitedTownRef": 1016,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 128480,
        "visitedVillageName": "SELİMİYE",
        "visitedFirmRef": "53458750614",
        "visitedFirmName": "ALİ ÇALIŞIR",
        "userName": "İSMAİL TELSİZ",
        "idUserRef": "68008267108",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "E2932233-23DF-44F8-ABBE-C5B78F344288",
        "visitedCityRef": 69,
        "visitedCityName": "MARDİN",
        "visitedTownRef": 722,
        "visitedTownName": "SAVUR",
        "visitedVillageRef": 166211,
        "visitedVillageName": "ŞENOCAK",
        "visitedFirmRef": "35225051070",
        "visitedFirmName": "ALİ KARAKAŞ",
        "userName": "AHMET YASAN",
        "idUserRef": "25370366990",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "6B12C59F-B193-43AF-8F73-58CF7A87DB1E",
        "visitedCityRef": 53,
        "visitedCityName": "HATAY",
        "visitedTownRef": 469,
        "visitedTownName": "ALTINÖZÜ",
        "visitedVillageRef": 129102,
        "visitedVillageName": "HANYOLU",
        "visitedFirmRef": "24496895490",
        "visitedFirmName": "ÖMER EKER",
        "userName": "AHMET ÖZMA",
        "idUserRef": "28435773740",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "344AB556-16EB-4EB5-9064-38A0CF3D264A",
        "visitedCityRef": 40,
        "visitedCityName": "ÇANKIRI",
        "visitedTownRef": 320,
        "visitedTownName": "KIZILIRMAK",
        "visitedVillageRef": 36958,
        "visitedVillageName": "KARAMÜRSEL",
        "visitedFirmRef": "39208058476",
        "visitedFirmName": "MUSA AKTAŞCI",
        "userName": "SELİM AKTAŞ",
        "idUserRef": "12463961484",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "3BEA3675-1B26-444E-9D36-D702C068332F",
        "visitedCityRef": 40,
        "visitedCityName": "ÇANKIRI",
        "visitedTownRef": 320,
        "visitedTownName": "KIZILIRMAK",
        "visitedVillageRef": 37049,
        "visitedVillageName": "CACIKLAR",
        "visitedFirmRef": "39208058476",
        "visitedFirmName": "MUSA AKTAŞCI",
        "userName": "SELİM AKTAŞ",
        "idUserRef": "12463961484",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "1DC6DB5C-0331-49B9-8F39-21DA1823F2B9",
        "visitedCityRef": 88,
        "visitedCityName": "YOZGAT",
        "visitedTownRef": 936,
        "visitedTownName": "YERKÖY",
        "visitedVillageRef": 159432,
        "visitedVillageName": "ÇAYKÖY",
        "visitedFirmRef": "13596002310",
        "visitedFirmName": "SEYİT ÖZTÜRK",
        "userName": "İREM MUTLUM ŞENSES",
        "idUserRef": "17687013148",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "000C8DC4-455B-41D4-802C-5D5FB218965D",
        "visitedCityRef": 88,
        "visitedCityName": "YOZGAT",
        "visitedTownRef": 936,
        "visitedTownName": "YERKÖY",
        "visitedVillageRef": 158833,
        "visitedVillageName": "KAYADİBİ",
        "visitedFirmRef": "13596002310",
        "visitedFirmName": "SEYİT ÖZTÜRK",
        "userName": "İREM MUTLUM ŞENSES",
        "idUserRef": "17687013148",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "1E976B0A-D04E-4E96-BE8D-49DFD159AF16",
        "visitedCityRef": 28,
        "visitedCityName": "ANKARA",
        "visitedTownRef": 170,
        "visitedTownName": "GÖLBAŞI",
        "visitedVillageRef": 130146,
        "visitedVillageName": "KARACAVİRAN",
        "visitedFirmRef": "12169185474",
        "visitedFirmName": "BERKANT TETİK",
        "userName": "ALİHAN KOÇAK",
        "idUserRef": "19397191796",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "8D759478-6429-46D5-9C8D-32AC20DF20FA",
        "visitedCityRef": 24,
        "visitedCityName": "ADIYAMAN",
        "visitedTownRef": 122,
        "visitedTownName": "KAHTA",
        "visitedVillageRef": 165682,
        "visitedVillageName": "ALİDAM",
        "visitedFirmRef": "10174490354",
        "visitedFirmName": "YÜKSEL ALTIN",
        "userName": "MURAT EVREN",
        "idUserRef": "19969175636",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "5AFA7664-F0A5-4AC5-84E7-1FE364EA8A21",
        "visitedCityRef": 31,
        "visitedCityName": "AYDIN",
        "visitedTownRef": 207,
        "visitedTownName": "BOZDOĞAN",
        "visitedVillageRef": 152836,
        "visitedVillageName": "ÖRENCİK",
        "visitedFirmRef": "21871351930",
        "visitedFirmName": "MUHİTTİN CAN",
        "userName": "HATİCE AKYOL",
        "idUserRef": "22513112322",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "EABB6E6C-16E5-4A1A-B6B7-D7F24C8FFADC",
        "visitedCityRef": 70,
        "visitedCityName": "MUĞLA",
        "visitedTownRef": 6159,
        "visitedTownName": "MENTEŞE",
        "visitedVillageRef": 139233,
        "visitedVillageName": "ÇAMOLUK",
        "visitedFirmRef": "21871351930",
        "visitedFirmName": "MUHİTTİN CAN",
        "userName": "MEHMET SELİM CAN",
        "idUserRef": "13281051326",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "EF414FA9-2F9E-44F2-B0E8-092F38A274CB",
        "visitedCityRef": 29,
        "visitedCityName": "ANTALYA",
        "visitedTownRef": 6117,
        "visitedTownName": "AKSU",
        "visitedVillageRef": 137036,
        "visitedVillageName": "CİHADİYE",
        "visitedFirmRef": "10915679536",
        "visitedFirmName": "ALİ TEK",
        "userName": "MEDİNE BAŞAR",
        "idUserRef": "35467196584",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "B6FFB1D9-0A57-4553-93F1-F4DF701E401C",
        "visitedCityRef": 57,
        "visitedCityName": "İZMİR",
        "visitedTownRef": 542,
        "visitedTownName": "BUCA",
        "visitedVillageRef": 152385,
        "visitedVillageName": "KAYNAKLAR",
        "visitedFirmRef": "37780985456",
        "visitedFirmName": "MEHMET İHSAN ERKUŞ",
        "userName": "HASAN BASRİ GÜREL",
        "idUserRef": "12374866366",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "A04CFA2B-106E-4291-98E5-C0985B124CF9",
        "visitedCityRef": 57,
        "visitedCityName": "İZMİR",
        "visitedTownRef": 542,
        "visitedTownName": "BUCA",
        "visitedVillageRef": 150346,
        "visitedVillageName": "YILDIZ",
        "visitedFirmRef": "37780985456",
        "visitedFirmName": "MEHMET İHSAN ERKUŞ",
        "userName": "HASAN BASRİ GÜREL",
        "idUserRef": "12374866366",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "6721C467-EEAB-403D-8F69-F05DCD19F68E",
        "visitedCityRef": 50,
        "visitedCityName": "GİRESUN",
        "visitedTownRef": 444,
        "visitedTownName": "BULANCAK",
        "visitedVillageRef": 159313,
        "visitedVillageName": "TEKMEZAR",
        "visitedFirmRef": "31396603810",
        "visitedFirmName": "RIFKI BULDUK",
        "userName": "ARZU GÖKSU",
        "idUserRef": "25499425998",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "BA5BDFD0-772A-4BDE-9288-BF8F458E6593",
        "visitedCityRef": 50,
        "visitedCityName": "GİRESUN",
        "visitedTownRef": 444,
        "visitedTownName": "BULANCAK",
        "visitedVillageRef": 163835,
        "visitedVillageName": "İNECE",
        "visitedFirmRef": "31396603810",
        "visitedFirmName": "RIFKI BULDUK",
        "userName": "ARZU GÖKSU",
        "idUserRef": "25499425998",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "32EE98F0-1FD9-4DE8-8A2D-D539985D33AE",
        "visitedCityRef": 38,
        "visitedCityName": "BURSA",
        "visitedTownRef": 294,
        "visitedTownName": "MUDANYA",
        "visitedVillageRef": 38890,
        "visitedVillageName": "AYDINPINAR",
        "visitedFirmRef": "19013032762",
        "visitedFirmName": "ÜMRAN ZEYNEP TAR",
        "userName": "GERÇEK GÜVEN",
        "idUserRef": "24274483970",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "C8C73778-5535-4714-9839-3E0BB3B99078",
        "visitedCityRef": 67,
        "visitedCityName": "MANİSA",
        "visitedTownRef": 703,
        "visitedTownName": "TURGUTLU",
        "visitedVillageRef": 19738,
        "visitedVillageName": "ÇIKRIKÇI",
        "visitedFirmRef": "51910428460",
        "visitedFirmName": "HATİCE DUMAN",
        "userName": "KÜRŞAT İKİZOĞLU",
        "idUserRef": "24244898438",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "35F52FEE-EC69-441B-B317-12EF809473E8",
        "visitedCityRef": 65,
        "visitedCityName": "KÜTAHYA",
        "visitedTownRef": 673,
        "visitedTownName": "TAVŞANLI",
        "visitedVillageRef": 145114,
        "visitedVillageName": "KIRKKAVAK",
        "visitedFirmRef": "16211569618",
        "visitedFirmName": "AHMET UĞURLU",
        "userName": "MUSTAFA GÖKÇE",
        "idUserRef": "44527625858",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "FC554711-1278-41AD-A1EC-74920530A573",
        "visitedCityRef": 30,
        "visitedCityName": "ARTVİN",
        "visitedTownRef": 201,
        "visitedTownName": "BORÇKA",
        "visitedVillageRef": 43933,
        "visitedVillageName": "ŞEREFİYE",
        "visitedFirmRef": "20692374654",
        "visitedFirmName": "UMMEHAN SARIHAN",
        "userName": "ONUR ÖZTEKE",
        "idUserRef": "17299286510",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "C7D6D684-6647-45EC-9EE9-06F93DDA7D33",
        "visitedCityRef": 88,
        "visitedCityName": "YOZGAT",
        "visitedTownRef": 937,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 127187,
        "visitedVillageName": "LÖK",
        "visitedFirmRef": "41099075746",
        "visitedFirmName": "HARUN ŞAHİNGÖZ",
        "userName": "TİMUR DEĞİRMENCİ",
        "idUserRef": "30259328068",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "2BFCFD9D-0BAF-46B9-8A02-8F16855C58EF",
        "visitedCityRef": 30,
        "visitedCityName": "ARTVİN",
        "visitedTownRef": 201,
        "visitedTownName": "BORÇKA",
        "visitedVillageRef": 43867,
        "visitedVillageName": "BALCI",
        "visitedFirmRef": "22060328474",
        "visitedFirmName": "HASAN ÖZIŞIK",
        "userName": "ONUR ÖZTEKE",
        "idUserRef": "17299286510",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "79ABB101-F34B-417A-931D-C1BCEF080243",
        "visitedCityRef": 53,
        "visitedCityName": "HATAY",
        "visitedTownRef": 480,
        "visitedTownName": "YAYLADAĞI",
        "visitedVillageRef": 151161,
        "visitedVillageName": "ASLANYAZI",
        "visitedFirmRef": "26134850762",
        "visitedFirmName": "HİKMET İŞLEKYAY",
        "userName": "DEMET ÇAKİ",
        "idUserRef": "19508052336",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "F3354411-72DB-43B9-B757-A4FDECD56F71",
        "visitedCityRef": 53,
        "visitedCityName": "HATAY",
        "visitedTownRef": 480,
        "visitedTownName": "YAYLADAĞI",
        "visitedVillageRef": 29341,
        "visitedVillageName": "ULUYOL",
        "visitedFirmRef": "26134850762",
        "visitedFirmName": "HİKMET İŞLEKYAY",
        "userName": "DEMET ÇAKİ",
        "idUserRef": "19508052336",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "1F3E8DA0-6279-4E9A-A688-5831B5F0C1F0",
        "visitedCityRef": 31,
        "visitedCityName": "AYDIN",
        "visitedTownRef": 215,
        "visitedTownName": "KOÇARLI",
        "visitedVillageRef": 148948,
        "visitedVillageName": "HACIHAMZALAR",
        "visitedFirmRef": "30163091508",
        "visitedFirmName": "ABDİ AK",
        "userName": "İBRAHİM GÜNTÜRKÜN",
        "idUserRef": "23356325986",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "E0B612EB-42C4-4EF0-AB56-D36FE9B4A59F",
        "visitedCityRef": 31,
        "visitedCityName": "AYDIN",
        "visitedTownRef": 215,
        "visitedTownName": "KOÇARLI",
        "visitedVillageRef": 148506,
        "visitedVillageName": "EVSEKLER",
        "visitedFirmRef": "30163091508",
        "visitedFirmName": "ABDİ AK",
        "userName": "İBRAHİM GÜNTÜRKÜN",
        "idUserRef": "23356325986",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "A06942D5-DDE1-466D-B47D-C3F36BC78AF2",
        "visitedCityRef": 50,
        "visitedCityName": "GİRESUN",
        "visitedTownRef": 451,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 124484,
        "visitedVillageName": "SAYCA",
        "visitedFirmRef": "21574948246",
        "visitedFirmName": "NAİM TÜRKSEVER",
        "userName": "MURAT BAHADIR",
        "idUserRef": "17525820280",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "E199F6E9-BAFD-4CCE-AA61-C15145FDA8C9",
        "visitedCityRef": 52,
        "visitedCityName": "HAKKARİ",
        "visitedTownRef": 466,
        "visitedTownName": "MERKEZ",
        "visitedVillageRef": 128835,
        "visitedVillageName": "AKÇALI",
        "visitedFirmRef": "14870194004",
        "visitedFirmName": "SERDAR ALDIRAN",
        "userName": "ZEKİ SUVAĞCİ",
        "idUserRef": "30742664406",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "E5E95359-763F-494E-8300-BD13089219AC",
        "visitedCityRef": 86,
        "visitedCityName": "UŞAK",
        "visitedTownRef": 910,
        "visitedTownName": "ULUBEY",
        "visitedVillageRef": 140739,
        "visitedVillageName": "GEDİKLER",
        "visitedFirmRef": "55993567504",
        "visitedFirmName": "MEHMET BÜLBÜL",
        "userName": "SEVGİ ÖYKE",
        "idUserRef": "16553519746",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "B1192F0D-51C1-418D-BD67-4DE4CB72F11A",
        "visitedCityRef": 48,
        "visitedCityName": "ESKİŞEHİR",
        "visitedTownRef": 425,
        "visitedTownName": "GÜNYÜZÜ",
        "visitedVillageRef": 168842,
        "visitedVillageName": "GÜMÜŞKONAK",
        "visitedFirmRef": "12206191888",
        "visitedFirmName": "ELİF ÖZDOĞRU",
        "userName": "GÖKÇEN KAYA",
        "idUserRef": "10300314912",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "6F761D8E-521C-4268-8294-EE09B5A87FD3",
        "visitedCityRef": 74,
        "visitedCityName": "ORDU",
        "visitedTownRef": 769,
        "visitedTownName": "KUMRU",
        "visitedVillageRef": 136522,
        "visitedVillageName": "AYVALI",
        "visitedFirmRef": "37339923908",
        "visitedFirmName": "KEZBAN İNAZ",
        "userName": "MEHMET BURAK AYAZ",
        "idUserRef": "14383177778",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "720E97D9-2D01-4AD5-891F-3E74C0476E55",
        "visitedCityRef": 49,
        "visitedCityName": "GAZİANTEP",
        "visitedTownRef": 437,
        "visitedTownName": "NİZİP",
        "visitedVillageRef": 144547,
        "visitedVillageName": "ÇATALCA",
        "visitedFirmRef": "13169185778",
        "visitedFirmName": "AHMET DİKEN",
        "userName": "SEBİHA KORKMAZ SAĞIROĞLU",
        "idUserRef": "46786061828",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "76025E2F-A7C0-4B20-9808-74AF81E0378D",
        "visitedCityRef": 49,
        "visitedCityName": "GAZİANTEP",
        "visitedTownRef": 437,
        "visitedTownName": "NİZİP",
        "visitedVillageRef": 202752,
        "visitedVillageName": "YAĞCILAR",
        "visitedFirmRef": "13169185778",
        "visitedFirmName": "AHMET DİKEN",
        "userName": "SEBİHA KORKMAZ SAĞIROĞLU",
        "idUserRef": "46786061828",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "43383BF1-A80E-45FE-A709-58EC7EFE9CF0",
        "visitedCityRef": 82,
        "visitedCityName": "TOKAT",
        "visitedTownRef": 868,
        "visitedTownName": "ZİLE",
        "visitedVillageRef": 158956,
        "visitedVillageName": "ÜTÜK",
        "visitedFirmRef": "47602600870",
        "visitedFirmName": "SADIK KAYGUSUZ",
        "userName": "MUSTAFA ERDEM ÇİNİ",
        "idUserRef": "34591226204",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "9A150DAD-94CB-4459-BDF8-8AC6EE4DE8EA",
        "visitedCityRef": 82,
        "visitedCityName": "TOKAT",
        "visitedTownRef": 868,
        "visitedTownName": "ZİLE",
        "visitedVillageRef": 154438,
        "visitedVillageName": "ÇAPAK",
        "visitedFirmRef": "47602600870",
        "visitedFirmName": "SADIK KAYGUSUZ",
        "userName": "MUSTAFA ERDEM ÇİNİ",
        "idUserRef": "34591226204",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "A0AA69B6-3C14-4661-9889-F488ADC56328",
        "visitedCityRef": 37,
        "visitedCityName": "BURDUR",
        "visitedTownRef": 276,
        "visitedTownName": "BUCAK",
        "visitedVillageRef": 39689,
        "visitedVillageName": "ÜRKÜTLÜ",
        "visitedFirmRef": "26608716242",
        "visitedFirmName": "AYŞE MÜGE ULUSOY",
        "userName": "ŞENGÜL YETKİN",
        "idUserRef": "34582111892",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "0B5B97EA-C8BA-45EE-8BD0-4FB382181783",
        "visitedCityRef": 31,
        "visitedCityName": "AYDIN",
        "visitedTownRef": 207,
        "visitedTownName": "BOZDOĞAN",
        "visitedVillageRef": 150632,
        "visitedVillageName": "YEŞİLÇAM",
        "visitedFirmRef": "29191108258",
        "visitedFirmName": "GÜNGÖR TAN",
        "userName": "HATİCE AKYOL",
        "idUserRef": "22513112322",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "8EA266C4-ABAD-41E4-8876-3C00342A2471",
        "visitedCityRef": 23,
        "visitedCityName": "ADANA",
        "visitedTownRef": 114,
        "visitedTownName": "TUFANBEYLİ",
        "visitedVillageRef": 46035,
        "visitedVillageName": "CUMHURİYET",
        "visitedFirmRef": "18391171360",
        "visitedFirmName": "EMİN BİLGE",
        "userName": "TUFAN ATABAŞ",
        "idUserRef": "15230506642",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "723F30AE-40C9-4D9F-8F76-3EC7C86C1A47",
        "visitedCityRef": 23,
        "visitedCityName": "ADANA",
        "visitedTownRef": 114,
        "visitedTownName": "TUFANBEYLİ",
        "visitedVillageRef": 45452,
        "visitedVillageName": "YENİCAMİ",
        "visitedFirmRef": "18391171360",
        "visitedFirmName": "EMİN BİLGE",
        "userName": "TUFAN ATABAŞ",
        "idUserRef": "15230506642",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "5DC344D2-CAD6-49BE-852D-7EC9A18918BE",
        "visitedCityRef": 38,
        "visitedCityName": "BURSA",
        "visitedTownRef": 299,
        "visitedTownName": "OSMANGAZİ",
        "visitedVillageRef": 166833,
        "visitedVillageName": "BAĞLI",
        "visitedFirmRef": "15904782488",
        "visitedFirmName": "GÜLSEL DOĞAN",
        "userName": "MÜRVET ÖZTÜRK",
        "idUserRef": "28033387554",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Hayvancılık",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "FF561B1B-0F52-4ECE-B69B-C6358144EC5B",
        "visitedCityRef": 38,
        "visitedCityName": "BURSA",
        "visitedTownRef": 291,
        "visitedTownName": "KARACABEY",
        "visitedVillageRef": 133487,
        "visitedVillageName": "HÜDAVENDİGAR",
        "visitedFirmRef": "12577865944",
        "visitedFirmName": "SEYFİ SAYGISEVER",
        "userName": "Feyzan Halver",
        "idUserRef": "11471974486",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "2231FB57-5D3C-485A-B60E-D09555D1382D",
        "visitedCityRef": 38,
        "visitedCityName": "BURSA",
        "visitedTownRef": 291,
        "visitedTownName": "KARACABEY",
        "visitedVillageRef": 157514,
        "visitedVillageName": "YUKARIFEVZİPAŞA",
        "visitedFirmRef": "12577865944",
        "visitedFirmName": "SEYFİ SAYGISEVER",
        "userName": "Feyzan Halver",
        "idUserRef": "11471974486",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    },
    {
        "idVisit": "53B77ECB-1187-4717-9E2D-B850F3F5939A",
        "visitedCityRef": 38,
        "visitedCityName": "BURSA",
        "visitedTownRef": 291,
        "visitedTownName": "KARACABEY",
        "visitedVillageRef": 157162,
        "visitedVillageName": "SULTANİYE",
        "visitedFirmRef": "12577865944",
        "visitedFirmName": "SEYFİ SAYGISEVER",
        "userName": "Feyzan Halver",
        "idUserRef": "11471974486",
        "visitTime": new Date("9.12.2016"),
        "visitGroup": "Zirai",
        "visitDetails": "Tanışma Ziyareti"
    }
];

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (visit: IVisit) => {
    return `${visit.visitTime}-${visit.idUserRef}`
};

class VisitApi {
    static getAllVisits() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], visits));
            }, delay);
        });
    }

    static saveVisit(visit: IVisit) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                if (visit.idVisit) {
                    const existingCourseIndex = visits.findIndex(a => a.idVisit == visit.idVisit);
                    visits.splice(existingCourseIndex, 1, visit);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    visit.idVisit = generateId(visit);
                    visits.push(visit);
                }

                resolve(Object.assign({}, visit));
            }, delay);
        });
    }

    static deleteVisit(visitId: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfVisitToDelete = visits.findIndex(course => course.idVisit == visitId);
                visits.splice(indexOfVisitToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default VisitApi;