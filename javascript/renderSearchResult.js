
$(document).ready(function () {
    const $searchResultList = $('#searchResultList');
    const $filterFromDate = $('#filterFromDate');
    const $filterToDate = $('#filterToDate');

    $filterFromDate.val((new Date).toISOString().substr(0, 10));
    $filterToDate.val((new Date).toISOString().substr(0, 10));
    let key = localStorage.getItem("key");

    if (key) {
        document.getElementById("moreResultSearchInp").value = key;
    } else {
        key = "Đăng ký";
    }
    const articles = [
        {
            title: "Thông báo đăng ký học phần cho sinh viên bậc Cao đẳng HK1 2020-2021",
            date: "14/12/2020",
            summary: "Khoa CNTT thông báo đến tất cả các sinh viên bậc cao đẳng hệ chính quy khóa tuyển 2018 trở về trước về việc đăng ký học phần qua mạng HK1 2020-2021. Sinh viên chú ý theo dõi và đăng ký theo đúng lịch trường đã sắp xếp...",
            link: "../detailNotiStudentPage/index.html"
        },
        {
            title: "Thông báo nộp đơn đăng ký Thực hiện Khóa luận tốt nghiệp/Thực tập tốt nghiệp/Đồ án tốt nghiệp Khóa 2017 - Đợt 2 (Online)",
            date: "07/12/2020",
            thumbnail: "../images/detail-notification-image-1.png",
            summary: "BP Giáo vụ thông báo các bạn sinh viên đã được Giảng viên Doanh nghiệp nhận thực hiện đề tài tốt nghiệp trong đợt đăng ký Thực hiện Khóa luận tốt nghiệp/Thực tập tốt nghiệp/Đồ án tốt nghiệp Khóa 2017 - Đợt 2 ... Chương trình chính quy.",
            link: "../detailNotiStudentPage/index.html"
        },
        {
            title: "Đăng ký ứng tuyển học bổng công ty TNHH ScrumViet",
            date: "03/12/2020",
            thumbnail: "../images/detail-notification-image-2.png",
            summary: "Với mong muốn đóng góp một phần nhỏ vào việc phát triển giáo dục ở Việt Nam và đặc biệt cho ngành công nghệ thông tin - Công ty TNHH ScrumViet.",
            link: "../detailNotiStudentPage/index.html"
        }  
    ];

    const sortByDateAsc = () => {
        articles.sort(compareDateAsc);
    }

    const sortByDateDesc = () => {
        articles.sort(compareDateDesc);
    }

    const compareDateAsc = (art1, art2) => {
        return (new Date(art1.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime() - (new Date(art2.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime();
    }

    const compareDateDesc = (art1, art2) => {
        return (new Date(art2.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime() - (new Date(art1.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime();
    }

    const renderResult = (keyword) => {
        articles.forEach((article) => {
            const keywordRegex = new RegExp(keyword, "gi");
            let title = article.title.replace(keywordRegex, (matching) => {
                return `<span class="searchResult-number" style="color: red; font-style: italic;"><u>${matching}&nbsp;</u></span>`
            });
            const $li = $('<li class="py-4"></li>');
            const $h6 = $(`<h6 class="article-title"></h6>`);
            const $h6a = $(`<a href=${article.link}>${title}</a>`);
            $h6.append($h6a);
            $li.append($h6);

            const $row = $('<div class="row"></div>');
            const $date = $(`<div class="col-md-2 article-date my-0" style="font-size: 0.9rem; color: rgba(0,0,0,0.5)"><u>${article.date}</u></div>`);
            if (article.thumbnail){
                const $thumbnail = $(`<div class="search-article-thumbnail"><img src="${article.thumbnail}" /></div>`);
                $date.prepend($thumbnail);
            }
            const $content = $(`<div class="col-md-10 article-content py-2" style="font-size: 0.9rem; color: rgba(0,0,0,0.5)"><p>${article.summary}</p></div>`)
            $row.append($date, $content);

            $li.append($row);
            $searchResultList.append($li);
        })
    }
    renderResult(key);

    $('#sortByDateDesc').on('click', (e) => {
        sortByDateDesc();
        $searchResultList.empty();
        renderResult(key);
    })

    $('#sortByDateAsc').on('click', (e) => {
        sortByDateAsc();
        $searchResultList.empty();
        renderResult(key);
    })
})