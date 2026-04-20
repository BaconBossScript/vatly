// ================================================================
// FILE DỮ LIỆU – Vật Lí 12 – Ôn tập CK2
// Để thêm/sửa câu hỏi: chỉnh sửa file này, không cần đụng vào li12_quiz.html
//
// Cấu trúc:
//   MC  : {c, s, q, o:[4], a:index 0-3}
//   TF  : {c, q, stmts:[{t, a:bool}]}
//   SA  : {c, q, a}
//
// c = chapter code: 'TT' (Từ Trường) | 'HN' (Hạt Nhân)
// ================================================================

const MC = [
// =================== CHƯƠNG 3: TỪ TRƯỜNG ===================
// Chủ đề 1: Từ trường
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Tương tác nào dưới đây không được gọi là lực từ?',o:['Giữa nam châm với nam châm.','Giữa nam châm với dòng điện.','Giữa dòng điện với dòng điện.','Giữa nam châm và miếng nhôm đặt cạnh dòng điện.'],a:3},
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Tính chất cơ bản của từ trường là',o:['gây ra lực từ tác dụng lên nam châm hoặc lên dòng điện đặt trong nó.','gây ra lực hấp dẫn lên các vật đặt trong nó.','gây ra lực đàn hồi tác dụng lên các dòng điện và nam châm đặt trong nó.','gây ra sự biến đổi về tính chất điện của môi trường xung quanh.'],a:0},
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Các đường sức từ là những đường vẽ trong không gian có từ trường sao cho',o:['pháp tuyến tại mỗi điểm có phương trùng với phương của kim nam châm nhỏ nằm cân bằng tại điểm đó.','tiếp tuyến tại mỗi điểm có phương trùng với phương của kim nam châm nhỏ nằm cân bằng tại điểm đó.','pháp tuyến tại mỗi điểm có phương tạo với phương của kim nam châm tại điểm đó một góc không đổi.','tiếp tuyến tại mỗi điểm có phương tạo với phương của kim nam châm tại điểm đó một góc không đổi.'],a:1},
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Từ phổ là',o:['hình ảnh của các đường mạt sắt cho ta hình ảnh của các đường sức từ của từ trường.','hình ảnh tương tác của hai nam châm với nhau.','hình ảnh tương tác giữa dòng điện và nam châm.','hình ảnh tương tác của hai dòng điện chạy trong hai dây dẫn thẳng song song.'],a:0},
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Cảm ứng từ tại một điểm trong từ trường',o:['cùng hướng với hướng của từ trường tại điểm đó.','cùng hướng với lực từ tác dụng lên phần tử dòng điện đặt tại điểm đó.','có độ lớn tỉ lệ nghịch với độ lớn của lực từ tác dụng lên phần tử dòng điện đặt tại điểm đó.','có độ lớn tỉ lệ với cường độ của phần tử dòng điện đặt tại điểm đó.'],a:0},
{c:'TT',s:'Chủ đề 1: Từ trường',q:'Kim nam châm có',o:['đầu trên là cực Bắc, đầu dưới là cực Nam.','đầu dưới là cực Bắc, đầu trên là cực Nam.','cực Bắc ở gần thanh nam châm hơn (khi đặt gần cực Nam của thanh).','không xác định được các cực.'],a:2},

// Chủ đề 2: Lực từ
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện tỉ lệ với',o:['điện trở của đoạn dây.','bình phương hiệu điện thế giữa hai đầu đoạn dây.','căn bậc hai của hiệu điện thế giữa hai đầu đoạn dây.','cường độ dòng điện qua đoạn dây.'],a:3},
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Lực từ tác dụng lên đoạn dây dẫn có phương:',o:['Vuông góc với mặt phẳng chứa dây dẫn.','Vuông góc với mặt phẳng chứa véctơ.','Vuông góc với mặt phẳng chứa dây dẫn và véctơ cảm ứng từ.','Vuông góc với véctơ pháp tuyến.'],a:2},
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Phát biểu nào sau đây KHÔNG đúng khi nói về lực từ?',o:['Lực từ tác dụng lên đoạn dây dẫn có phương vuông góc với dòng điện.','Lực từ tác dụng lên đoạn dây dẫn có chiều tuân theo quy tắc bàn tay trái.','Lực từ tác dụng lên đoạn dây dẫn có điểm đặt tại trung điểm của đoạn dây mang dòng điện.','Lực từ tác dụng lên đoạn dây dẫn tỉ lệ nghịch với độ lớn cảm ứng từ B.'],a:3},
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Lực từ tác dụng lên một đoạn dây có dòng điện đặt trong từ trường đều KHÔNG tỉ lệ thuận với đại lượng nào?',o:['Cường độ dòng điện trong đoạn dây.','Chiều dài của đoạn dây.','Góc hợp bởi đoạn dây và đường sức từ.','Cảm ứng từ tại điểm đặt đoạn dây.'],a:2},
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Một dòng điện đặt trong từ trường vuông góc với đường sức từ. Chiều của lực từ tác dụng vào dòng điện sẽ KHÔNG thay đổi khi',o:['đổi chiều dòng điện ngược lại.','đổi chiều cảm ứng từ ngược lại.','đồng thời đổi chiều dòng điện và đổi chiều cảm ứng từ.','quay dòng điện một góc 90° xung quanh đường sức từ.'],a:2},
{c:'TT',s:'Chủ đề 2: Lực từ – Cảm ứng từ',q:'Một đoạn dây dẫn dài 1,5 m mang dòng điện 10 A, đặt vuông góc trong một từ trường đều có độ lớn cảm ứng từ 1,2 T. Lực từ tác dụng lên đoạn dây là',o:['18 N.','1,8 N.','1800 N.','0 N.'],a:0},

// Chủ đề 3: Từ thông – Cảm ứng điện từ
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Từ thông qua một mạch kín được xác định bằng công thức',o:['Φ = BS/cosα','Φ = BS.sinα','Φ = BS.cosα','Φ = B/(S.cosα)'],a:2},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Suất điện động cảm ứng sinh ra do sự biến thiên của từ thông theo thời gian được xác định bằng biểu thức',o:['e = -ΔΦ/Δt','e = ΔΦ/Δt','e = -Δt/ΔΦ','e = Δt/ΔΦ'],a:0},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Định luật Lenz được dùng để xác định?',o:['Độ lớn của suất điện động cảm ứng trong một mạch điện kín.','Chiều dòng điện cảm ứng xuất hiện trong một mạch điện kín.','Cường độ của dòng điện cảm ứng xuất hiện trong một mạch điện kín.','Sự biến thiên của từ thông qua một mạch điện kín, phẳng.'],a:1},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Suất điện động cảm ứng trong mạch tỉ lệ với',o:['độ lớn của từ thông qua mạch.','tốc độ biến thiên của từ thông qua mạch.','độ lớn của cảm ứng từ.','thời gian xảy ra sự biến thiên từ thông qua mạch.'],a:1},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Từ thông qua vòng dây dẫn biến thiên khi',o:['vòng dây đứng yên, nam châm chuyển động xuống dưới.','vòng dây và nam châm cùng chuyển động đều lên trên cùng vận tốc.','vòng dây và nam châm cùng chuyển động đều xuống dưới cùng vận tốc.','vòng dây và nam châm cùng đứng yên.'],a:0},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Từ thông gửi qua diện tích của khung dây dẫn có giá trị lớn nhất khi',o:['Mặt phẳng khung song song với B (α = 90°)','Vectơ pháp tuyến vuông góc với B (α = 90°)','Vectơ pháp tuyến song song với B (α = 0°)','Mặt phẳng khung vuông góc với B (α = 90°)'],a:2},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Một khung dây phẳng diện tích 12 cm² đặt trong từ trường đều B = 5.10⁻² T. Mặt phẳng của khung dây hợp với vectơ cảm ứng từ một góc 30°. Từ thông qua diện tích S bằng',o:['3√3.10⁻⁵ Wb','3.10⁻⁵ Wb','6.10⁻⁵ Wb','6√3.10⁻⁵ Wb'],a:1},
{c:'TT',s:'Chủ đề 3: Từ thông – Cảm ứng điện từ',q:'Một khung dây phẳng diện tích 40 cm² gồm 200 vòng đặt trong từ trường đều có B = 0,04 T, vectơ B hợp với mặt phẳng khung góc 30°. Giảm đều B đến 0 trong 0,01 s. Suất điện động cảm ứng là',o:['40 mV','8 mV','4 V','0,8 V'],a:0},

