

/*===================================================================================================

.first-view内のsplide設定

====================================================================================================*/
const firstViewSplide = new Splide(".first-view .splide", {
	autoplay: true, // 自動再生
	type: "fade", // フェード
	rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
	pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
	pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
	interval: 5000, // 自動再生の間隔
	speed: 2000, // スライダーの移動時間
}).mount();

/*===================================================================================================

.works内のsplide設定

====================================================================================================*/
document.addEventListener('DOMContentLoaded', function () {
    const splideMain = new Splide('.splide-main', {
      type: 'loop',
      speed: 2000,
      rewind: true,
      rewindByDrag: true,
      perPage: 2,
      perMove: 2,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus:true,
      resetProgress:false,
      gap: '1rem',
      classes: {
        // 矢印関連のクラスを追加
        arrows: 'splide__arrows your-class-arrows',
        arrow : 'splide__arrow your-class-arrow',
        prev  : 'splide__arrow--prev your-class-prev',
        next  : 'splide__arrow--next your-class-next',

        // ページネーション関連のクラスを追加
        pagination: 'splide__pagination your-class-pagination', // container
        page      : 'splide__pagination__page your-class-page', // each button
    },
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  
    const splideSecondary = new Splide('.splide-secondary', {
      type: 'loop',
      speed:2000,
      rewindByDrag: true,
      perPage: 2,
      perMove: 2,
      autoplay: true,
      pauseOnHover: true,
      gap: '1rem',
      pauseOnFocus:true, //アクセシビリティの観点から、この値はtrueのままにしておくことをおすすめします。
      resetProgress:false, //自動再生が中断されたのち再開する際、それまでの経過時間を維持するか破棄するかを決定します。
      classes: {
          // 矢印関連のクラスを追加
          arrows: 'splide__arrows your-class-arrows',
          arrow : 'splide__arrow your-class-arrow',
          prev  : 'splide__arrow--prev your-class-prev',
          next  : 'splide__arrow--next your-class-next',

          // ページネーション関連のクラスを追加
          pagination: 'splide__pagination your-class-pagination', // container
          page      : 'splide__pagination__page your-class-page', // each button
      },
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  
    splideMain.mount();
    splideSecondary.mount();
  });
  