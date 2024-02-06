//ハンバーガーメニュー

document.addEventListener("DOMContentLoaded",()=>{
    const nav = document.getElementById("h-nav");
    const btn = document.querySelector(".header_nav_btn");
    const menuClose = document.querySelector(".fa-xmark");

    btn.addEventListener("click",()=>{
        nav.classList.add("nav-show");
    });
    menuClose.addEventListener("click",()=>{
        nav.classList.remove("nav-show");
    })
});
// $(document).ready(function() {
//     const nav = $("#h-nav");
//     const btn = $(".header_nav_btn");
//     const menuClose = $(".fa-xmark");

//     btn.on("click", function() {
//         nav.addClass("nav-show");
//     });

//     menuClose.on("click", function() {
//         nav.removeClass("nav-show");
//     });
// });

// DOMContentLoaded は、HTML ドキュメントが完全に読み込まれ、解析され、すべての外部リソース（画像、スタイルシート、スクリプトなど）がダウンロードされた後に発生するイベントです。このイベントは、ページがユーザに表示され、操作可能な状態になった時点で発火します。

// 通常、JavaScript コードを DOMContentLoaded イベント内に配置することで、ページの初期化が完了した後にスクリプトを実行できます。これにより、ページ全体の読み込みを待たずにスクリプトが実行され、ユーザーエクスペリエンスが向上します。

//フェードイン
$(function () {
    // ウィンドウをスクロールしたら
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".js-fade").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});
//スライド
    document.addEventListener("DOMContentLoaded", function () {
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            effect: 'fade', // フェードイン・アウトのエフェクトを設定
            fadeEffect: {
                crossFade: true // クロスフェードを有効にする
            },
            autoplay: {
                delay: 3000, // 自動でスライドを切り替えるまでの時間（ミリ秒）
            },
        });
    });
    //アコーディオン
    document.addEventListener("DOMContentLoaded", function () {
        const qaItems = document.querySelectorAll('.qa-item');

        qaItems.forEach(item => {
            const qArea = item.querySelector('.q-area');
            const aArea = item.querySelector('.a-area');
            const plusIcon = item.querySelector('.fa-plus');
            const minusIcon = document.createElement('i'); // Create a minus icon dynamically
            minusIcon.classList.add('fa-solid', 'fa-minus');
            minusIcon.style.display = 'none'; // Hide minus icon by default
            qArea.appendChild(minusIcon); // Append minus icon to q-area

            qArea.addEventListener('click', () => {
                aArea.style.display = (aArea.style.display === 'block') ? 'none' : 'block';
                plusIcon.style.display = (aArea.style.display === 'block') ? 'none' : 'block';
                minusIcon.style.display = (aArea.style.display === 'block') ? 'block' : 'none';
            });
        });
    });
    //aArea (回答エリア) の表示/非表示を切り替えます。
    // aArea.style.display = (aArea.style.display === 'block') ? 'none' : 'block';
    // aArea の現在の表示状態を確認し、表示されている場合は非表示に、非表示の場合は表示に切り替える
    //プラスアイコン (plusIcon) とマイナスアイコン (minusIcon) の表示を切り替えます。
    // plusIcon.style.display = (aArea.style.display === 'block') ? 'none' : 'inline-block';
    // aArea が表示されている場合、プラスアイコンを非表示にします。それ以外の場合はインラインブロックにします。
    // minusIcon.style.display = (aArea.style.display === 'block') ? 'inline-block' : 'none';
    // aArea が表示されている場合、マイナスアイコンをインラインブロックにします。それ以外の場合は非表示にします。