// Chủ đề 4: Máy phát điện xoay chiều
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Dòng điện xoay chiều hình sin là dòng điện có cường độ',o:['biến thiên tỉ lệ thuận với thời gian.','biến thiên tuần hoàn theo thời gian.','biến thiên điều hòa theo thời gian.','và chiều thay đổi theo thời gian.'],a:2},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Từ thông cực đại Φ₀ gởi qua khung và suất điện động cực đại E₀ trong khung quay với tốc độ góc ω liên hệ bởi công thức',o:['E₀ = Φ₀/ω','E₀ = Φ₀.ω','E₀ = ω/Φ₀','E₀ = Φ₀²ω'],a:1},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Chọn phát biểu đúng về cấu tạo máy phát điện xoay chiều.',o:['Phần tạo ra từ trường là phần ứng.','Phần tạo dòng điện là phần ứng.','Phần tạo ra từ trường luôn quay.','Phần tạo ra dòng điện luôn đứng yên.'],a:1},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Cường độ dòng điện i = 4cos(120πt + π/3) A có pha ban đầu là',o:['4 rad','120π rad','π/3 rad','π/2 rad'],a:2},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Điện áp hiệu dụng ở hai đầu đoạn mạch khi điện áp xoay chiều có biên độ U₀ = 220√2 V là',o:['220√2 V','220/√2 V','220 V','110 V'],a:2},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Cho u = 50cos(100πt + π/6) V, dòng điện chậm pha hơn điện áp góc π/2. Tại t nào đó i = √2 A và u = 25 V. Biểu thức của cường độ dòng điện là',o:['i = 2cos(100πt + π/6 + π/2) A','i = 2cos(100πt - π/3) A','i = cos(100πt - π/3) A','i = cos(100πt + π/3) A'],a:1},
{c:'TT',s:'Chủ đề 4: Máy phát điện xoay chiều',q:'Khung dây quay trong từ trường có từ thông Φ = Φ₀cos(ωt + π/3). Suất điện động cảm ứng trong khung là',o:['e = -ωΦ₀cos(ωt + π/3)','e = ωΦ₀sin(ωt + π/3)','e = ωΦ₀cos(ωt + π/3 + π/2)','e = ωΦ₀sin(ωt + π/3 - π/2)'],a:1},

