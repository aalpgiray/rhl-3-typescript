import { Component } from 'react';

export default class Home extends Component<{}, void> {
    render() {
        return (
            <div class="container"><h1>Tarımsal İşletme Danışmanlığı Ziyaret Kayıt Sistemi</h1><p>Bu sistemi kullanarak tarımsal işletme danışmanlarının gerçekleştirdiği işletme ziyaretleri kayıt altına alınacak ve toplanan veriler çeşitli şekillerde raporlanacaktır.</p><p>Bu sistem ile toplanacak veriler başlıca:</p><p>- İşletme Danışmanı</p><p>- Ziyaret Edilen İşletme</p><p>- Ziyaret Yapılan İl</p><p>- Ziyaret Yapılan İlçe</p><p>- Ziyaret Yapılan Mahalle/Köy</p><p>- Ziyaret Grubu</p><p>- Ziyaret Tarihi</p><p>- Ziyaret Konusu</p><p>gibi verileri içermektedir.</p></div>
        )
    }
}