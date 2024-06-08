
let rooms_org = [
    {
        name: 407,
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [
            "流动研究生"
        ],
        chargedBy: {
            name: "赵生捷",
            phone: "18616868080"
        },
        status: "正在使用",
        pics: [
            "images/room/407.png",
        ],
        tags: [
            "功能齐全",
            "机器学习",
            "计算机视觉",
            "助教",
        ],
    },
    {
        name: 408,
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [
            "流动研究生"
        ],
        chargedBy: {
            name: "严海州",
            phone: "13918378240"
        },
        status: "正在使用",
        pics: [
            "images/room/408.png",
        ],
        tags: [
            "功能齐全",
            "机器人",
            "实时系统",
            "助教",
        ],
    },
    {
        name: 409,
        type: "研究生工作室",
        usage: "科研活动、办公",
        teachers: [
            "流动研究生",
            "杜庆峰"
        ],
        chargedBy: {
            name: "杜庆峰",
            phone: "18964806609"
        },
        status: "正在使用",
        pics: [
            "images/room/409.png",
        ],
        tags: [
            "功能齐全",
            "机器人",
            "实时系统",
            "助教",
        ],
    },
    {
        name: 410,
        type: "教研室",
        usage: "科研活动、办公",
        teachers: [
            "王冬青",
            "李江峰",
            "夏波涌",
            "张颖",
        ],
        chargedBy: {
            name: "严海州",
            phone: "13918378240"
        },
        status: "正在使用",
        pics: [
            "images/room/410.png",
        ],
        tags: [
            "功能齐全",
            "语音识别",
            "计算机视觉",
        ],
    },
    {
        name: 412,
        type: "教研室",
        usage: "教师办公",
        teachers: [
            "孙萍",
            "刘岩",
            "张惠娟",
            "罗怡桂",
        ],
        chargedBy: {
            name: "严海州",
            phone: "13918378240"
        },
        status: "正在使用",
        pics: [
            "images/room/412.png",
        ],
        tags: [
            "办公室",
            "讨论桌",
        ],
    },
    {
        name: 414,
        type: "教室",
        usage: "授课、自习",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "空闲",
        pics: [
            "images/room/414.png",
        ],
        tags: [
            "功能齐全",
            "投影仪",
        ]
    },
    {
        name: 416,
        type: "多媒体教学机房",
        usage: "授课、自习",
        teachers: [
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "空闲",
        pics: [
            "images/room/416.png",
        ],
        tags: [
            "功能齐全",
            "投影仪",
            "多媒体",
            "机房"
        ]
    },
    {
        name: 417,
        type: "会议室",
        usage: "开会议",
        teachers: [
            "流动会议人员"
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "正在使用",
        pics: [
            "images/room/417.png",
        ],
        tags: [
            "投影仪",
            "一体机",
        ],
    },
    {
        name: 418,
        type: "教授办公室",
        usage: "教授办公",
        teachers: [
             "张林",
             "江建慧",
             "刘琴",
        ],
        chargedBy: {
             name: "严海州",
            phone: "13918378240"
        },
        status: "正在使用",
        pics: [
            "images/room/418.png",
        ],
        tags: [
            "办公桌",
            "打印机",
        ],
    },
    {
        name: 419,
        type: "计算机系统实验室",
        usage: "科研、实验",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "张晶",
            phone: "1391613163"
        },
        status: "正在使用",
        pics: [
            "images/room/419.png",
        ],
        tags: [
            "计算机",
            "投影仪",
        ],
    },
    {
        name: 426,
        type: "多媒体教学机房",
        usage: "教学",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "正在使用",
        pics: [
            "images/room/426.png",
        ],
        tags: [
            "多媒体",
            "实验",
        ],
    },
    {
        name: 428,
        type: "服务器机房",
        usage: "教学",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "正在使用",
        pics: [
            "images/room/428.png",
        ],
        tags: [
            "网络与服务器管理室",
            "实验",
            "机房"
        ],
    },
    {
        name: 430,
        type: "多媒体教学机房",
        usage: "教学",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "正在使用",
        pics: [
            "images/room/430.png",
        ],
        tags: [
            "多媒体",
            "实验",
        ],
    },
    {
        name: 432,
        type: "党员之家",
        usage: "党建活动",
        teachers: [
            "流动党员"
        ],
        chargedBy: {
            name: "张三",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/432.png",
        ],
        tags: [
            "党建活动",
        ],
    },
    {
        name: 434,
        type: "教学教室",
        usage: "教学",
        teachers: [
            "任课教师",
            "学生"
        ],
        chargedBy: {
            name: "李四",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/434.png",
        ],
        tags: [
            "教学",
            "会议",
        ],
    },
    {
        name: 441,
        type: "会议室",
        usage: "会议",
        teachers: [
            "流动会议人员"
        ],
        chargedBy: {
            name: "保安",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/441.png",
        ],
        tags: [
            "投影仪",
            "投影幕",
        ]
    },
    {
        name: 442,
        type: "教育部工程研究中心实验室",
        usage: "工程研究、实验",
        teachers: [
            "实验人员"
        ],
        chargedBy: {
            name: "王五",
            phone: "123456789"
        },
        status: "空闲",
        pics: [
            "images/room/442-1.png",
            "images/room/442-2.png",
        ],
        tags: [
            "实验",
        ]
    },
    {
        name: 443,
        type: "办公室",
        usage: "办公",
        teachers: [
            "陈梁",
            "杨旻",
        ],
        chargedBy: {
            name: "张三",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/443.png",
        ],
        tags: [
            "打印机",
            "讨论桌",
        ]
    },
    {
        name: 444,
        type: "办公室",
        usage: "办公",
        teachers: [
            "陈梁",
            "杨旻",
        ],
        chargedBy: {
            name: "杨旻",
            phone: "13918683745"
        },
        status: "空闲",
        pics: [
            "images/room/444.png",
        ],
        tags: [
            "打印机",
            "讨论桌",
        ]
    },
    {
        name: 446,
        type: "学生工作办公室 创新管理办公室",
        usage: "辅导员和学生办公",
        teachers: [
            "葛蕾",
            "焦嘉欣",
            "钟梦莹",
            "陈璞皎",
            "严海洲",
        ],
        chargedBy: {
            name: "严海州",
            phone: "13918378240"
        },
        status: "正在使用",
        pics: [
            "images/room/446.png",
        ],
        tags: [
            "打印机",
            "讨论桌",
        ]
    },
    {
        name: 448,
        type: "备用教室",
        usage: "备用教室",
        teachers: [
            "无"
        ],
        chargedBy: {
            name: "保安",
            phone: "123456789"
        },
        status: "未使用",
        pics: [
            "images/room/448.png",
        ],
        tags: [
            "备用",
        ]
    },
    {
        name: 450,
        type: "院长办公室",
        usage: "院长办公",
        teachers: [
            "赵生捷",
        ],
        chargedBy: {
            name:"无",
            number:"无"
        },
        status: "正在使用",
        pics: [
            "images/room/450.png",
        ],
        tags: [
            "办公桌",
            "打印机",
        ]
    },
    {
        name: 451,
        type: "副院长与副书记办公室",
        usage: "办公",
        teachers: [
            "穆斌",
            "陈荣",
        ],
        chargedBy: {
            name: "张三",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/451.png",
        ],
        tags: [
            "办公桌",
            "打印机",
        ]
    },
    {
        name: 455,
        type: "会议室",
        usage: "开会议",
        teachers: [
            "流动会议人员"
        ],
        chargedBy: {
            name: "保安",
            phone: "123456789"
        },
        status: "正在使用",
        pics: [
            "images/room/455.png",
        ],
        tags: [
            "投影仪",
            "投影幕",
        ]
    },
    {
        name: 456,
        type: "学院办公室",
        usage: "学院教师办公",
        teachers: [
            "张晓雅",
            "闫鹏",
            "钱银飞",
            "林伊凡",
            "张晶",
        ],
        chargedBy: {
            name: "张晶",
            phone: "1391613163"
        },
        status: "正在使用",
        pics: [
            "images/room/456.png",
        ],
        tags: [
            "办公桌",
            "打印机",
        ]
    },

];

$(document).ready(function() {
    // 初始化页面和按钮点击事件
    setup();
    $('.room-btn').on('click', function(event) {
        event.preventDefault();  // 阻止默认行为，如链接跳转
        var roomName = $(this).data('room');
        showRoomDetails(roomName);
    });
       
    $('.search-btn').click(function(event) {
        event.preventDefault(); // 阻止链接默认行为
        $('.search').toggleClass('hind active'); // 切换输入框的显示与隐藏
        $(this).toggleClass('active'); // 触发按钮的移动
        if ($('.search').hasClass('active')) {
            $('.search').focus(); // 当输入框显示时，自动获取焦点
        }
    });

    function showRoomDetails(roomName) {
        var room = rooms_org.find(r => r.name === roomName);
        if (room) {
            $('#roomTitle').text(room.name);
            $('#roomDescription').html(buildRoomDescription(room));
            $('#infoModal').show(); 
        } else {
            console.error("No room found with the name:", roomName);
        }
    }

    function buildRoomDescription(room) {
        var html = `<h2 style="text-align: center; margin: 0 auto;">${room.name} - ${room.type}</h2>
                    <p>主要活动: ${room.usage}</p>
                    <p>负责人: ${room.chargedBy.name}, ${room.chargedBy.phone}</p>
                    <p>主要人员: ${room.teachers.join(', ')}</p>
                    <p>使用状态: ${room.status}</p>
                    <div>房间标签: ${room.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
                    <div><img src="${room.pics[0]}" alt="Room image" style="max-width:100%;"></div>`;
        return html;
    }

    // 加载页面时基于URL参数设置内容
    function setup() {
        $('.close').click(function() {
            $('#infoModal').hide();  // 关闭模态框
        });

        var roomName = getQueryVariable("room");
        if (roomName) {
            showRoomDetails(roomName);
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return false;
    }

    document.getElementById('searchInput').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = ''; 
        if (searchTerm) {
            const filteredRooms = rooms_org.filter(room =>
                room.name.toString().includes(searchTerm) || 
                room.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            if (filteredRooms.length) {
                filteredRooms.forEach(room => {
                    const div = document.createElement('div');
                    div.className = 'search-result'; 
                    div.innerHTML = `<strong>${room.name}</strong>-${room.type}<br>` +
                                `${room.tags.map(tag => `<span class="tag">${tag}</span>`).join(', ')}`;
                    div.onclick = () => {
                        showRoomDetails(room.name);
                        resultsContainer.style.display = 'none';
                    };
                    resultsContainer.appendChild(div);
                });
                resultsContainer.style.display = 'block';
            } else {
                resultsContainer.style.display = 'none';
            }
        } else {
            resultsContainer.style.display = 'none';
        }
    });
    
});