// Chủ đề 5: Ứng dụng cảm ứng điện từ
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Máy biến áp là thiết bị',o:['biến đổi tần số của dòng điện xoay chiều.','có khả năng biến đổi điện áp của dòng điện xoay chiều.','làm tăng công suất của dòng điện xoay chiều.','biến đổi dòng điện xoay chiều thành dòng điện một chiều.'],a:1},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Máy biến áp lí tưởng có N₁, N₂ vòng dây, điện áp hiệu dụng U₁ vào cuộn sơ cấp. Hệ thức đúng là',o:['U₁/U₂ = N₂/N₁','U₁/U₂ = N₁/N₂','U₁.N₁ = U₂.N₂','U₁ + N₁ = U₂ + N₂'],a:1},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Trong đàn ghi ta điện, hiện tượng cảm ứng điện từ được sử dụng để',o:['Tạo ra âm thanh to hơn từ dây đàn.','Tạo ra dòng điện xoay chiều nhờ vào chuyển động của dây đàn trong từ trường.','Chuyển đổi dao động cơ học của dây đàn thành tín hiệu điện.','Giảm ma sát giữa các dây đàn để bảo vệ dây khỏi bị đứt.'],a:2},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Dòng điện Foucault là:',o:['dòng điện chạy trong khối vật dẫn.','dòng điện cảm ứng sinh ra trong mạch kín khi từ thông qua mạch biến thiên.','dòng điện cảm ứng sinh ra trong khối vật dẫn khi vật dẫn chuyển động trong từ trường.','dòng điện xuất hiện trong tấm kim loại khi nối tấm kim loại với hai cực của nguồn điện.'],a:2},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Muốn làm giảm hao phí do toả nhiệt của dòng điện Foucault gây trên khối kim loại, người ta thường:',o:['chia khối kim loại thành nhiều lá kim loại mỏng ghép cách điện với nhau.','tăng độ dẫn điện cho khối kim loại.','đúc khối kim loại không có phần rỗng bên trong.','sơn phủ lên khối kim loại một lớp sơn cách điện.'],a:0},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Một vòng dây dẫn kín phẳng đặt trong từ trường đều. Trong 0,04 s, từ thông giảm đều từ 6.10⁻³ Wb về 0. Suất điện động cảm ứng có độ lớn là',o:['0,12 V','0,15 V','0,30 V','0,24 V'],a:1},
{c:'TT',s:'Chủ đề 5: Ứng dụng cảm ứng điện từ',q:'Máy biến áp lí tưởng có điện áp thứ cấp 20 V. Tăng thêm 60 vòng thứ cấp thì U₂ = 25 V. Nếu giảm bớt 90 vòng (so với ban đầu) thì điện áp thứ cấp là',o:['10 V','12,5 V','17,5 V','15 V'],a:1},

// Chủ đề 6: Điện từ trường
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Sự lan truyền của điện từ trường trong không gian được gọi là',o:['sóng điện từ.','sóng âm thanh.','điện trường.','từ trường.'],a:0},
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Trong sóng điện từ, dao động điện trường và dao động từ trường tại một điểm luôn',o:['cùng pha nhau.','ngược pha với nhau.','vuông pha với nhau.','lệch pha nhau góc 60°.'],a:0},
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Một sóng điện từ có tần số f truyền trong chân không với tốc độ c. Bước sóng là',o:['λ = c/f','λ = c.f','λ = f/c','λ = c + f'],a:0},
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Khi sóng điện từ truyền từ nước vào không khí thì',o:['tần số tăng.','tần số giảm.','bước sóng giảm.','bước sóng tăng.'],a:3},
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Một sóng điện từ có tần số 1 MHz truyền với tốc độ 3.10⁸ m/s có bước sóng là',o:['300 m','0,3 m','30 m','3 m'],a:0},
{c:'TT',s:'Chủ đề 6: Điện từ trường',q:'Sóng điện từ tại điểm M có E_max = 12 V/m và B_max = 0,8 T. Khi E = 3 V/m thì B bằng',o:['0,2 T','0,4 T','0,1 T','2 T'],a:0},

// =================== CHƯƠNG 4: VẬT LÝ HẠT NHÂN ===================
// Chủ đề 1: Cấu trúc hạt nhân
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Hạt nhân nguyên tử được cấu tạo từ',o:['nucleon, electron.','proton, electron.','neutron, electron.','proton, neutron.'],a:3},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Hiện tượng tán xạ hạt alpha là gì?',o:['Là hiện tượng hạt nhân vàng bị lệch hướng khi hạt alpha đi qua.','Là hiện tượng hạt alpha truyền thẳng khi đi qua hạt nhân vàng.','Là hiện tượng chuyển động của hạt alpha bị phá vỡ khi đi qua hạt nhân vàng.','Là hiện tượng lệch hướng chuyển động của hạt alpha khi đến gần hạt nhân vàng.'],a:3},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Các hạt nhân đồng vị là những hạt nhân có cùng số',o:['Z nhưng khác nhau số A.','A nhưng khác nhau số Z.','neutron.','Z và cùng số A.'],a:0},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Khối lượng nguyên tử bằng',o:['Khối lượng hạt nhân','Khối lượng của electron','Tổng của khối lượng hạt nhân và electron','Tổng của khối lượng proton và electron'],a:2},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Đơn vị khối lượng nguyên tử (amu) là:',o:['Khối lượng của một nguyên tử hydro','Có giá trị bằng 1/12 khối lượng nguyên tử của đồng vị Carbon 12','Khối lượng của một nguyên tử Carbon','Khối lượng của một nucleon'],a:1},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Trong kí hiệu hạt nhân, đại lượng N = A – Z cho biết số lượng của loại hạt nào trong hạt nhân?',o:['Electron.','Số khối.','Proton.','Neutron.'],a:3},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Theo mô hình Rutherford, phát biểu nào sau đây KHÔNG đúng về cấu tạo nguyên tử?',o:['Hạt nhân mang điện tích dương, các electron chuyển động xung quanh hạt nhân.','Hạt nhân mang điện tích âm, các electron chuyển động xung quanh hạt nhân.','Trong nguyên tử số hạt proton và số hạt electron luôn bằng nhau.','Các electron chuyển động thành từng lớp theo quỹ đạo giống hành tinh xung quanh hạt nhân.'],a:1},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Hạt nhân ²³⁸₉₂U có cấu tạo gồm:',o:['238 proton và 92 neutron','92 proton và 238 neutron','238 proton và 146 neutron','92 proton và 146 neutron'],a:3},
{c:'HN',s:'Chủ đề 1: Cấu trúc hạt nhân',q:'Biết khối lượng electron là 5,5.10⁻⁴ amu. Khối lượng của hạt nhân ¹²₆C là',o:['11,9967 amu','34,789 amu','12,459 amu','6,345 amu'],a:0},

// Chủ đề 2: Phản ứng hạt nhân
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Phản ứng hạt nhân là gì?',o:['Là quá trình biến đổi hạt nhân này thành hạt nhân khác.','Là quá trình biến đổi của các nguyên tố hóa học.','Là sự phân hủy hạt nhân trong nguyên tử.','Là sự biến đổi của proton và neutron trong nguyên tử.'],a:0},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Năng lượng tối thiểu dùng để tách toàn bộ số nucleon ra khỏi hạt nhân được gọi là',o:['Bảo toàn năng lượng.','Năng lượng ion hóa.','Năng lượng liên kết riêng.','Năng lượng liên kết hạt nhân.'],a:3},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Mức độ bền vững của hạt nhân phụ thuộc vào đại lượng vật lí nào?',o:['Năng lượng liên kết.','Độ hụt khối.','Năng lượng liên kết riêng.','Số khối và số neutron.'],a:2},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Năng lượng E và khối lượng m tương ứng của cùng một vật liên hệ bởi',o:['E = mc','E = mc²','E = m²c','E = m/c'],a:1},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Phản ứng tổng hợp hạt nhân là gì?',o:['Là phản ứng trong đó hai hay nhiều hạt nhân nhẹ tổng hợp lại thành một hạt nhân nặng hơn.','Là phản ứng trong đó hạt nhân phân hạch ra các phân tử nhỏ hơn.','Là phản ứng trong đó hạt nhân phân rã ra các phân tử nhỏ hơn.','Phản ứng trong đó một hạt nhân nặng hợp nhất với một hạt nhân nhẹ.'],a:0},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Lực hạt nhân là gì?',o:['Lực điện.','Lực từ.','Lực tương tác giữa các nucleon.','Lực tương tác giữa proton và electron.'],a:2},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Năng lượng tỏa ra trong các phản ứng hạt nhân thường được chuyển hóa thành',o:['Nhiệt năng.','Điện năng.','Hóa năng.','Cơ năng.'],a:0},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Bộ phận chính của nhà máy điện hạt nhân là',o:['Lò phản ứng hạt nhân.','Đường vào của nước làm mát.','Tháp làm mát.','Bộ phận sinh hơi.'],a:0},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Cho phản ứng: α + ²⁷₁₃Al → ³⁰₁₅P + X. Hạt X là',o:['proton.','neutron.','electron.','positron.'],a:1},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Năng lượng liên kết của hạt nhân Đơtêri ²₁H với m_D=2,0136 amu; m_p=1,00727 amu, m_n=1,00866 amu; 1 amu=931,5 MeV/c² là',o:['2,39 MeV','2,17 MeV','8,17 MeV','2,38 MeV'],a:1},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Hạt nhân ¹⁰₅B có m = 10,0113 amu, m_p = 1,00727 amu, m_n = 1,00866 amu, 1 amu = 931,5 MeV/c². Năng lượng liên kết riêng là',o:['6,4962 MeV/nucleon','64,367 MeV/nucleon','0,6437 MeV/nucleon','6,4367 eV/nucleon'],a:0},
{c:'HN',s:'Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết',q:'Năng lượng nghỉ của hạt nhân ¹²₆C (12 amu, 1 amu = 931,5 MeV/c² = 1,66055.10⁻²⁷ kg) là',o:['1,12.10⁴ eV','1,12.10¹⁰ MeV','1,79.10⁻⁹ J','6,79.10⁻⁹ J'],a:2},

// Chủ đề 3: Phóng xạ
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Hiện tượng phóng xạ là gì?',o:['Có thể được kiểm soát bằng điện trường hoặc từ trường.','Là hiện tượng một hạt nhân không bền vững tự phát biến đổi thành hạt nhân khác đồng thời phát ra tia phóng xạ.','Một hạt nhân biến đổi khi hấp thụ neutron.','Hạt nhân phát tia phóng xạ khi bị bắn phá bởi hạt có động năng lớn.'],a:1},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Biểu thức nào sau đây đúng về số hạt nhân còn lại của chất phóng xạ?',o:['N = N₀e^(λt)','N = N₀·2^(t/T)','N = N₀·e^(-λt)','N = N₀·2^(-t)'],a:2},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Phát biểu nào KHÔNG đúng về ảnh hưởng tia phóng xạ và nguyên tắc an toàn?',o:['Nếu thâm nhập vào cơ thể, chất phóng xạ α gây nguy hại nhiều hơn chất phóng xạ γ.','Khi phát hiện ô nhiễm phóng xạ, cần thông báo ngay với người phụ trách.','Các tia phóng xạ có thể gây tác động mạnh tới tế bào.','Bộ Y tế khuyến cáo người làm việc với nguồn phóng xạ nên khám sức khỏe 2 năm một lần.'],a:3},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Để đặc trưng cho tính phóng xạ mạnh hay yếu của một lượng chất phóng xạ, người ta dùng đại lượng nào?',o:['Độ phóng xạ.','Mật độ phóng xạ.','Cường độ phóng xạ.','Hằng độ phóng xạ.'],a:0},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Chu kì bán rã của 1 chất phóng xạ là thời gian để:',o:['Các hạt nhân phân rã hết','Số hạt nhân giảm xuống còn một nửa','Hiện tượng phóng xạ lặp lại như cũ','Độ phóng xạ tăng lên 2 lần'],a:1},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Ký hiệu quốc tế cho khu vực có phóng xạ là',o:['Biểu tượng hình tam giác màu vàng, bên trong có tia sét.','Biểu tượng hình tròn màu xanh, bên trong có hình đầu lâu.','Biểu tượng hình tam giác màu vàng, bên trong có hình quạt với 3 cánh đen.','Biểu tượng hình vuông màu đỏ, bên trong có dấu chấm than (!).'],a:2},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Vật liệu nào sau đây hiệu quả nhất để che chắn phóng xạ γ?',o:['Giấy.','Chì.','Nhôm.','Gỗ.'],a:1},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Phân rã phóng xạ có tính chất gì?',o:['Nguy hiểm và ngẫu nhiên.','Ngẫu nhiên và mạnh mẽ.','Tự phát và có lựa chọn.','Tự phát và ngẫu nhiên.'],a:3},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Những biện pháp nào cần thực hiện để đảm bảo an toàn phóng xạ?\n1. Đảm bảo thời gian phơi nhiễm thích hợp.\n2. Giữ khoảng cách thích hợp đến nguồn phóng xạ.\n3. Sử dụng thuốc tân dược thích hợp.\n4. Sử dụng lớp bảo vệ thích hợp.',o:['1, 2, 3.','2, 3, 4.','1, 2, 4.','1, 3, 4.'],a:2},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Trong phóng xạ β⁻, hạt nhân ᴬzX biến đổi thành hạt nhân ᴬzX thì',o:['Z mới = Z+1; A không đổi','Z mới = Z-1; A không đổi','Z mới = Z+1; A giảm 1','Z mới = Z-1; A tăng 1'],a:0},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Khi nói về tia α, phát biểu nào là SAI?',o:['Tia α phóng ra từ hạt nhân với tốc độ bằng 2000 m/s.','Khi đi qua điện trường giữa hai bản tụ điện, tia α bị lệch về phía bản âm.','Khi đi trong không khí, tia α làm ion hóa không khí và mất dần năng lượng.','Tia α là dòng các hạt nhân heli (⁴₂He).'],a:0},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Chu kì bán rã của Rn là T = 3,8 ngày. Hằng số phóng xạ của Rn là',o:['5,0669.10⁻⁵ s⁻¹','2,112.10⁻⁵ s⁻¹','2,112.10⁻⁶ s⁻¹','5,0669.10⁻⁸ s⁻¹'],a:2},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Chất phóng xạ có T = 8 ngày. Ban đầu 1,00g, sau 1 ngày đêm còn lại bao nhiêu?',o:['0,92g','0,87g','0,78g','0,69g'],a:0},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Chất phóng xạ Po, T = 138 ngày, ban đầu 100g. Sau bao lâu lượng Po chỉ còn 1g?',o:['916,85 ngày','834,45 ngày','653,28 ngày','548,69 ngày'],a:0},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Một đồng vị phóng xạ có chu kì bán rã T. Cứ sau bao lâu thì số hạt nhân bị phân rã bằng ba lần số hạt nhân còn lại?',o:['0,5T','3T','2T','T'],a:2},
{c:'HN',s:'Chủ đề 3: Phóng xạ',q:'Po phân rã α thành Pb. T_Po = 138 ngày. Tại t₁: N_Po/N_Pb = 1/3. Tại t₂ = t₁ + 276 ngày, tỉ số N_Po/N_Pb bằng',o:['1/15','2/15','1/25','2/25'],a:0},
];

// TF questions – {c, q, stmts:[{t, a:bool}]}
const TF = [
// Chương 3 TF
{c:'TT',q:'Khi cho dòng điện chạy qua hai tấm kim loại mỏng, nhẹ (dòng điện qua hai tấm ngược chiều)',stmts:[
  {t:'a. Hai tấm kim loại đẩy nhau.',a:true},
  {t:'b. Lực tương tác giữa hai tấm kim loại là lực tương tác từ.',a:true},
  {t:'c. Dù có dòng điện hay không thì hai tấm kim loại vẫn tương tác lực lên nhau.',a:false},
  {t:'d. Lực từ cân bằng với trọng lượng của tấm kim loại.',a:false},
]},
{c:'TT',q:'Khung dây ABCD: AB=10cm, BC=20cm, I=4A trong từ trường đều có đường sức song song với mặt phẳng khung, B=0,04T.',stmts:[
  {t:'a. Lực từ tác dụng lên các cạnh AB và CD bằng không.',a:true},
  {t:'b. Lực tác dụng lên BC hướng ra ngoài, lực lên AD hướng vào trong, độ lớn F = 3,2.10⁻³ N.',a:true},
  {t:'c. Lực từ tác dụng lên BC và AD có điểm đặt tại B và D.',a:false},
  {t:'d. Lực từ của AD và BC tạo thành cặp ngẫu lực làm khung quay đến vị trí vuông góc với đường sức từ.',a:true},
]},
{c:'TT',q:'Khi đưa khung dây ABCD ra xa dòng điện thẳng I.',stmts:[
  {t:'a. Từ thông qua khung dây tăng lên.',a:false},
  {t:'b. Cảm ứng từ B do dòng điện I gây ra ở khung ABCD có chiều từ trong ra ngoài.',a:false},
  {t:'c. Từ trường cảm ứng Bc của khung dây cùng chiều với từ trường B.',a:true},
  {t:'d. Chiều dòng điện cảm ứng trong khung ABCD có chiều A→B→C→D→A.',a:true},
]},
{c:'TT',q:'Vòng dây tròn S=100cm², B=0,6T hướng từ ngoài vào trong. B tăng đến 1,4T trong 0,25s.',stmts:[
  {t:'a. Dòng điện cảm ứng có chiều theo chiều kim đồng hồ.',a:true},
  {t:'b. Tốc độ biến thiên của từ trường là 2,4 T/s.',a:false},
  {t:'c. Độ biến thiên của từ thông là 0,008 Wb.',a:true},
  {t:'d. Độ lớn suất điện động xuất hiện trong vòng dây là 3,2 V.',a:false},
]},
{c:'TT',q:'Từ thông qua vòng dây: Φ = (20/π)cos(100πt + π/4) mWb.',stmts:[
  {t:'a. Từ thông cực đại bằng Φ₀ = 20/π (Wb).',a:false},
  {t:'b. Pha ban đầu của từ thông là π/4.',a:true},
  {t:'c. Suất điện động cực đại bằng E₀ = 2000 V.',a:false},
  {t:'d. Biểu thức SĐĐ cảm ứng: e = 2sin(100πt + π/4) V.',a:true},
]},
{c:'TT',q:'u = 220√2·cos(100πt) V; i = 10cos(100πt + π/3) A.',stmts:[
  {t:'a. Biên độ dòng điện bằng 10 A.',a:true},
  {t:'b. Điện áp trễ pha hơn cường độ dòng điện một góc π/3 rad.',a:true},
  {t:'c. Điện áp hiệu dụng có giá trị là 220√2 V.',a:false},
  {t:'d. Khi điện áp = 220 V thì cường độ dòng điện đạt cực đại 10 A.',a:false},
]},

// Chương 4 TF
{c:'HN',q:'Chỉ ra phát biểu đúng/sai về hạt nhân nguyên tử.',stmts:[
  {t:'a. Hạt nhân nguyên tử trung hoà về điện.',a:false},
  {t:'b. Hạt nhân nguyên tử được tạo thành bởi các hạt nucleon.',a:true},
  {t:'c. Khi nguyên tử trung hoà về điện, tổng số electron và neutron bằng số khối A.',a:true},
  {t:'d. Nguyên tử trung hòa của đồng vị ⁹₄Be có 4 proton, 5 nucleon và 4 electron.',a:false},
]},
{c:'HN',q:'Hạt nhân ⁵⁶₂₆Fe. Chọn phát biểu đúng/sai.',stmts:[
  {t:'a. Hạt nhân nguyên tử X có 30 neutron.',a:true},
  {t:'b. Số proton và số neutron trong hạt nhân X bằng nhau.',a:false},
  {t:'c. Khối lượng của hạt nhân X xấp xỉ 56 amu.',a:true},
  {t:'d. Bán kính hạt nhân X xấp xỉ 3,55.10⁻¹⁵ m.',a:false},
]},
{c:'HN',q:'Khi nói về phản ứng phân hạch và phản ứng tổng hợp hạt nhân.',stmts:[
  {t:'a. Cả hai phản ứng đều tỏa năng lượng.',a:true},
  {t:'b. Cả hai phản ứng xảy ra đối với hạt nhân nặng.',a:false},
  {t:'c. Phản ứng tổng hợp hạt nhân có thể kiểm soát được.',a:false},
  {t:'d. Phản ứng phân hạch tự duy trì khi số neutron sinh ra ≥ 1.',a:true},
]},
{c:'HN',q:'Năng lượng liên kết của hạt nhân ²⁰₁₀Ne là W_lk = 160,647 MeV. Biết mp=1,0073u; mn=1,0087u; me=5,486.10⁻⁴u.',stmts:[
  {t:'a. Năng lượng liên kết riêng của ²⁰Ne là 8,032 MeV/nucleon.',a:false},
  {t:'b. Độ hụt khối của hạt nhân ²⁰Ne là Δm = 0,1724 amu.',a:true},
  {t:'c. Khối lượng của hạt nhân ²⁰Ne là 19,9822 amu.',a:false},
  {t:'d. Khối lượng của nguyên tử ²⁰Ne là 19,9930 amu.',a:true},
]},
{c:'HN',q:'Phản ứng: ²₁H + ²₁H → X + ¹₀n. Mỗi phản ứng tỏa ~4 MeV.',stmts:[
  {t:'a. Hạt X là hạt ⁴₂He.',a:false},
  {t:'b. Hạt nhân X có 2 proton và 1 neutron.',a:true},
  {t:'c. Số hạt nhân helium từ phản ứng khi tổng hợp được 100g là 2,008.10²⁵.',a:false},
  {t:'d. Năng lượng tỏa ra khi tổng hợp 100g helium xấp xỉ 8,03.10²⁶ MeV.',a:true},
]},
{c:'HN',q:'Chất phóng xạ ²¹⁰₈₄Po phóng tia α → X. T = 138 ngày.',stmts:[
  {t:'a. Hạt nhân X là hạt nhân Bismuth.',a:false},
  {t:'b. Ban đầu 10g Po, sau 276 ngày còn lại 2,5g.',a:true},
  {t:'c. Ban đầu 5g Po. Độ phóng xạ là 9,23.10¹⁴ Bq.',a:false},
  {t:'d. Ban đầu 0,168g Po. Khối lượng hạt X (Pb) tạo thành sau 414 ngày là 0,1442g.',a:true},
]},
{c:'HN',q:'Khi nói về lò phản ứng hạt nhân.',stmts:[
  {t:'a. Nhà máy điện hạt nhân không phát thải khí gây hiệu ứng nhà kính như CO₂.',a:true},
  {t:'b. Nhà máy điện hạt nhân có thể hoạt động liên tục nhiều năm mà không cần bảo trì.',a:false},
  {t:'c. Việc xử lý chất thải hạt nhân đòi hỏi công nghệ đơn giản và chi phí thấp.',a:false},
  {t:'d. Vật liệu chứa chất thải hạt nhân cần độ bền rất cao để bảo quản trong thời gian dài.',a:true},
]},
];

// SA questions – {c, q, a}
const SA = [
// Chương 3 SA
{c:'TT',q:'Trong các hình vẽ về đường cảm ứng từ của ống dây có dòng điện (H1, H2, H3), có bao nhiêu hình biểu diễn SAI hướng?',a:'1 hình (H3 biểu diễn sai)'},
{c:'TT',q:'Đoạn dây dẫn dài 10cm hợp với đường sức từ góc 60°. I = 1,2A, lực từ F = 5mN. Tính độ lớn cảm ứng từ B (đơn vị T, làm tròn 2 chữ số thập phân)?',a:'B ≈ 0,05 T'},
{c:'TT',q:'Đoạn dây dẫn I = 5,5A vuông góc với cảm ứng từ B = 25mT. Lực từ F = 55mN. Tìm chiều dài đoạn dây (đơn vị m)?',a:'l = 0,4 m'},
{c:'TT',q:'Khung dây S = 100cm², N = 500 vòng. Từ thông cực đại qua khung là 10⁻² Wb. Cảm ứng từ B bằng bao nhiêu Tesla?',a:'B = 0,2 T'},
{c:'TT',q:'Từ thông qua khung dây theo đồ thị: từ t=0 đến t=0,2s, Φ giảm đều từ 0,6 Wb về 0. Suất điện động cảm ứng trong khoảng 0 đến 0,2s là bao nhiêu Vôn?',a:'e = 3 V'},
{c:'TT',q:'Khung dây quay đều, suất điện động e = E₀cos(ωt + π/2). Tại t=0, vectơ pháp tuyến hợp với vectơ cảm ứng từ một góc bằng bao nhiêu độ?',a:'180°'},
{c:'TT',q:'Truyền công suất P = 200 kW, điện áp nguồn U = 5000 V, điện trở đường dây R = 20 Ω. Độ giảm thế trên đường dây là bao nhiêu Vôn?',a:'800 V'},
{c:'TT',q:'Sóng điện từ, bước sóng 1500m, c = 3.10⁸ m/s. Tần số f bằng bao nhiêu MHz?',a:'0,2 MHz'},

// Chương 4 SA
{c:'HN',q:'Hạt nhân ²⁸₁₄Si có điện tích bằng x.10⁻¹⁸ C. Biết e = 1,6.10⁻¹⁹ C. Giá trị x bằng bao nhiêu? (1 chữ số thập phân)',a:'x = 4,5'},
{c:'HN',q:'Thể tích hạt nhân ²⁷₁₃Al gấp bao nhiêu lần thể tích hạt nhân ⁸₄Be? (Công thức: R = R₀A^(1/3))',a:'8,75 lần'},
{c:'HN',q:'Hạt nhân ¹⁸₉F có m = 16,9947 amu. mp = 1,0073 amu, mn = 1,0087 amu. Độ hụt khối của ¹⁸F bằng bao nhiêu amu? (2 chữ số thập phân)',a:'Δm ≈ 0,14 amu'},
{c:'HN',q:'Hạt nhân ¹⁰₅B có m = 10,0135 amu, mn = 1,0087 amu, mp = 1,0073 amu, 1 amu = 931 MeV/c². Năng lượng liên kết riêng bằng bao nhiêu MeV/nucleon? (1 chữ số thập phân)',a:'≈ 6,3 MeV/nucleon'},
{c:'HN',q:'²³⁵₉₂U phân hạch tỏa 200 MeV/hạt. Nₐ = 6,02.10²³, 1eV = 1,6.10⁻¹⁹ J, M = 235 g/mol. Năng lượng tỏa khi 2g U phân hạch hết là a.10¹⁰ J. Giá trị a? (1 chữ số thập phân)',a:'a = 16,4'},
{c:'HN',q:'Phản ứng hạt nhân: tổng khối trước = 37,9638 amu, tổng khối sau = 37,9656 amu. 1 amu = 931,5 MeV/c². Phản ứng này thu bao nhiêu MeV? (2 chữ số thập phân)',a:'1,68 MeV'},
{c:'HN',q:'Ban đầu 12,0g cobalt ⁶⁰₂₇Co (phóng xạ β⁻), T = 5,27 năm. Độ phóng xạ ban đầu là x.10¹⁴ Bq. Giá trị x?',a:'x = 5,02'},
{c:'HN',q:'Chất phóng xạ, T. Sau t = 3T, tỉ số số hạt nhân bị phân rã/số hạt nhân còn lại bằng bao nhiêu?',a:'7'},
{c:'HN',q:'Nhà máy điện hạt nhân P = 182.10⁷ W, hiệu suất 30%, mỗi hạt ²³⁵U tỏa 200 MeV. Trong 365 ngày, năng lượng phân hạch cần là x.10¹⁷ J. Giá trị x? (3 chữ số có nghĩa)',a:'x = 1,91'},
{c:'HN',q:'Nguồn chiếu xạ ⁶⁰Co, T = 5,3 năm. Từ tháng 1/2022 đến tháng 6/2024, số chu kì bán rã đã qua là bao nhiêu? (2 chữ số có nghĩa)',a:'0,46'},
];
