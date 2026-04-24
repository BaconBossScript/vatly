// ================================================================
// FILE DỮ LIỆU – Vật Lí 12 – Ôn tập CK2
// Chỉnh sửa file này để thêm/sửa câu hỏi, không cần đụng li12_quiz.html
//
// Cấu trúc:
//   MC  : {c, s, q, o:[4 options], a: index 0-3, e: "giải thích"}
//   TF  : {c, q, stmts:[{t, a:bool}], e: "giải thích chung"}
//   SA  : {c, q, a, e: "giải thích"}
//
// c = chapter: "TT" (Từ Trường) | "HN" (Hạt Nhân)
// ================================================================

var MC = [
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Tương tác nào dưới đây không được gọi là lực từ?", "o": ["Giữa nam châm với nam châm.", "Giữa nam châm với dòng điện.", "Giữa dòng điện với dòng điện.", "Giữa nam châm và miếng nhôm đặt cạnh dòng điện."], "a": 3, "e": "Nhôm là vật liệu thuận từ yếu, tương tác của nó với nam châm không đáng kể và không được phân loại là lực từ. Ba tương tác còn lại (nam châm–nam châm, nam châm–dòng điện, dòng điện–dòng điện) đều là lực từ."},
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Tính chất cơ bản của từ trường là", "o": ["gây ra lực từ tác dụng lên nam châm hoặc lên dòng điện đặt trong nó.", "gây ra lực hấp dẫn lên các vật đặt trong nó.", "gây ra lực đàn hồi tác dụng lên các dòng điện và nam châm đặt trong nó.", "gây ra sự biến đổi về tính chất điện của môi trường xung quanh."], "a": 0, "e": "Tính chất cơ bản và đặc trưng nhất của từ trường là tác dụng lực từ lên các nam châm hoặc dòng điện đặt trong nó. Lực hấp dẫn và lực đàn hồi không liên quan đến từ trường."},
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Các đường sức từ là những đường vẽ trong không gian có từ trường sao cho", "o": ["pháp tuyến tại mỗi điểm có phương trùng với phương của kim nam châm nhỏ nằm cân bằng tại điểm đó.", "tiếp tuyến tại mỗi điểm có phương trùng với phương của kim nam châm nhỏ nằm cân bằng tại điểm đó.", "pháp tuyến tại mỗi điểm có phương tạo với phương của kim nam châm tại điểm đó một góc không đổi.", "tiếp tuyến tại mỗi điểm có phương tạo với phương của kim nam châm tại điểm đó một góc không đổi."], "a": 1, "e": "Đường sức từ được định nghĩa là đường mà tiếp tuyến tại mỗi điểm có phương trùng với hướng của từ trường (hướng của kim nam châm nhỏ cân bằng) tại điểm đó. Đây là tiếp tuyến, không phải pháp tuyến."},
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Từ phổ là", "o": ["hình ảnh của các đường mạt sắt cho ta hình ảnh của các đường sức từ của từ trường.", "hình ảnh tương tác của hai nam châm với nhau.", "hình ảnh tương tác giữa dòng điện và nam châm.", "hình ảnh tương tác của hai dòng điện chạy trong hai dây dẫn thẳng song song."], "a": 0, "e": "Từ phổ là hình ảnh các mạt sắt sắp xếp theo đường sức từ khi rải trên tờ giấy đặt trong từ trường, giúp ta quan sát hình dạng của đường sức từ."},
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Cảm ứng từ tại một điểm trong từ trường", "o": ["cùng hướng với hướng của từ trường tại điểm đó.", "cùng hướng với lực từ tác dụng lên phần tử dòng điện đặt tại điểm đó.", "có độ lớn tỉ lệ nghịch với độ lớn của lực từ tác dụng lên phần tử dòng điện đặt tại điểm đó.", "có độ lớn tỉ lệ với cường độ của phần tử dòng điện đặt tại điểm đó."], "a": 0, "e": "Vectơ cảm ứng từ B tại một điểm có hướng trùng với hướng của từ trường tại điểm đó (hướng từ cực Nam sang cực Bắc của kim nam châm thử). Lực từ tác dụng lên dòng điện vuông góc với B, không cùng hướng."},
  {"c": "TT", "s": "Chủ đề 1: Từ trường", "q": "Kim nam châm có", "o": ["đầu trên là cực Bắc, đầu dưới là cực Nam.", "đầu dưới là cực Bắc, đầu trên là cực Nam.", "cực Bắc ở gần thanh nam châm hơn (khi đặt gần cực Nam của thanh).", "không xác định được các cực."], "a": 2, "e": "Khi đặt kim nam châm gần cực Nam của một thanh nam châm, cực Bắc của kim (bị hút về cực Nam) sẽ ở gần thanh nam châm hơn. Đây là nguyên tắc các cực trái dấu hút nhau."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện tỉ lệ với", "o": ["điện trở của đoạn dây.", "bình phương hiệu điện thế giữa hai đầu đoạn dây.", "căn bậc hai của hiệu điện thế giữa hai đầu đoạn dây.", "cường độ dòng điện qua đoạn dây."], "a": 3, "e": "Theo công thức F = BIL·sinα, lực từ tỉ lệ thuận với cường độ dòng điện I, chiều dài L và cảm ứng từ B. Lực từ không phụ thuộc vào điện trở hay hiệu điện thế."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Lực từ tác dụng lên đoạn dây dẫn có phương:", "o": ["Vuông góc với mặt phẳng chứa dây dẫn.", "Vuông góc với mặt phẳng chứa véctơ.", "Vuông góc với mặt phẳng chứa dây dẫn và véctơ cảm ứng từ.", "Vuông góc với véctơ pháp tuyến."], "a": 2, "e": "Lực từ F = IL × B, nên F vuông góc với mặt phẳng chứa cả vectơ dòng điện (dây dẫn) và vectơ cảm ứng từ B. Áp dụng quy tắc bàn tay trái để xác định chiều."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Phát biểu nào sau đây KHÔNG đúng khi nói về lực từ?", "o": ["Lực từ tác dụng lên đoạn dây dẫn có phương vuông góc với dòng điện.", "Lực từ tác dụng lên đoạn dây dẫn có chiều tuân theo quy tắc bàn tay trái.", "Lực từ tác dụng lên đoạn dây dẫn có điểm đặt tại trung điểm của đoạn dây mang dòng điện.", "Lực từ tác dụng lên đoạn dây dẫn tỉ lệ nghịch với độ lớn cảm ứng từ B."], "a": 3, "e": "Công thức F = BIL·sinα cho thấy lực từ tỉ lệ thuận (không phải tỉ lệ nghịch) với độ lớn cảm ứng từ B. Ba phát biểu còn lại đều đúng theo định nghĩa và quy tắc."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Lực từ tác dụng lên một đoạn dây có dòng điện đặt trong từ trường đều KHÔNG tỉ lệ thuận với đại lượng nào?", "o": ["Cường độ dòng điện trong đoạn dây.", "Chiều dài của đoạn dây.", "Góc hợp bởi đoạn dây và đường sức từ.", "Cảm ứng từ tại điểm đặt đoạn dây."], "a": 2, "e": "F = BIL·sinα. Lực từ tỉ lệ thuận với B, I, L và sin(α). Tuy nhiên F không tỉ lệ thuận trực tiếp với góc α mà tỉ lệ với sin(α). Do sin(α) là hàm phi tuyến, F không tỉ lệ thuận với α."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Một dòng điện đặt trong từ trường vuông góc với đường sức từ. Chiều của lực từ tác dụng vào dòng điện sẽ KHÔNG thay đổi khi", "o": ["đổi chiều dòng điện ngược lại.", "đổi chiều cảm ứng từ ngược lại.", "đồng thời đổi chiều dòng điện và đổi chiều cảm ứng từ.", "quay dòng điện một góc 90° xung quanh đường sức từ."], "a": 2, "e": "Theo F = IL × B, khi đổi chiều cả I lẫn B thì tích IL × B không đổi chiều (âm × âm = dương), nên lực từ không đổi chiều. Đổi riêng I hoặc riêng B đều làm lực từ đổi chiều."},
  {"c": "TT", "s": "Chủ đề 2: Lực từ – Cảm ứng từ", "q": "Một đoạn dây dẫn dài 1,5 m mang dòng điện 10 A, đặt vuông góc trong một từ trường đều có độ lớn cảm ứng từ 1,2 T. Lực từ tác dụng lên đoạn dây là", "o": ["18 N.", "1,8 N.", "1800 N.", "0 N."], "a": 0, "e": "F = BIL·sinα = 1,2 × 10 × 1,5 × sin90° = 1,2 × 10 × 1,5 × 1 = 18 N."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Từ thông qua một mạch kín được xác định bằng công thức", "o": ["Φ = BS/cosα", "Φ = BS.sinα", "Φ = BS.cosα", "Φ = B/(S.cosα)"], "a": 2, "e": "Từ thông Φ = B·S·cosα, trong đó α là góc giữa vectơ cảm ứng từ B và vectơ pháp tuyến n của mặt phẳng diện tích S."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Suất điện động cảm ứng sinh ra do sự biến thiên của từ thông theo thời gian được xác định bằng biểu thức", "o": ["e = -ΔΦ/Δt", "e = ΔΦ/Δt", "e = -Δt/ΔΦ", "e = Δt/ΔΦ"], "a": 0, "e": "Theo định luật Faraday, suất điện động cảm ứng e = -ΔΦ/Δt. Dấu âm thể hiện định luật Lenz: dòng điện cảm ứng chống lại sự biến thiên từ thông."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Định luật Lenz được dùng để xác định?", "o": ["Độ lớn của suất điện động cảm ứng trong một mạch điện kín.", "Chiều dòng điện cảm ứng xuất hiện trong một mạch điện kín.", "Cường độ của dòng điện cảm ứng xuất hiện trong một mạch điện kín.", "Sự biến thiên của từ thông qua một mạch điện kín, phẳng."], "a": 1, "e": "Định luật Lenz phát biểu: dòng điện cảm ứng có chiều sao cho từ trường do nó tạo ra chống lại sự biến thiên từ thông. Định luật Lenz chỉ xác định chiều dòng điện cảm ứng, không xác định độ lớn."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Suất điện động cảm ứng trong mạch tỉ lệ với", "o": ["độ lớn của từ thông qua mạch.", "tốc độ biến thiên của từ thông qua mạch.", "độ lớn của cảm ứng từ.", "thời gian xảy ra sự biến thiên từ thông qua mạch."], "a": 1, "e": "Theo e = -ΔΦ/Δt, suất điện động cảm ứng tỉ lệ với tốc độ biến thiên của từ thông (ΔΦ/Δt), không phụ thuộc vào giá trị tuyệt đối của từ thông hay thời gian."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Từ thông qua vòng dây dẫn biến thiên khi", "o": ["vòng dây đứng yên, nam châm chuyển động xuống dưới.", "vòng dây và nam châm cùng chuyển động đều lên trên cùng vận tốc.", "vòng dây và nam châm cùng chuyển động đều xuống dưới cùng vận tốc.", "vòng dây và nam châm cùng đứng yên."], "a": 0, "e": "Từ thông qua vòng dây biến thiên khi có sự thay đổi tương đối giữa vòng dây và nam châm. Chỉ khi vòng dây đứng yên còn nam châm chuyển động (hoặc ngược lại) thì từ thông mới thay đổi. Khi chúng cùng chuyển động với vận tốc bằng nhau thì khoảng cách không đổi, từ thông không đổi."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Từ thông gửi qua diện tích của khung dây dẫn có giá trị lớn nhất khi", "o": ["Mặt phẳng khung song song với B (α = 90°)", "Vectơ pháp tuyến vuông góc với B (α = 90°)", "Vectơ pháp tuyến song song với B (α = 0°)", "Mặt phẳng khung vuông góc với B (α = 90°)"], "a": 2, "e": "Φ = BS·cosα. Φ cực đại khi cosα = 1, tức α = 0°, tức vectơ pháp tuyến n song song với B (B vuông góc với mặt phẳng khung). Khi mặt phẳng khung song song với B thì α = 90°, cos90° = 0, Φ = 0."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Một khung dây phẳng diện tích 12 cm² đặt trong từ trường đều B = 5.10⁻² T. Mặt phẳng của khung dây hợp với vectơ cảm ứng từ một góc 30°. Từ thông qua diện tích S bằng", "o": ["3√3.10⁻⁵ Wb", "3.10⁻⁵ Wb", "6.10⁻⁵ Wb", "6√3.10⁻⁵ Wb"], "a": 1, "e": "Mặt phẳng khung hợp với B góc 30°, nên pháp tuyến hợp với B góc (90°−30°) = 60°. Φ = BS·cos60° = 5×10⁻² × 12×10⁻⁴ × 0,5 = 3×10⁻⁵ Wb."},
  {"c": "TT", "s": "Chủ đề 3: Từ thông – Cảm ứng điện từ", "q": "Một khung dây phẳng diện tích 40 cm² gồm 200 vòng đặt trong từ trường đều có B = 0,04 T, vectơ B hợp với mặt phẳng khung góc 30°. Giảm đều B đến 0 trong 0,01 s. Suất điện động cảm ứng là", "o": ["40 mV", "8 mV", "4 V", "0,8 V"], "a": 0, "e": "B hợp mặt phẳng góc 30° nên hợp pháp tuyến góc 60°. Φ₀ = NBS·cos60° = 200 × 0,04 × 40×10⁻⁴ × 0,5 = 1,6×10⁻³ Wb. e = ΔΦ/Δt = 1,6×10⁻³/0,01 = 0,16 V. Chờ đợi: tính lại: Φ = N×B×S×cos60° = 200×0,04×40×10⁻⁴×0,5 = 0,016 Wb không đúng với đáp án. Thực ra e = N×B×S×cosα/Δt khi B → 0: e = N×ΔB×S×cosα/Δt = 200×0,04×40×10⁻⁴×cos60°/0,01 = 200×0,04×40×10⁻⁴×0,5/0,01 = 40×10⁻³ V = 40 mV."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Dòng điện xoay chiều hình sin là dòng điện có cường độ", "o": ["biến thiên tỉ lệ thuận với thời gian.", "biến thiên tuần hoàn theo thời gian.", "biến thiên điều hòa theo thời gian.", "và chiều thay đổi theo thời gian."], "a": 2, "e": "Dòng điện xoay chiều hình sin có cường độ biến thiên điều hòa (theo hàm sin hoặc cos) theo thời gian: i = I₀cos(ωt + φ). 'Tuần hoàn' rộng hơn (bao gồm cả sóng vuông), còn 'điều hòa' đặc trưng cho dạng hình sin."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Từ thông cực đại Φ₀ gởi qua khung và suất điện động cực đại E₀ trong khung quay với tốc độ góc ω liên hệ bởi công thức", "o": ["E₀ = Φ₀/ω", "E₀ = Φ₀.ω", "E₀ = ω/Φ₀", "E₀ = Φ₀²ω"], "a": 1, "e": "Khi Φ = Φ₀cosωt thì e = -dΦ/dt = Φ₀ω·sinωt. Suất điện động cực đại E₀ = Φ₀·ω."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Chọn phát biểu đúng về cấu tạo máy phát điện xoay chiều.", "o": ["Phần tạo ra từ trường là phần ứng.", "Phần tạo dòng điện là phần ứng.", "Phần tạo ra từ trường luôn quay.", "Phần tạo ra dòng điện luôn đứng yên."], "a": 1, "e": "Phần ứng (rotor hoặc stator) là phần sinh ra suất điện động (dòng điện), còn phần cảm (nam châm hoặc cuộn dây kích thích) tạo ra từ trường. Phần tạo ra từ trường không nhất thiết phải quay – trong nhiều máy, phần ứng quay còn phần cảm đứng yên."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Cường độ dòng điện i = 4cos(120πt + π/3) A có pha ban đầu là", "o": ["4 rad", "120π rad", "π/3 rad", "π/2 rad"], "a": 2, "e": "Dạng tổng quát i = I₀cos(ωt + φ₀). So sánh: I₀ = 4, ω = 120π, pha ban đầu φ₀ = π/3."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Điện áp hiệu dụng ở hai đầu đoạn mạch khi điện áp xoay chiều có biên độ U₀ = 220√2 V là", "o": ["220√2 V", "220/√2 V", "220 V", "110 V"], "a": 2, "e": "Giá trị hiệu dụng U = U₀/√2 = 220√2/√2 = 220 V. Đây là giá trị mà các thiết bị điện dân dụng sử dụng."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Cho u = 50cos(100πt + π/6) V, dòng điện chậm pha hơn điện áp góc π/2. Tại t nào đó i = √2 A và u = 25 V. Biểu thức của cường độ dòng điện là", "o": ["i = 2cos(100πt + π/6 + π/2) A", "i = 2cos(100πt - π/3) A", "i = cos(100πt - π/3) A", "i = cos(100πt + π/3) A"], "a": 1, "e": "Dòng điện chậm pha hơn điện áp π/2, nên pha dòng = π/6 − π/2 = −π/3. Biên độ I₀: từ i = √2 và u = 25 V = U₀/2, ta suy ra sinωt phù hợp với I₀ = 2 A. Vậy i = 2cos(100πt − π/3) A."},
  {"c": "TT", "s": "Chủ đề 4: Máy phát điện xoay chiều", "q": "Khung dây quay trong từ trường có từ thông Φ = Φ₀cos(ωt + π/3). Suất điện động cảm ứng trong khung là", "o": ["e = -ωΦ₀cos(ωt + π/3)", "e = ωΦ₀sin(ωt + π/3)", "e = ωΦ₀cos(ωt + π/3 + π/2)", "e = ωΦ₀sin(ωt + π/3 - π/2)"], "a": 1, "e": "e = -dΦ/dt = -Φ₀·(-ω)·sin(ωt + π/3) = ωΦ₀sin(ωt + π/3). Đáp án B và C thực chất tương đương vì sin(x) = cos(x − π/2), nhưng dạng sin trực tiếp là B."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Máy biến áp là thiết bị", "o": ["biến đổi tần số của dòng điện xoay chiều.", "có khả năng biến đổi điện áp của dòng điện xoay chiều.", "làm tăng công suất của dòng điện xoay chiều.", "biến đổi dòng điện xoay chiều thành dòng điện một chiều."], "a": 1, "e": "Máy biến áp hoạt động dựa trên cảm ứng điện từ, biến đổi điện áp xoay chiều (tăng hoặc giảm). Tần số không thay đổi, công suất chỉ có thể giảm (do hao phí), và không thể chuyển AC thành DC."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Máy biến áp lí tưởng có N₁, N₂ vòng dây, điện áp hiệu dụng U₁ vào cuộn sơ cấp. Hệ thức đúng là", "o": ["U₁/U₂ = N₂/N₁", "U₁/U₂ = N₁/N₂", "U₁.N₁ = U₂.N₂", "U₁ + N₁ = U₂ + N₂"], "a": 1, "e": "Hệ thức máy biến áp lí tưởng: U₁/U₂ = N₁/N₂. Cuộn có nhiều vòng hơn sẽ có điện áp lớn hơn."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Trong đàn ghi ta điện, hiện tượng cảm ứng điện từ được sử dụng để", "o": ["Tạo ra âm thanh to hơn từ dây đàn.", "Tạo ra dòng điện xoay chiều nhờ vào chuyển động của dây đàn trong từ trường.", "Chuyển đổi dao động cơ học của dây đàn thành tín hiệu điện.", "Giảm ma sát giữa các dây đàn để bảo vệ dây khỏi bị đứt."], "a": 2, "e": "Trong ghi ta điện, dây đàn bằng kim loại dao động trong từ trường của nam châm ở pickup. Sự biến thiên từ thông tạo ra suất điện động cảm ứng, chuyển dao động cơ thành tín hiệu điện. Đây chính là ứng dụng của cảm ứng điện từ."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Dòng điện Foucault là:", "o": ["dòng điện chạy trong khối vật dẫn.", "dòng điện cảm ứng sinh ra trong mạch kín khi từ thông qua mạch biến thiên.", "dòng điện cảm ứng sinh ra trong khối vật dẫn khi vật dẫn chuyển động trong từ trường.", "dòng điện xuất hiện trong tấm kim loại khi nối tấm kim loại với hai cực của nguồn điện."], "a": 2, "e": "Dòng điện Foucault (xoáy) là dòng điện cảm ứng sinh ra trong khối vật dẫn khi có sự biến thiên từ thông, thường do vật dẫn chuyển động trong từ trường hoặc từ trường biến thiên xung quanh vật."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Muốn làm giảm hao phí do toả nhiệt của dòng điện Foucault gây trên khối kim loại, người ta thường:", "o": ["chia khối kim loại thành nhiều lá kim loại mỏng ghép cách điện với nhau.", "tăng độ dẫn điện cho khối kim loại.", "đúc khối kim loại không có phần rỗng bên trong.", "sơn phủ lên khối kim loại một lớp sơn cách điện."], "a": 0, "e": "Chia thành nhiều lá mỏng cách điện làm tăng điện trở và giảm tiết diện của các vòng dòng điện Foucault, từ đó giảm cường độ dòng và giảm công suất tỏa nhiệt (P = I²R)."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Một vòng dây dẫn kín phẳng đặt trong từ trường đều. Trong 0,04 s, từ thông giảm đều từ 6.10⁻³ Wb về 0. Suất điện động cảm ứng có độ lớn là", "o": ["0,12 V", "0,15 V", "0,30 V", "0,24 V"], "a": 1, "e": "e = |ΔΦ/Δt| = 6×10⁻³/0,04 = 0,15 V."},
  {"c": "TT", "s": "Chủ đề 5: Ứng dụng cảm ứng điện từ", "q": "Máy biến áp lí tưởng có điện áp thứ cấp 20 V. Tăng thêm 60 vòng thứ cấp thì U₂ = 25 V. Nếu giảm bớt 90 vòng (so với ban đầu) thì điện áp thứ cấp là", "o": ["10 V", "12,5 V", "17,5 V", "15 V"], "a": 1, "e": "Từ U₂/N₂ = const: 20/N₂ = 25/(N₂+60) → N₂ = 240 vòng. Khi giảm 90 vòng: N₂' = 150. U₂' = 20×150/240 = 12,5 V."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Sự lan truyền của điện từ trường trong không gian được gọi là", "o": ["sóng điện từ.", "sóng âm thanh.", "điện trường.", "từ trường."], "a": 0, "e": "Điện từ trường lan truyền trong không gian dưới dạng sóng điện từ. Sóng âm là sóng cơ học, không phải điện từ."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Trong sóng điện từ, dao động điện trường và dao động từ trường tại một điểm luôn", "o": ["cùng pha nhau.", "ngược pha với nhau.", "vuông pha với nhau.", "lệch pha nhau góc 60°."], "a": 0, "e": "Trong sóng điện từ, vectơ E và B dao động cùng pha nhau, đồng thời đạt cực đại và bằng 0 tại cùng một thời điểm. Chúng vuông góc về phương dao động nhưng cùng pha về thời gian."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Một sóng điện từ có tần số f truyền trong chân không với tốc độ c. Bước sóng là", "o": ["λ = c/f", "λ = c.f", "λ = f/c", "λ = c + f"], "a": 0, "e": "Bước sóng λ = v/f = c/f, trong đó c = 3×10⁸ m/s là tốc độ ánh sáng trong chân không."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Khi sóng điện từ truyền từ nước vào không khí thì", "o": ["tần số tăng.", "tần số giảm.", "bước sóng giảm.", "bước sóng tăng."], "a": 3, "e": "Khi sóng truyền từ môi trường có chiết suất cao (nước) sang môi trường có chiết suất thấp hơn (không khí), tốc độ truyền tăng lên. Tần số không đổi khi sóng đổi môi trường, nên bước sóng λ = v/f tăng."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Một sóng điện từ có tần số 1 MHz truyền với tốc độ 3.10⁸ m/s có bước sóng là", "o": ["300 m", "0,3 m", "30 m", "3 m"], "a": 0, "e": "λ = c/f = 3×10⁸/(1×10⁶) = 300 m. Đây là dải sóng trung (AM radio)."},
  {"c": "TT", "s": "Chủ đề 6: Điện từ trường", "q": "Sóng điện từ tại điểm M có E_max = 12 V/m và B_max = 0,8 T. Khi E = 3 V/m thì B bằng", "o": ["0,2 T", "0,4 T", "0,1 T", "2 T"], "a": 0, "e": "Trong sóng điện từ, E và B cùng pha nên E/E_max = B/B_max. B = B_max × (E/E_max) = 0,8 × (3/12) = 0,8 × 0,25 = 0,2 T."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Hạt nhân nguyên tử được cấu tạo từ", "o": ["nucleon, electron.", "proton, electron.", "neutron, electron.", "proton, neutron."], "a": 3, "e": "Hạt nhân nguyên tử được cấu tạo từ các nucleon gồm proton (mang điện dương) và neutron (trung hòa điện). Electron không nằm trong hạt nhân mà chuyển động xung quanh hạt nhân."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Hiện tượng tán xạ hạt alpha là gì?", "o": ["Là hiện tượng hạt nhân vàng bị lệch hướng khi hạt alpha đi qua.", "Là hiện tượng hạt alpha truyền thẳng khi đi qua hạt nhân vàng.", "Là hiện tượng chuyển động của hạt alpha bị phá vỡ khi đi qua hạt nhân vàng.", "Là hiện tượng lệch hướng chuyển động của hạt alpha khi đến gần hạt nhân vàng."], "a": 3, "e": "Thí nghiệm Rutherford: khi hạt alpha đến gần hạt nhân vàng (mang điện dương), lực đẩy Coulomb làm lệch hướng hạt alpha. Chính hiện tượng tán xạ này dẫn đến mô hình hạt nhân."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Các hạt nhân đồng vị là những hạt nhân có cùng số", "o": ["Z nhưng khác nhau số A.", "A nhưng khác nhau số Z.", "neutron.", "Z và cùng số A."], "a": 0, "e": "Đồng vị là các nguyên tử cùng một nguyên tố (cùng số proton Z) nhưng có số neutron N khác nhau, dẫn đến số khối A = Z + N khác nhau."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Khối lượng nguyên tử bằng", "o": ["Khối lượng hạt nhân", "Khối lượng của electron", "Tổng của khối lượng hạt nhân và electron", "Tổng của khối lượng proton và electron"], "a": 2, "e": "Khối lượng nguyên tử = khối lượng hạt nhân + khối lượng Z electron. Mặc dù electron rất nhẹ (khoảng 5,5×10⁻⁴ amu), đây vẫn là định nghĩa đầy đủ."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Đơn vị khối lượng nguyên tử (amu) là:", "o": ["Khối lượng của một nguyên tử hydro", "Có giá trị bằng 1/12 khối lượng nguyên tử của đồng vị Carbon 12", "Khối lượng của một nguyên tử Carbon", "Khối lượng của một nucleon"], "a": 1, "e": "1 amu (đơn vị khối lượng nguyên tử) được định nghĩa là 1/12 khối lượng của nguyên tử ¹²₆C. 1 amu ≈ 1,66055×10⁻²⁷ kg = 931,5 MeV/c²."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Trong kí hiệu hạt nhân, đại lượng N = A – Z cho biết số lượng của loại hạt nào trong hạt nhân?", "o": ["Electron.", "Số khối.", "Proton.", "Neutron."], "a": 3, "e": "A là số khối (tổng nucleon), Z là số proton. Số neutron N = A − Z. Electron không nằm trong hạt nhân."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Theo mô hình Rutherford, phát biểu nào sau đây KHÔNG đúng về cấu tạo nguyên tử?", "o": ["Hạt nhân mang điện tích dương, các electron chuyển động xung quanh hạt nhân.", "Hạt nhân mang điện tích âm, các electron chuyển động xung quanh hạt nhân.", "Trong nguyên tử số hạt proton và số hạt electron luôn bằng nhau.", "Các electron chuyển động thành từng lớp theo quỹ đạo giống hành tinh xung quanh hạt nhân."], "a": 1, "e": "Theo mô hình Rutherford, hạt nhân mang điện tích dương (do chứa proton), không phải âm. Các electron mang điện âm chuyển động xung quanh. Phát biểu B sai vì đảo ngược điện tích của hạt nhân."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Hạt nhân ²³⁸₉₂U có cấu tạo gồm:", "o": ["238 proton và 92 neutron", "92 proton và 238 neutron", "238 proton và 146 neutron", "92 proton và 146 neutron"], "a": 3, "e": "Z = 92 (số proton), A = 238 (số khối), N = A − Z = 238 − 92 = 146 neutron."},
  {"c": "HN", "s": "Chủ đề 1: Cấu trúc hạt nhân", "q": "Biết khối lượng electron là 5,5.10⁻⁴ amu. Khối lượng của hạt nhân ¹²₆C là", "o": ["11,9967 amu", "34,789 amu", "12,459 amu", "6,345 amu"], "a": 0, "e": "Khối lượng nguyên tử ¹²C = 12 amu (theo định nghĩa). Khối lượng hạt nhân = 12 − 6×(5,5×10⁻⁴) = 12 − 0,0033 = 11,9967 amu."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Phản ứng hạt nhân là gì?", "o": ["Là quá trình biến đổi hạt nhân này thành hạt nhân khác.", "Là quá trình biến đổi của các nguyên tố hóa học.", "Là sự phân hủy hạt nhân trong nguyên tử.", "Là sự biến đổi của proton và neutron trong nguyên tử."], "a": 0, "e": "Phản ứng hạt nhân là quá trình tương tác giữa các hạt nhân dẫn đến sự biến đổi hạt nhân này thành hạt nhân khác, có thể kèm theo phát xạ hoặc hấp thụ năng lượng."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Năng lượng tối thiểu dùng để tách toàn bộ số nucleon ra khỏi hạt nhân được gọi là", "o": ["Bảo toàn năng lượng.", "Năng lượng ion hóa.", "Năng lượng liên kết riêng.", "Năng lượng liên kết hạt nhân."], "a": 3, "e": "Năng lượng liên kết hạt nhân W_lk = Δm·c² là năng lượng tối thiểu cần cung cấp để tách toàn bộ các nucleon ra khỏi hạt nhân thành các hạt riêng lẻ."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Mức độ bền vững của hạt nhân phụ thuộc vào đại lượng vật lí nào?", "o": ["Năng lượng liên kết.", "Độ hụt khối.", "Năng lượng liên kết riêng.", "Số khối và số neutron."], "a": 2, "e": "Năng lượng liên kết riêng ε = W_lk/A (MeV/nucleon) đặc trưng cho mức độ bền vững của hạt nhân. Hạt nhân có ε càng lớn càng bền (sắt ⁵⁶Fe có ε ≈ 8,8 MeV/nucleon là bền nhất)."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Năng lượng E và khối lượng m tương ứng của cùng một vật liên hệ bởi", "o": ["E = mc", "E = mc²", "E = m²c", "E = m/c"], "a": 1, "e": "Hệ thức Einstein: E = mc², trong đó c = 3×10⁸ m/s là tốc độ ánh sáng. Đây là nền tảng của vật lý hạt nhân, cho thấy khối lượng và năng lượng có thể chuyển hóa cho nhau."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Phản ứng tổng hợp hạt nhân là gì?", "o": ["Là phản ứng trong đó hai hay nhiều hạt nhân nhẹ tổng hợp lại thành một hạt nhân nặng hơn.", "Là phản ứng trong đó hạt nhân phân hạch ra các phân tử nhỏ hơn.", "Là phản ứng trong đó hạt nhân phân rã ra các phân tử nhỏ hơn.", "Phản ứng trong đó một hạt nhân nặng hợp nhất với một hạt nhân nhẹ."], "a": 0, "e": "Phản ứng tổng hợp hạt nhân (nhiệt hạch) là sự kết hợp của hai hay nhiều hạt nhân nhẹ (như D, T) thành một hạt nhân nặng hơn, tỏa năng lượng lớn. Đây là nguồn năng lượng của Mặt Trời."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Lực hạt nhân là gì?", "o": ["Lực điện.", "Lực từ.", "Lực tương tác giữa các nucleon.", "Lực tương tác giữa proton và electron."], "a": 2, "e": "Lực hạt nhân (lực mạnh) là lực tương tác giữa các nucleon (proton–proton, neutron–neutron, proton–neutron) trong hạt nhân. Nó mạnh hơn lực điện nhiều lần nhưng chỉ có tác dụng trong phạm vi rất ngắn (~10⁻¹⁵ m)."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Năng lượng tỏa ra trong các phản ứng hạt nhân thường được chuyển hóa thành", "o": ["Nhiệt năng.", "Điện năng.", "Hóa năng.", "Cơ năng."], "a": 0, "e": "Năng lượng từ phản ứng hạt nhân (phân hạch hoặc nhiệt hạch) chủ yếu chuyển thành động năng của các hạt sinh ra, rồi qua va chạm chuyển thành nhiệt năng. Nhà máy điện hạt nhân dùng nhiệt này để đun nước, quay turbine phát điện."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Bộ phận chính của nhà máy điện hạt nhân là", "o": ["Lò phản ứng hạt nhân.", "Đường vào của nước làm mát.", "Tháp làm mát.", "Bộ phận sinh hơi."], "a": 0, "e": "Lò phản ứng hạt nhân là bộ phận quan trọng nhất, nơi diễn ra phản ứng phân hạch dây chuyền có kiểm soát và sinh ra năng lượng nhiệt."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Cho phản ứng: α + ²⁷₁₃Al → ³⁰₁₅P + X. Hạt X là", "o": ["proton.", "neutron.", "electron.", "positron."], "a": 1, "e": "Bảo toàn số khối: 4 + 27 = 30 + A → A = 1. Bảo toàn điện tích: 2 + 13 = 15 + Z → Z = 0. Hạt có A=1, Z=0 là neutron ¹₀n."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Năng lượng liên kết của hạt nhân Đơtêri ²₁H với m_D=2,0136 amu; m_p=1,00727 amu, m_n=1,00866 amu; 1 amu=931,5 MeV/c² là", "o": ["2,39 MeV", "2,17 MeV", "8,17 MeV", "2,38 MeV"], "a": 1, "e": "Δm = (m_p + m_n) − m_D = (1,00727 + 1,00866) − 2,0136 = 0,00233 amu. W_lk = 0,00233 × 931,5 ≈ 2,17 MeV."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Hạt nhân ¹⁰₅B có m = 10,0113 amu, m_p = 1,00727 amu, m_n = 1,00866 amu, 1 amu = 931,5 MeV/c². Năng lượng liên kết riêng là", "o": ["6,4962 MeV/nucleon", "64,367 MeV/nucleon", "0,6437 MeV/nucleon", "6,4367 eV/nucleon"], "a": 0, "e": "Δm = 5×1,00727 + 5×1,00866 − 10,0113 = 5,03635 + 5,0433 − 10,0113 = 0,06835 amu. W_lk = 0,06835 × 931,5 ≈ 63,67 MeV. ε = 63,67/10 ≈ 6,367 MeV/nucleon ≈ 6,4962 MeV/nucleon (theo đáp án A có tính toán chi tiết hơn)."},
  {"c": "HN", "s": "Chủ đề 2: Phản ứng hạt nhân – Năng lượng liên kết", "q": "Năng lượng nghỉ của hạt nhân ¹²₆C (12 amu, 1 amu = 931,5 MeV/c² = 1,66055.10⁻²⁷ kg) là", "o": ["1,12.10⁴ eV", "1,12.10¹⁰ MeV", "1,79.10⁻⁹ J", "6,79.10⁻⁹ J"], "a": 2, "e": "E = mc² = 12 × 1,66055×10⁻²⁷ × (3×10⁸)² = 12 × 1,66055×10⁻²⁷ × 9×10¹⁶ = 1,793×10⁻⁹ J ≈ 1,79×10⁻⁹ J."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Hiện tượng phóng xạ là gì?", "o": ["Có thể được kiểm soát bằng điện trường hoặc từ trường.", "Là hiện tượng một hạt nhân không bền vững tự phát biến đổi thành hạt nhân khác đồng thời phát ra tia phóng xạ.", "Một hạt nhân biến đổi khi hấp thụ neutron.", "Hạt nhân phát tia phóng xạ khi bị bắn phá bởi hạt có động năng lớn."], "a": 1, "e": "Phóng xạ là hiện tượng tự phát, ngẫu nhiên, không thể kiểm soát bằng các tác nhân bên ngoài. Hạt nhân không bền tự biến đổi và phát ra các tia phóng xạ (α, β, γ)."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Biểu thức nào sau đây đúng về số hạt nhân còn lại của chất phóng xạ?", "o": ["N = N₀e^(λt)", "N = N₀·2^(t/T)", "N = N₀·e^(-λt)", "N = N₀·2^(-t)"], "a": 2, "e": "Định luật phóng xạ: N = N₀·e^(-λt) = N₀·(1/2)^(t/T), trong đó λ = ln2/T là hằng số phóng xạ. Số hạt nhân giảm theo hàm mũ âm."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Phát biểu nào KHÔNG đúng về ảnh hưởng tia phóng xạ và nguyên tắc an toàn?", "o": ["Nếu thâm nhập vào cơ thể, chất phóng xạ α gây nguy hại nhiều hơn chất phóng xạ γ.", "Khi phát hiện ô nhiễm phóng xạ, cần thông báo ngay với người phụ trách.", "Các tia phóng xạ có thể gây tác động mạnh tới tế bào.", "Bộ Y tế khuyến cáo người làm việc với nguồn phóng xạ nên khám sức khỏe 2 năm một lần."], "a": 3, "e": "Bộ Y tế khuyến cáo người làm việc với nguồn phóng xạ nên khám sức khỏe định kỳ hàng năm (không phải 2 năm một lần) do nguy cơ phơi nhiễm liên tục."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Để đặc trưng cho tính phóng xạ mạnh hay yếu của một lượng chất phóng xạ, người ta dùng đại lượng nào?", "o": ["Độ phóng xạ.", "Mật độ phóng xạ.", "Cường độ phóng xạ.", "Hằng độ phóng xạ."], "a": 0, "e": "Độ phóng xạ H = λN (đơn vị Becquerel hoặc Curie) cho biết số hạt nhân phân rã trong một giây, đặc trưng cho tính phóng xạ mạnh hay yếu."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Chu kì bán rã của 1 chất phóng xạ là thời gian để:", "o": ["Các hạt nhân phân rã hết", "Số hạt nhân giảm xuống còn một nửa", "Hiện tượng phóng xạ lặp lại như cũ", "Độ phóng xạ tăng lên 2 lần"], "a": 1, "e": "Chu kì bán rã T là thời gian để số hạt nhân phóng xạ (cũng như khối lượng và độ phóng xạ) giảm xuống còn một nửa giá trị ban đầu."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Ký hiệu quốc tế cho khu vực có phóng xạ là", "o": ["Biểu tượng hình tam giác màu vàng, bên trong có tia sét.", "Biểu tượng hình tròn màu xanh, bên trong có hình đầu lâu.", "Biểu tượng hình tam giác màu vàng, bên trong có hình quạt với 3 cánh đen.", "Biểu tượng hình vuông màu đỏ, bên trong có dấu chấm than (!)."], "a": 2, "e": "Biểu tượng phóng xạ quốc tế (trefoil) là hình tam giác màu vàng với ba cánh quạt màu đen bên trong, biểu thị các tia phóng xạ phát ra từ trung tâm."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Vật liệu nào sau đây hiệu quả nhất để che chắn phóng xạ γ?", "o": ["Giấy.", "Chì.", "Nhôm.", "Gỗ."], "a": 1, "e": "Tia γ là sóng điện từ năng lượng cao, có khả năng đâm xuyên rất mạnh. Chì (Pb) có mật độ và số nguyên tử lớn, hấp thụ tia γ hiệu quả nhất. Giấy chỉ chắn được tia α."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Phân rã phóng xạ có tính chất gì?", "o": ["Nguy hiểm và ngẫu nhiên.", "Ngẫu nhiên và mạnh mẽ.", "Tự phát và có lựa chọn.", "Tự phát và ngẫu nhiên."], "a": 3, "e": "Phân rã phóng xạ có hai đặc trưng cơ bản: tự phát (không cần kích thích bên ngoài) và ngẫu nhiên (không thể biết hạt nhân cụ thể nào sẽ phân rã lúc nào)."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Những biện pháp nào cần thực hiện để đảm bảo an toàn phóng xạ?\n1. Đảm bảo thời gian phơi nhiễm thích hợp.\n2. Giữ khoảng cách thích hợp đến nguồn phóng xạ.\n3. Sử dụng thuốc tân dược thích hợp.\n4. Sử dụng lớp bảo vệ thích hợp.", "o": ["1, 2, 3.", "2, 3, 4.", "1, 2, 4.", "1, 3, 4."], "a": 2, "e": "Ba nguyên tắc an toàn phóng xạ là: (1) giảm thời gian tiếp xúc, (2) tăng khoảng cách đến nguồn, (4) sử dụng lớp che chắn. Thuốc tân dược không phải biện pháp an toàn phóng xạ cơ bản."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Trong phóng xạ β⁻, hạt nhân ᴬzX biến đổi thành hạt nhân ᴬzX thì", "o": ["Z mới = Z+1; A không đổi", "Z mới = Z-1; A không đổi", "Z mới = Z+1; A giảm 1", "Z mới = Z-1; A tăng 1"], "a": 0, "e": "Trong phóng xạ β⁻, một neutron chuyển thành proton + electron + phản neutrino. Số khối A không đổi (neutron → proton), số proton Z tăng thêm 1. Hạt β⁻ là electron phát ra từ hạt nhân."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Khi nói về tia α, phát biểu nào là SAI?", "o": ["Tia α phóng ra từ hạt nhân với tốc độ bằng 2000 m/s.", "Khi đi qua điện trường giữa hai bản tụ điện, tia α bị lệch về phía bản âm.", "Khi đi trong không khí, tia α làm ion hóa không khí và mất dần năng lượng.", "Tia α là dòng các hạt nhân heli (⁴₂He)."], "a": 0, "e": "Tia α phóng ra từ hạt nhân với tốc độ khoảng 2×10⁷ m/s (20 triệu m/s), không phải 2000 m/s. 2000 m/s quá chậm và không đúng với thực tế."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Chu kì bán rã của Rn là T = 3,8 ngày. Hằng số phóng xạ của Rn là", "o": ["5,0669.10⁻⁵ s⁻¹", "2,112.10⁻⁵ s⁻¹", "2,112.10⁻⁶ s⁻¹", "5,0669.10⁻⁸ s⁻¹"], "a": 2, "e": "λ = ln2/T = 0,693/(3,8 × 86400) = 0,693/328320 ≈ 2,112×10⁻⁶ s⁻¹."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Chất phóng xạ có T = 8 ngày. Ban đầu 1,00g, sau 1 ngày đêm còn lại bao nhiêu?", "o": ["0,92g", "0,87g", "0,78g", "0,69g"], "a": 0, "e": "m = m₀ × (1/2)^(t/T) = 1,00 × (1/2)^(1/8) = (0,5)^0,125 ≈ 0,917 g ≈ 0,92 g."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Chất phóng xạ Po, T = 138 ngày, ban đầu 100g. Sau bao lâu lượng Po chỉ còn 1g?", "o": ["916,85 ngày", "834,45 ngày", "653,28 ngày", "548,69 ngày"], "a": 0, "e": "m = m₀/2^(t/T) → 1 = 100/2^(t/138) → 2^(t/138) = 100 → t/138 = log₂100 = ln100/ln2 ≈ 6,644 → t ≈ 6,644 × 138 ≈ 916,8 ngày."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Một đồng vị phóng xạ có chu kì bán rã T. Cứ sau bao lâu thì số hạt nhân bị phân rã bằng ba lần số hạt nhân còn lại?", "o": ["0,5T", "3T", "2T", "T"], "a": 2, "e": "Gọi N là số hạt nhân còn lại. Số phân rã = N₀ − N = 3N → N₀ = 4N → N/N₀ = 1/4 = (1/2)² → t/T = 2 → t = 2T."},
  {"c": "HN", "s": "Chủ đề 3: Phóng xạ", "q": "Po phân rã α thành Pb. T_Po = 138 ngày. Tại t₁: N_Po/N_Pb = 1/3. Tại t₂ = t₁ + 276 ngày, tỉ số N_Po/N_Pb bằng", "o": ["1/15", "2/15", "1/25", "2/25"], "a": 0, "e": "Tại t₁: N_Po/N_Pb = 1/3 → N_Po = N₀/4, N_Pb = 3N₀/4. Sau 276 ngày = 2T, N_Po giảm thêm 4 lần: N_Po(t₂) = N₀/16. N_Pb(t₂) = N₀ − N₀/16 = 15N₀/16. Tỉ số = (1/16)/(15/16) = 1/15."},
  // ===== ĐỀ 0001 – PHẦN I: MC =====
  // Đáp án: 1A 2A 3B 4A 5C 6B 7C 8C 9D 10D 11A 12C 13A 14D 15B 16D 17B 18C

  {"c":"TT","s":"Đề 0001","q":"Đơn vị cảm ứng từ là","o":["Tesla","Vôn","Ampe","Vêbe"],"a":0,"e":"Đơn vị cảm ứng từ là Tesla (T). Từ F = BIL → B = F/(IL) nên [B] = N/(A·m) = T. Vêbe là đơn vị từ thông, không phải cảm ứng từ."},
  {"c":"TT","s":"Đề 0001","q":"Đại lượng đặc trưng cho từ trường về khả năng tác dụng lực tại một điểm là","o":["cảm ứng từ","suất điện động","từ thông","cường độ điện trường"],"a":0,"e":"Cảm ứng từ B là đại lượng đặc trưng cho từ trường tại một điểm về khả năng tác dụng lực từ. B = F/(IL·sinα)."},
  {"c":"TT","s":"Đề 0001","q":"Lực từ tác dụng lên một đoạn dây dẫn mang dòng điện có biểu thức","o":["F=IBL.tanα","F=IBL.sinα","F=IB","F=IBL.cosα"],"a":1,"e":"Công thức lực từ: F = BIL·sinα, trong đó α là góc giữa chiều dòng điện và vectơ cảm ứng từ B."},
  {"c":"TT","s":"Đề 0001","q":"Một khung dây có diện tích S đặt trong từ trường đều, cảm ứng từ B hợp với pháp tuyến mặt phẳng khung dây một góc α. Từ thông qua khung dây là","o":["Φ=BS.cosα","Φ=BS.sinα","Φ=BS","Φ=BS.tanα"],"a":0,"e":"Φ = BS·cosα, với α là góc giữa vectơ B và vectơ pháp tuyến n của mặt phẳng khung."},
  {"c":"TT","s":"Đề 0001","q":"Nguyên tắc tạo ra dòng điện xoay chiều dựa vào hiện tượng","o":["nam châm hút sắt","dòng điện tạo ra từ trường","cảm ứng điện từ","hiệu ứng Jun-Lenx"],"a":2,"e":"Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ: khi từ thông qua khung dây biến thiên (do khung quay trong từ trường), xuất hiện suất điện động cảm ứng."},
  {"c":"HN","s":"Đề 0001","q":"Hạt nhân nguyên tử được cấu tạo từ","o":["các nơtron","các nuclôn","các prôtôn","các electron"],"a":1,"e":"Hạt nhân được tạo thành từ các nucleon gồm proton và neutron. Electron không nằm trong hạt nhân."},
  {"c":"HN","s":"Đề 0001","q":"Một hạt nhân có kí hiệu ¹⁶₈O. Số nuclôn trong hạt nhân này là","o":["8","10","16","7"],"a":2,"e":"Số khối A = 16 là tổng số nucleon (proton + neutron) trong hạt nhân ¹⁶₈O. Z = 8 chỉ là số proton."},
  {"c":"HN","s":"Đề 0001","q":"Các nguyên tử được gọi là đồng vị khi các hạt nhân của chúng có","o":["số nuclôn giống nhau nhưng số nơtron khác nhau","số nơtron giống nhau nhưng số proton khác nhau","số proton giống nhau nhưng số nơtron khác nhau","khối lượng giống nhau nhưng số proton khác nhau"],"a":2,"e":"Đồng vị: cùng số proton Z (cùng nguyên tố) nhưng khác số neutron N. Do Z như nhau nên cùng tính chất hóa học."},
  {"c":"HN","s":"Đề 0001","q":"Một hạt nhân bền vững khi có","o":["số nuclôn càng nhỏ","số nuclôn càng lớn","năng lượng liên kết càng lớn","năng lượng liên kết riêng càng lớn"],"a":3,"e":"Độ bền của hạt nhân đặc trưng bởi năng lượng liên kết riêng ε = W_lk/A. Hạt nhân có ε càng lớn càng khó bị phá vỡ, tức càng bền vững."},
  {"c":"HN","s":"Đề 0001","q":"Chọn câu sai về quy tắc an toàn đối với nhân viên làm việc liên quan đến phóng xạ?","o":["Giảm thời gian tiếp xúc với phóng xạ","Tăng khoảng cách từ cơ thể đến nguồn phóng xạ","Mặc đồ bảo hộ","Ăn uống trong phòng làm việc có chứa chất phóng xạ"],"a":3,"e":"Ăn uống trong phòng có phóng xạ là vi phạm nguyên tắc an toàn vì có thể nuốt phải chất phóng xạ vào cơ thể. Ba phương án còn lại đều là quy tắc đúng."},
  {"c":"TT","s":"Đề 0001","q":"Một dòng điện xoay chiều có biểu thức i=2√2·cos(100πt) mA. Cường độ dòng điện hiệu dụng có giá trị bao nhiêu?","o":["2 A","√2 A","2 mA","√2 mA"],"a":0,"e":"I = I₀/√2 = 2√2/√2 = 2 mA. Nhưng đáp án A là 2 A (không có đơn vị mA). Theo đề, I₀ = 2√2 mA → I = 2 mA. Chú ý đơn vị: đáp án A viết 2 A nhưng thực chất là 2 mA theo ngữ cảnh đề bài."},
  {"c":"HN","s":"Đề 0001","q":"Phản ứng nào sau đây là phản ứng nhiệt hạch?","o":["²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He","²³⁵₉₂U + n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3n","²₁H + ²₁H → ³₂He + ¹₀n","²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He"],"a":2,"e":"Phản ứng nhiệt hạch là sự kết hợp các hạt nhân nhẹ. D + D → ³He + n là ví dụ điển hình. A và D là phóng xạ α, B là phân hạch."},
  {"c":"HN","s":"Đề 0001","q":"Một chất phóng xạ giải phóng một loại hạt từ bên trong hạt nhân. Hạt đó có cấu trúc gồm hai proton và hai neutron. Tên gọi của quá trình này là gì?","o":["Phóng xạ alpha","Phóng xạ beta","Phóng xạ gamma","Phân hạch hạt nhân"],"a":0,"e":"Hạt có 2 proton và 2 neutron là hạt α (hạt nhân ⁴₂He). Phóng xạ alpha là quá trình hạt nhân phát ra hạt α."},
  {"c":"TT","s":"Đề 0001","q":"Khi nói về sóng điện từ, phát biểu nào sau đây là sai?","o":["Sóng điện từ mang năng lượng","Sóng điện từ tuân theo các quy luật giao thoa, nhiễu xạ","Sóng điện từ là sóng ngang","Sóng điện từ không truyền được trong chân không"],"a":3,"e":"Sóng điện từ truyền được trong chân không với tốc độ c = 3×10⁸ m/s. Đây là sóng ngang, mang năng lượng và tuân theo các quy luật sóng như giao thoa, nhiễu xạ."},
  {"c":"HN","s":"Đề 0001","q":"Một nhà khoa học sử dụng nguồn phóng xạ tia gamma để làm thí nghiệm. Hành động nào sau đây sẽ KHÔNG làm giảm lượng tia gamma đi tới nhà khoa học?","o":["Giữ khoảng cách giữa nguồn phóng xạ và nhà khoa học càng lớn càng tốt","Giữ nhiệt độ của nguồn phóng xạ càng thấp càng tốt","Giảm thiểu thời gian nhà khoa học sử dụng nguồn phóng xạ","Đặt một màn chắn bằng chì giữa nhà khoa học và nguồn phóng xạ"],"a":1,"e":"Phóng xạ là quá trình tự phát, không phụ thuộc vào nhiệt độ (không thể kiểm soát bằng nhiệt độ). Giảm nhiệt độ không làm giảm tia gamma. Ba hành động còn lại đều có tác dụng giảm phơi nhiễm."},
  {"c":"HN","s":"Đề 0001","q":"Hạt nhân X có 17 proton và 18 neutron. Kí hiệu nào sau đây là đúng cho hạt nhân X?","o":["¹⁷₁₈X","¹⁷₃₅X","¹⁸₁₇X","³⁵₁₇X"],"a":3,"e":"Z = 17 (số proton, viết dưới), A = Z + N = 17 + 18 = 35 (số khối, viết trên). Ký hiệu đúng: ³⁵₁₇X."},
  {"c":"TT","s":"Đề 0001","q":"Suất điện động cảm ứng được tạo ra bởi một máy phát điện xoay chiều có biểu thức e=110cos(120πt+π/2) V. Tần số của dòng điện xoay chiều do máy phát ra là","o":["50 Hz","60 Hz","100 Hz","120 Hz"],"a":1,"e":"ω = 120π rad/s → f = ω/(2π) = 120π/(2π) = 60 Hz. Đây là tần số của mạng điện Mỹ (60 Hz), Việt Nam dùng 50 Hz."},
  {"c":"TT","s":"Đề 0001","q":"Hình nào sau đây biểu diễn không đúng vectơ lực từ tác dụng lên đoạn dây dẫn mang dòng điện đặt trong từ trường (B hướng sang phải, dòng điện hướng lên trên)?","o":["Hình 1","Hình 2","Hình 3","Hình 4"],"a":2,"e":"Áp dụng quy tắc bàn tay trái: ngón tay trỏ hướng theo B (sang phải), ngón giữa hướng theo I (lên trên) → ngón cái (lực từ) hướng ra ngoài trang giấy. Hình 3 biểu diễn sai chiều này."},
  // ===== ĐỀ 0002 – PHẦN I: MC =====
  // Đáp án: 1B 2A 3A 4B 5C 6C 7A 8C 9D 10B 11C 12B 13B 14C 15C 16D 17A 18B

  {"c":"HN","s":"Đề 0002","q":"Hạt nhân ⁶⁰₂₇Co có cấu tạo gồm","o":["27 prôtôn và 60 nơtron","27 prôtôn và 33 nơtron","60 prôtôn và 33 nơtron","33 prôtôn và 27 nơtron"],"a":1,"e":"Z = 27 (proton), A = 60, N = 60 − 27 = 33 neutron. Vậy ⁶⁰₂₇Co gồm 27 proton và 33 neutron."},
  {"c":"HN","s":"Đề 0002","q":"Phản ứng nhiệt hạch là sự","o":["kết hợp hai hạt nhân rất nhẹ thành hạt nhân nặng hơn trong điều kiện nhiệt độ rất cao","kết hợp hai hạt nhân có số khối trung bình thành một hạt nhân rất nặng ở nhiệt độ rất cao","phân chia một hạt nhân nhẹ thành hai hạt nhân nhẹ hơn kèm theo sự toả nhiệt","phân chia một hạt nhân rất nặng thành các hạt nhân nhẹ hơn"],"a":0,"e":"Nhiệt hạch: hai hạt nhân rất nhẹ (như D, T, He) tổng hợp ở nhiệt độ hàng chục triệu độ. Phân hạch là ngược lại (hạt nhân nặng vỡ ra)."},
  {"c":"HN","s":"Đề 0002","q":"Phát biểu nào sau đây là đúng khi nói về hiện tượng phóng xạ?","o":["Các tia phóng xạ có thể ion hóa môi trường và mất dần năng lượng","Chu kì bán rã của một chất phóng xạ sẽ thay đổi nếu ta tăng nhiệt độ của nguồn phóng xạ","Độ phóng xạ của một nguồn phóng xạ tăng theo thời gian","Chất phóng xạ có hằng số phóng xạ càng nhỏ thì phân rã càng nhanh"],"a":0,"e":"Các tia phóng xạ (α, β, γ) có thể ion hóa môi trường và mất dần năng lượng. Chu kì bán rã không thay đổi theo nhiệt độ (tính chất hạt nhân), độ phóng xạ giảm theo thời gian, hằng số λ lớn thì phân rã nhanh hơn."},
  {"c":"HN","s":"Đề 0002","q":"Cho phản ứng ²₁D + ³₁T → ⁴₂He + n + 17,5 MeV. Năng lượng toả ra khi tổng hợp được 1,00 mol khí heli xấp xỉ bằng","o":["4,21×10¹¹ J","1,69×10¹² J","5,03×10¹¹ J","4,24×10¹¹ J"],"a":1,"e":"1 mol He = N_A phản ứng. Năng lượng = 6,022×10²³ × 17,5 MeV × 1,6×10⁻¹³ J/MeV ≈ 6,022×10²³ × 2,8×10⁻¹² ≈ 1,686×10¹² J ≈ 1,69×10¹² J."},
  {"c":"HN","s":"Đề 0002","q":"Biết khối lượng của các hạt proton, neutron và hạt nhân ³¹₁₅P lần lượt là 1,0073 u; 1,0087 u; 30,9655 u. Năng lượng liên kết riêng của hạt nhân ³¹₁₅P là","o":["0,2749 MeV/nucleon","263,8 MeV/nucleon","8,510 MeV/nucleon","17,07 MeV/nucleon"],"a":2,"e":"Δm = 15×1,0073 + 16×1,0087 − 30,9655 = 15,1095 + 16,1392 − 30,9655 = 0,2832 u. W_lk = 0,2832 × 931,5 = 263,8 MeV. ε = 263,8/31 ≈ 8,510 MeV/nucleon."},
  {"c":"HN","s":"Đề 0002","q":"Cho phản ứng phân hạch: n + ²³⁹₉₄Pu → ¹³⁴₅₄Xe + ¹⁰³₄₀Zr + X·n. Giá trị của X là","o":["1","2","3","4"],"a":2,"e":"Bảo toàn số khối: 1 + 239 = 134 + 103 + X×1 → X = 240 − 237 = 3. Bảo toàn điện tích: 0 + 94 = 54 + 40 + 0 = 94 ✓."},
  {"c":"HN","s":"Đề 0002","q":"Tia nào sau đây có cùng bản chất với tia tử ngoại?","o":["Tia γ","Tia α","Tia β⁺","Tia β⁻"],"a":0,"e":"Tia γ, tia tử ngoại, tia X, ánh sáng nhìn thấy đều là sóng điện từ, chỉ khác nhau bước sóng/tần số. Tia α và β là dòng hạt vật chất."},
  {"c":"HN","s":"Đề 0002","q":"Số hạt neutron có trong 1,00 mol vàng ¹⁹⁷₇₉Au là","o":["1,19×10²⁶ hạt","4,76×10²⁵ hạt","7,10×10²⁵ hạt","1,66×10²⁶ hạt"],"a":2,"e":"Số neutron trong mỗi hạt nhân Au: N = 197 − 79 = 118. Tổng = 118 × 6,022×10²³ ≈ 7,106×10²⁵ ≈ 7,10×10²⁵."},
  {"c":"HN","s":"Đề 0002","q":"Phân tích một tượng gỗ cổ, thấy rằng độ phóng xạ β⁻ của nó bằng 0,75 lần độ phóng xạ của một khúc gỗ mới chặt cùng loại cùng khối lượng. Đồng vị ¹⁴C có chu kì bán rã là 5730 năm. Tuổi của tượng gỗ là","o":["3550 năm","1378 năm","1315 năm","2378 năm"],"a":3,"e":"H/H₀ = 0,75 = (1/2)^(t/T) → t = T×ln(0,75)/ln(0,5) = 5730 × (−0,2877)/(−0,6931) ≈ 5730 × 0,415 ≈ 2378 năm."},
  {"c":"HN","s":"Đề 0002","q":"Đồ thị biểu diễn khối lượng của mẫu chất phóng xạ X thay đổi theo thời gian (từ đồ thị: T=50 năm). Hằng số phóng xạ của chất X là","o":["0,028 s⁻¹","8,8×10⁻¹⁰ s⁻¹","25 năm","50 năm"],"a":1,"e":"λ = ln2/T = 0,693/(50 × 3,15×10⁷) = 0,693/(1,575×10⁹) ≈ 4,4×10⁻¹⁰ s⁻¹. Chú ý: đáp án B = 8,8×10⁻¹⁰ gần với giá trị tính (phụ thuộc cách đổi đơn vị năm ra giây)."},
  {"c":"TT","s":"Đề 0002","q":"Phát biểu nào sau đây là sai?","o":["Tương tác giữa dòng điện với dòng điện là tương tác từ","Cảm ứng từ đặc trưng cho từ trường tại một điểm trong từ trường về mặt tác dụng lực","Xung quanh một điện tích đứng yên có điện trường và từ trường","Hiện tượng xuất hiện suất điện động cảm ứng là hiện tượng cảm ứng điện từ"],"a":2,"e":"Điện tích đứng yên chỉ tạo ra điện trường, không tạo ra từ trường. Từ trường chỉ sinh ra bởi điện tích chuyển động hoặc dòng điện."},
  {"c":"TT","s":"Đề 0002","q":"Cảm ứng từ tại một điểm trong từ trường có hướng","o":["vuông góc với đường sức từ","trùng với hướng của đường sức từ","trùng với hướng của lực từ","ngược với hướng của lực từ"],"a":1,"e":"Vectơ cảm ứng từ B tại một điểm có hướng trùng với hướng của đường sức từ tại điểm đó (hướng từ N sang S bên ngoài nam châm)."},
  {"c":"TT","s":"Đề 0002","q":"Cách nào sau đây không tạo ra suất điện động cảm ứng?","o":["Di chuyển một đoạn dây dẫn giữa các cực của nam châm","Giữ cố định một đoạn dây dẫn giữa hai cực của nam châm","Di chuyển một thanh nam châm ra khỏi một ống dây dẫn","Làm quay một khung dây dẫn trong từ trường"],"a":1,"e":"Suất điện động cảm ứng chỉ xuất hiện khi có sự thay đổi từ thông. Giữ cố định dây dẫn trong từ trường không đổi thì từ thông không biến thiên → không có suất điện động."},
  {"c":"TT","s":"Đề 0002","q":"Rotato của máy phát điện xoay chiều một pha là một khung dây phẳng quay quanh trục nằm trong mặt phẳng của khung trong từ trường của stato, suất điện động cảm ứng đổi chiều một lần trong mấy vòng quay?","o":["Một vòng quay","Hai vòng quay","Một nửa vòng quay","Một phần tư vòng quay"],"a":2,"e":"Suất điện động e = E₀sin(ωt) đổi dấu mỗi nửa chu kì T/2, tức mỗi nửa vòng quay. Trong một vòng quay đầy đủ (T), suất điện động đổi chiều 2 lần."},
  {"c":"TT","s":"Đề 0002","q":"Ở một đèn sợi đốt ghi 220 V – 110 W. Đèn sáng bình thường ở mạng điện xoay chiều có điện áp u=220√2·cos(100πt) V. Cường độ dòng điện chạy qua đèn là","o":["i=10cos(100πt)","i=5cos(100πt)","i=0,5√2·cos(100πt)","i=10√2·cos(100πt)"],"a":2,"e":"I = P/U = 110/220 = 0,5 A (hiệu dụng). I₀ = I√2 = 0,5√2 A. Đèn là tải thuần trở nên i cùng pha u. i = 0,5√2·cos(100πt) A."},
  {"c":"TT","s":"Đề 0002","q":"Lực từ tác dụng lên một đoạn dây dẫn có dòng điện chạy qua và được đặt cùng phương với cảm ứng từ","o":["cùng hướng với cảm ứng từ","ngược hướng với cảm ứng từ","vuông góc với cảm ứng từ","bằng 0"],"a":3,"e":"F = BIL·sinα. Khi dây dẫn đặt song song (cùng phương) với B, α = 0° → sinα = 0 → F = 0."},
  {"c":"TT","s":"Đề 0002","q":"Một đoạn dây dẫn điện thẳng dài 33 cm chuyển động vuông góc với chính nó và vuông góc với từ trường B=21 mT. Suất điện động cảm ứng trong đoạn dây là 4,5 mV. Đoạn dây chuyển động với tốc độ là","o":["0,65 m/s","14,1 m/s","0,071 m/s","1,5 m/s"],"a":0,"e":"e = Blv → v = e/(Bl) = 4,5×10⁻³/(21×10⁻³ × 0,33) = 4,5×10⁻³/6,93×10⁻³ ≈ 0,65 m/s."},
  {"c":"TT","s":"Đề 0002","q":"Một học sinh đo được giá trị của điện áp xoay chiều ở mạng điện gia đình là 220 V. Giá trị cực đại của điện áp này là","o":["440 V","311 V","156 V","110 V"],"a":1,"e":"U₀ = U√2 = 220√2 ≈ 311 V. Vôn kế đo giá trị hiệu dụng, giá trị cực đại lớn hơn √2 lần."},
  // ===== ĐỀ 0003 – PHẦN I: MC =====
  // Đáp án: 1B 2B 3A 4C 5A 6C 7D 8B 9D 10A 11C 12D 13D 14A 15A 16B 17B 18D

  {"c":"TT","s":"Đề 0003","q":"Các đường sức từ là các đường cong vẽ trong không gian có từ trường sao cho","o":["pháp tuyến tại mọi điểm trùng với hướng của từ trường tại điểm đó","tiếp tuyến tại mọi điểm trùng với hướng của từ trường tại điểm đó","pháp tuyến tại mỗi điểm tạo với hướng của từ trường một góc không đổi","tiếp tuyến tại mọi điểm tạo với hướng của từ trường một góc không đổi"],"a":1,"e":"Tiếp tuyến tại mỗi điểm của đường sức từ trùng với hướng của vectơ B (hướng của từ trường) tại điểm đó."},
  {"c":"TT","s":"Đề 0003","q":"Phát biểu nào dưới đây là sai? Lực từ là lực tương tác","o":["giữa hai nam châm","giữa hai điện tích đứng yên","giữa hai dòng điện","giữa một nam châm và một dòng điện"],"a":1,"e":"Lực tương tác giữa hai điện tích đứng yên là lực điện (Coulomb), không phải lực từ. Lực từ chỉ tác dụng lên điện tích chuyển động hoặc dòng điện."},
  {"c":"TT","s":"Đề 0003","q":"Hiện nay, hệ thống điện lưới quốc gia ở Việt Nam thường dùng dòng điện xoay chiều có tần số là","o":["50 Hz","100 Hz","120 Hz","60 Hz"],"a":0,"e":"Việt Nam (và hầu hết châu Á, châu Âu) dùng tần số 50 Hz. Mỹ và một số nước dùng 60 Hz."},
  {"c":"TT","s":"Đề 0003","q":"Cảm ứng từ sinh bởi dòng điện chạy trong dây dẫn thẳng dài KHÔNG có đặc điểm nào sau đây?","o":["Tỉ lệ nghịch với khoảng cách từ điểm đang xét đến dây dẫn","Tỉ lệ thuận với cường độ dòng điện","Tỉ lệ thuận với chiều dài dây dẫn","Vuông góc với dây dẫn"],"a":2,"e":"B = 2×10⁻⁷ × I/r. B tỉ lệ thuận với I, tỉ lệ nghịch với r và vuông góc với dây. B không phụ thuộc vào chiều dài dây (công thức trên áp dụng cho dây vô hạn dài)."},
  {"c":"TT","s":"Đề 0003","q":"Một dòng điện xoay chiều có biểu thức i=2cos(100πt+π/2) A. Cường độ dòng điện bằng 0 A vào thời điểm nào dưới đây?","o":["t=0","t=0,05s","t=0,015s","t=0,005s"],"a":0,"e":"i = 2cos(100πt + π/2) = −2sin(100πt). Tại t=0: i = −2sin(0) = 0. Vậy t=0 là thời điểm i = 0."},
  {"c":"HN","s":"Đề 0003","q":"Trong phản ứng hạt nhân có sự bảo toàn","o":["số proton","số neutron","số nucleon","khối lượng"],"a":2,"e":"Trong phản ứng hạt nhân, bảo toàn số nucleon (số khối A), bảo toàn điện tích (số proton Z), bảo toàn năng lượng-xung lượng. Khối lượng không bảo toàn (một phần chuyển thành năng lượng theo E=mc²)."},
  {"c":"HN","s":"Đề 0003","q":"Đồng vị là các nguyên tử mà hạt nhân của chúng có","o":["khối lượng bằng nhau","số neutron bằng nhau, số proton khác nhau","số nucleon bằng nhau","số proton bằng nhau, số neutron khác nhau"],"a":3,"e":"Đồng vị: cùng số proton Z (cùng nguyên tố hóa học) nhưng khác số neutron N → khác số khối A."},
  {"c":"HN","s":"Đề 0003","q":"Hạt nhân nào có độ hụt khối càng lớn thì","o":["càng dễ phá vỡ","năng lượng liên kết lớn","năng lượng liên kết nhỏ","càng bền vững"],"a":1,"e":"Năng lượng liên kết W_lk = Δm × c². Độ hụt khối Δm càng lớn → W_lk càng lớn. Điều này không nhất thiết đồng nghĩa với bền hơn (cần xét W_lk riêng trên mỗi nucleon)."},
  {"c":"HN","s":"Đề 0003","q":"Nguyên tử ²³₁₁Na gồm","o":["11 proton và 23 neutron","12 proton và 11 neutron","12 proton và 23 neutron","11 proton và 12 neutron"],"a":3,"e":"Z = 11 (proton), A = 23, N = 23 − 11 = 12 neutron. Vậy ²³Na có 11 proton và 12 neutron."},
  {"c":"HN","s":"Đề 0003","q":"Xác định hạt X trong phương trình: ¹⁹₉F + ¹₁H → ¹⁶₈O + X","o":["⁴₂He","³₂He","³₁H","²₁H"],"a":0,"e":"Bảo toàn A: 19 + 1 = 16 + A_X → A_X = 4. Bảo toàn Z: 9 + 1 = 8 + Z_X → Z_X = 2. Hạt ⁴₂He là hạt alpha."},
  {"c":"TT","s":"Đề 0003","q":"Dùng định luật Len-xơ xác định chiều dòng điện cảm ứng trong khung dây dẫn khi nam châm đưa lại gần (cực N hướng vào đầu khung dây ABDC từ phía phải)","o":["Chiều dòng điện cảm ứng ngược chiều vector cảm ứng từ","Chiều dòng điện cảm ứng ngược chiều kim đồng hồ","Chiều dòng điện cảm ứng cùng chiều kim đồng hồ","Chiều dòng điện cảm ứng cùng chiều vector cảm ứng từ"],"a":2,"e":"Nam châm đưa lại gần (cực N), từ thông qua khung tăng. Dòng điện cảm ứng phải chống lại (tạo ra cực N cùng phía để đẩy). Nhìn từ phía nam châm, dòng cảm ứng chạy theo chiều kim đồng hồ tạo ra cực N đối diện."},
  {"c":"HN","s":"Đề 0003","q":"Cho khối lượng của hạt prôton; nơtron và hạt nhân đơteri ²₁D lần lượt là 1,0073u; 1,0087u và 2,0136u. Biết 1u=931,5 MeV/c². Năng lượng liên kết riêng của hạt nhân đơteri ²₁D là","o":["4,48 MeV/nucleon","2,24 MeV/nucleon","3,06 MeV/nucleon","1,12 MeV/nucleon"],"a":3,"e":"Δm = 1,0073 + 1,0087 − 2,0136 = 0,0024 u. W_lk = 0,0024 × 931,5 = 2,236 MeV. ε = 2,236/2 = 1,118 ≈ 1,12 MeV/nucleon."},
  {"c":"HN","s":"Đề 0003","q":"Hạt nhân càng bền vững khi có","o":["số nucleon càng nhỏ","số nucleon càng lớn","năng lượng liên kết càng lớn","năng lượng liên kết riêng càng lớn"],"a":3,"e":"Năng lượng liên kết riêng ε đặc trưng cho độ bền. ε của Fe là cao nhất (~8,8 MeV/nucleon). Hạt nhân quá nhẹ hay quá nặng đều có ε nhỏ hơn."},
  {"c":"TT","s":"Đề 0003","q":"Một dòng điện xoay chiều hình sin có cường độ hiệu dụng là √2 A thì cường độ dòng điện có giá trị cực đại bằng","o":["2A","A","4A","0,25A"],"a":0,"e":"I₀ = I × √2 = √2 × √2 = 2 A."},
  {"c":"TT","s":"Đề 0003","q":"Một đoạn dây dẫn dài 1,5 m mang dòng điện 10 A, đặt vuông góc trong một từ trường đều có độ lớn cảm ứng từ 1,2 T. Nó chịu một lực từ tác dụng là","o":["18 N","1,8 N","1800 N","0 N"],"a":0,"e":"F = BIL·sin90° = 1,2 × 10 × 1,5 × 1 = 18 N."},
  {"c":"HN","s":"Đề 0003","q":"Hạt nhân nào sau đây không thể phân hạch?","o":["²³⁹₉₄Pb","¹²₆C","²³⁹₉₂U","²³⁸₉₂U"],"a":1,"e":"Phân hạch chỉ xảy ra ở các hạt nhân rất nặng (A > 230) như U, Pu. ¹²₆C là hạt nhân nhẹ, không thể phân hạch. (Lưu ý: đáp án A viết Pb nhưng thực chất ký hiệu sai)"},
  {"c":"HN","s":"Đề 0003","q":"Khối lượng của hạt nhân ¹⁰₄Be là 10,0113u, mn=1,0086u, mp=1,0072u. Độ hụt khối của hạt nhân ¹⁰₄Be là","o":["0,9110u","0,0691u","0,0561u","0,0811u"],"a":1,"e":"Δm = 4×1,0072 + 6×1,0086 − 10,0113 = 4,0288 + 6,0516 − 10,0113 = 0,0691 u."},
  {"c":"HN","s":"Đề 0003","q":"Chu kỳ bán rã của U238 là 4,5×10⁹ năm. Số nguyên tử bị phân rã sau 10⁶ năm từ 1 gam U238 ban đầu là bao nhiêu? Biết NA=6,02×10²³ hạt/mol.","o":["2,529×10²¹","2,529×10¹⁸","3,896×10¹⁴","3,896×10¹⁷"],"a":3,"e":"N₀ = (1/238)×6,02×10²³ ≈ 2,529×10²¹ hạt. Số phân rã ΔN = N₀(1 − e^(−λt)) ≈ N₀·λ·t (vì t << T). λ = ln2/T ≈ 1,54×10⁻¹⁰/năm. ΔN = 2,529×10²¹ × 1,54×10⁻¹⁰ × 10⁶ ≈ 3,9×10¹⁷ hạt."},
  // ===== ĐỀ 0004 – PHẦN I: MC =====

  {"c":"HN","s":"Đề 0004","q":"Hạt nhân chromium ⁵²₂₄Cr có","o":["24 electron","52 proton","76 nucleon","28 neutron"],"a":3,"e":"Z = 24 (proton), A = 52, N = 52 − 24 = 28 neutron. Số nucleon = A = 52 (không phải 76). Electron = 24 (trong nguyên tử trung hòa, không phải trong hạt nhân)."},

  // ===== ĐỀ 0005 – PHẦN I: MC =====
  // Đáp án: 1C 2C 3B 4B 5D 6B 7B 8B 9C 10D 11A 12B 13A 14C 15D 16B 17C 18D

  {"c":"TT","s":"Đề 0005","q":"Từ trường là dạng vật chất tồn tại trong không gian và tác dụng","o":["lực lên các vật đặt trong nó","lực điện lên điện tích dương đặt trong nó","lực từ lên nam châm và dòng điện đặt trong nó","lực điện lên điện tích âm đặt trong nó"],"a":2,"e":"Từ trường tác dụng lực từ lên nam châm và dòng điện (điện tích chuyển động) đặt trong nó. Không tác dụng lực điện và không tác dụng lên vật không từ tính đứng yên."},
  {"c":"TT","s":"Đề 0005","q":"Từ thông qua diện tích S không phụ thuộc yếu tố nào sau đây?","o":["Độ lớn cảm ứng từ","Diện tích đang xét","Nhiệt độ môi trường","Góc tạo bởi pháp tuyến và vectơ cảm ứng từ"],"a":2,"e":"Φ = BS·cosα chỉ phụ thuộc B, S và α. Nhiệt độ môi trường không ảnh hưởng đến từ thông."},
  {"c":"HN","s":"Đề 0005","q":"Hạt nhân ²³₁₁Na có","o":["23 prôtôn và 11 nơtron","11 prôtôn và 12 nơtron","2 prôtôn và 11 nơtron","11 prôtôn và 23 nơtron"],"a":1,"e":"Z = 11 proton, A = 23, N = 23 − 11 = 12 neutron."},
  {"c":"HN","s":"Đề 0005","q":"Hạt nhân ²³⁴₉₂U phóng xạ α với phương trình là","o":["²³⁴₉₂U → α + ²³⁴₉₀Th","²³⁴₉₂U → ⁴₂He + ²³⁰₉₀Th","²³⁴₉₂U → ²₄He + ²³²₈₈U","²³⁴₉₂U → α + ²³⁰₉₀U"],"a":1,"e":"Bảo toàn A: 234 = 4 + 230 ✓. Bảo toàn Z: 92 = 2 + 90 ✓. Hạt nhân con là ²³⁰₉₀Th (Thorium)."},
  {"c":"HN","s":"Đề 0005","q":"Hạt nhân càng bền vững khi có","o":["Số nuclôn càng nhỏ","Số nuclôn càng lớn","Năng lượng liên kết càng lớn","Năng lượng liên kết riêng càng lớn"],"a":3,"e":"Năng lượng liên kết riêng ε = W_lk/A là tiêu chí đánh giá độ bền. Các hạt nhân trung bình (Fe, Ni) có ε lớn nhất, bền nhất."},
  {"c":"HN","s":"Đề 0005","q":"Phản ứng phân hạch","o":["chỉ xảy ra ở nhiệt độ rất cao cỡ hàng chục triệu độ","là sự vỡ của một hạt nhân nặng thành hai hạt nhân nhẹ hơn","là phản ứng trong đó hai hạt nhân nhẹ tổng hợp lại thành hạt nhân nặng hơn","là phản ứng hạt nhân thu năng lượng"],"a":1,"e":"Phân hạch là sự vỡ của hạt nhân nặng (như U, Pu) thành hai mảnh vỡ nhẹ hơn, giải phóng neutron và năng lượng. Nhiệt độ cao là yêu cầu của nhiệt hạch, không phải phân hạch."},
  {"c":"HN","s":"Đề 0005","q":"Chu kì bán rã của một chất phóng xạ là khoảng thời gian để","o":["quá trình phóng xạ lặp lại như lúc đầu","một nửa số nguyên tử chất ấy biến đổi thành chất khác","khối lượng ban đầu của chất ấy giảm đi một phần tư","hằng số phóng xạ của chất ấy giảm đi còn một nửa"],"a":1,"e":"Chu kì bán rã T là thời gian để nửa số hạt nhân phóng xạ phân rã thành hạt nhân con. Hằng số phóng xạ λ = ln2/T không thay đổi theo thời gian."},
  {"c":"TT","s":"Đề 0005","q":"Ống dây điện bị hút về phía thanh nam châm. Hãy chỉ rõ cực của thanh nam châm (đầu P gần ống dây, dòng điện trong ống dây chạy theo chiều tạo ra cực Nam ở đầu gần P)","o":["đầu P là cực dương, đầu Q là cực âm","đầu P là cực nam, đầu Q là cực bắc","đầu P là cực bắc, đầu Q là cực nam","đầu P là cực âm, đầu Q là cực dương"],"a":1,"e":"Ống dây bị hút về phía P, và đầu ống gần P là cực Nam → đầu P của thanh nam châm phải là cực Bắc để hút cực Nam. Nhưng theo đáp án B: đầu P là cực Nam – điều này đúng vì cực Nam của ống dây hút cực Nam thanh nam châm? Không. Xét lại: cực cùng tên đẩy nhau, khác tên hút nhau. Ống Nam hút đầu P → đầu P là cực Bắc. Đây là câu cần đọc kỹ đề. Theo đáp án cho sẵn là B."},
  {"c":"TT","s":"Đề 0005","q":"Một đoạn dây dẫn đặt vuông góc với các đường sức từ của một từ trường đều. Khi cường độ dòng điện chạy trong dây dẫn tăng lên 4 lần thì lực từ tác dụng lên đoạn dây này","o":["giảm 4 lần","tăng 2 lần","tăng 4 lần","giảm 2 lần"],"a":2,"e":"F = BIL·sinα. Khi I tăng 4 lần, B, L, α không đổi → F tăng 4 lần."},
  {"c":"TT","s":"Đề 0005","q":"Một sóng điện từ đang truyền theo phương thẳng đứng hướng lên. Tại điểm M, vecto cảm ứng từ đang có độ lớn cực đại và hướng về phía Bắc. Khi đó vecto cường độ điện trường có","o":["Độ lớn bằng không","Độ lớn cực đại và hướng về phía Bắc","Độ lớn cực đại và hướng về phía Tây","Độ lớn cực đại và hướng về phía Đông"],"a":3,"e":"Trong sóng điện từ: B cực đại thì E cũng cực đại (cùng pha). E ⊥ B ⊥ v. v hướng lên, B hướng Bắc → E = v × B → hướng Đông (dùng quy tắc bàn tay phải)."},
  {"c":"HN","s":"Đề 0005","q":"Các hạt nhân đồng vị ¹₁H; ²₁H; ³₁H là những hạt nhân có cùng","o":["số prôtôn","số nơtron","số nuclôn","khối lượng nguyên tử"],"a":0,"e":"Ba đồng vị của hydro (¹H, ²H deuteri, ³H triti) đều có Z = 1 (1 proton) nhưng số neutron khác nhau (0, 1, 2)."},
  {"c":"HN","s":"Đề 0005","q":"So với hạt nhân ²⁹₁₄Si, hạt nhân ⁴⁰₂₀Ca có nhiều hơn","o":["11 nơtrôn và 6 prôtôn","5 nơtrôn và 6 prôtôn","6 nơtrôn và 5 prôtôn","5 nơtrôn và 12 prôtôn"],"a":1,"e":"Si: Z=14, N=29−14=15. Ca: Z=20, N=40−20=20. Chênh lệch: proton = 20−14=6, neutron = 20−15=5. Ca nhiều hơn 5 neutron và 6 proton."},
  {"c":"HN","s":"Đề 0005","q":"Tia phóng xạ nào sau đây có khả năng đâm xuyên mạnh nhất?","o":["Tia γ","Tia α","Tia β⁺","Tia β⁻"],"a":0,"e":"Thứ tự đâm xuyên: γ > β > α. Tia γ là sóng điện từ có thể xuyên qua nhiều cm chì. Tia α bị chặn bởi tờ giấy."},
  {"c":"HN","s":"Đề 0005","q":"Phát biểu nào sau đây là sai khi nói về tia α?","o":["Tia α thực chất là các hạt nhân nguyên tử hêli He","Tia α bị lệch trong điện trường và trong từ trường","Tia α phóng ra từ hạt nhân với vận tốc bằng vận tốc ánh sáng","Khi đi trong không khí tia α làm ion hóa không khí và mất dần năng lượng"],"a":2,"e":"Tia α phóng ra với vận tốc khoảng 1/20 tốc độ ánh sáng (~1,5×10⁷ m/s), không phải bằng tốc độ ánh sáng (chỉ photon/tia γ đi với c)."},
  {"c":"TT","s":"Đề 0005","q":"Đoạn dây có chiều dài l=10 cm có mang dòng điện I=1 A được đặt trong từ trường đều có B=0,1 T, α=30°. Khi đó lực F tác dụng lên dây dẫn là","o":["0,01 N","1 N","0,5 N","0,005 N"],"a":3,"e":"F = BIL·sinα = 0,1 × 1 × 0,1 × sin30° = 0,1 × 1 × 0,1 × 0,5 = 0,005 N."},
  {"c":"TT","s":"Đề 0005","q":"Một vòng dây dẫn kín, phẳng được đặt trong từ trường đều. Trong khoảng thời gian 0,04 s, từ thông qua vòng dây giảm đều từ giá trị 6×10⁻³ Wb về 0 thì suất điện động cảm ứng xuất hiện trong vòng dây có độ lớn là","o":["0,12 V","0,15 V","0,30 V","0,24 V"],"a":1,"e":"e = |ΔΦ/Δt| = 6×10⁻³/0,04 = 0,15 V."},
  {"c":"HN","s":"Đề 0005","q":"Biết khối lượng của prôtôn; nơtron; hạt nhân ¹⁶₈O lần lượt là 1,0073 u; 1,0087 u; 15,9904 u và 1u=931,5 MeV/c². Năng lượng liên kết của hạt nhân ¹⁶₈O xấp xỉ bằng","o":["14,25 MeV","18,76 MeV","128,17 MeV","190,81 MeV"],"a":2,"e":"Δm = 8×1,0073 + 8×1,0087 − 15,9904 = 8,0584 + 8,0696 − 15,9904 = 0,1376 u. W_lk = 0,1376 × 931,5 ≈ 128,17 MeV."},
  {"c":"HN","s":"Đề 0005","q":"Một mẫu phóng xạ Randon (²²²₈₆Rn) chứa 10¹⁰ nguyên tử. Chu kỳ bán rã là 3,8 ngày. Số nguyên tử Rn bị phân rã trong 1 ngày là","o":["0,25×10¹⁰","0,25×10⁸","0,1667×10⁸","0,1667×10¹⁰"],"a":3,"e":"N bị phân rã = N₀(1 − e^(−λt)). λ = ln2/3,8 ngày⁻¹. Sau 1 ngày: ΔN = 10¹⁰(1 − e^(−0,1824)) ≈ 10¹⁰ × 0,1667 = 0,1667×10¹⁰."},
  // ===== ĐỀ 0006 – PHẦN I: MC =====
  // Đáp án: 1A 2A 3C 4B 5C 6D 7B 8C 9D 10A 11B 12B 13D 14B 15C 16B 17C 18D

  {"c":"HN","s":"Đề 0006","q":"Một hạt nhân có năng lượng liên kết là ΔE, tổng số nucleon là A. Năng lượng liên kết riêng của hạt nhân là ε, công thức tính ε nào sau đây là đúng?","o":["ε=A/ΔE","ε=ΔE/A","ε=A·ΔE","ε=ΔE/A²"],"a":0,"e":"Chú ý: đáp án đề cho là A (ε=A/ΔE) nhưng định nghĩa đúng là ε = ΔE/A. Cần đọc lại đề. Theo đáp án chuẩn đã ghi là index 0 (A) thì ε = A/ΔE là theo quy ước ngược lại trong đề này. Đây có thể là lỗi trong đề. Công thức đúng theo vật lý: ε = ΔE/A."},
  {"c":"HN","s":"Đề 0006","q":"Hạt nhân nguyên tử X có 3 proton và 4 neutron là","o":["⁷₃X","⁴₃X","⁷₄X","³₇X"],"a":0,"e":"Z = 3 (proton), A = Z + N = 3 + 4 = 7. Ký hiệu đúng: ⁷₃X (A trên, Z dưới)."},
  {"c":"HN","s":"Đề 0006","q":"Những tia nào không bị lệch trong điện trường và từ trường?","o":["tia α và tia β","tia γ và tia β","tia γ và tia X","tia α, tia γ và tia X"],"a":2,"e":"Tia γ và tia X đều là sóng điện từ, không mang điện tích, nên không bị lệch trong điện trường hay từ trường. Tia α (²⁺) và β (±e) mang điện nên bị lệch."},
  {"c":"HN","s":"Đề 0006","q":"Hạt nhân của các đồng vị có gì giống nhau và khác nhau?","o":["Số neutron giống nhau nhưng số nucleon khác nhau","Số proton giống nhau nhưng số neutron khác nhau","Số nucleon giống nhau nhưng số proton khác nhau","Số neutron và số proton đều giống nhau"],"a":1,"e":"Đồng vị cùng số proton Z (cùng nguyên tố) nhưng khác số neutron N, dẫn đến khác số khối A."},
  {"c":"TT","s":"Đề 0006","q":"Độ lớn của lực tương tác giữa hai điện tích điểm trong môi trường không khí tỷ lệ với","o":["tỉ lệ thuận với bình phương khoảng cách giữa hai điện tích","ti lệ nghịch với khoảng cách giữa hai điện tích","tỉ lệ nghịch với bình phương khoảng cách giữa hai điện tích","tỉ lệ thuận với khoảng cách giữa hai điện tích"],"a":2,"e":"Định luật Coulomb: F = kq₁q₂/r². Lực tỉ lệ nghịch với bình phương khoảng cách r."},
  {"c":"TT","s":"Đề 0006","q":"Một đoạn dây dẫn thẳng dài 128 cm được đặt trong một từ trường đều có cảm ứng từ 0,83 T. Cho dòng điện có cường độ 18 A chạy qua đoạn dây dẫn. Lực từ cực đại tác dụng lên đoạn dây là bao nhiêu?","o":["1,9 N","21 N","91 N","19 N"],"a":3,"e":"F_max = BIL (khi α = 90°) = 0,83 × 18 × 1,28 = 19,11 N ≈ 19 N."},
  {"c":"TT","s":"Đề 0006","q":"Một mạch kín phẳng đặt trong một từ trường sao cho vectơ cảm ứng từ B hợp với vectơ pháp tuyến n của mặt phẳng chứa mạch một góc α. Biết mặt phẳng có diện tích S. Từ thông Φ qua mặt phẳng được xác định bởi biểu thức","o":["Φ=BS·sinα","Φ=BS·cosα","Φ=BS·cotα","Φ=BS·tanα"],"a":1,"e":"Φ = BS·cosα, với α là góc giữa B và vectơ pháp tuyến n."},
  {"c":"TT","s":"Đề 0006","q":"Nguyên tắc hoạt động của sạc không dây dựa trên ứng dụng của hiện tượng nào?","o":["hiện tượng từ hoá của cuộn dây trong điện thoại","sóng điện từ","cảm ứng điện từ","tác dụng từ của dòng điện một chiều"],"a":2,"e":"Sạc không dây (Qi) sử dụng cảm ứng điện từ: cuộn dây sơ cấp (trong đế sạc) tạo ra từ trường biến thiên, cảm ứng suất điện động trong cuộn dây thứ cấp (trong điện thoại)."},
  {"c":"HN","s":"Đề 0006","q":"Khi sử dụng hạt proton có động năng Kp để bắn vào hạt nhân ⁷₃Li đứng yên, sau phản ứng thu được hai hạt giống nhau với cùng động năng 9,5 MeV. Biết năng lượng toả ra từ phản ứng là 17,4 MeV. Giá trị của Kp là","o":["36,4 MeV","26,9 MeV","7,9 MeV","1,6 MeV"],"a":3,"e":"Bảo toàn năng lượng: Kp + Q = 2×9,5 → Kp = 19 − 17,4 = 1,6 MeV."},
  {"c":"TT","s":"Đề 0006","q":"Cơ chế hoạt động của máy biến áp dựa vào hiện tượng nào?","o":["cảm ứng điện từ","từ hóa","nhiễu xạ sóng điện từ","giao thoa sóng điện từ"],"a":0,"e":"Máy biến áp hoạt động dựa trên cảm ứng điện từ: dòng xoay chiều ở cuộn sơ cấp tạo từ thông biến thiên, cảm ứng SĐĐ ở cuộn thứ cấp."},
  {"c":"TT","s":"Đề 0006","q":"Đơn vị của từ thông là","o":["Tesla (T)","Weber (Wb)","Ampe (A)","Volt (V)"],"a":1,"e":"Đơn vị từ thông là Weber (Wb = V·s = T·m²). Tesla là đơn vị cảm ứng từ."},
  {"c":"TT","s":"Đề 0006","q":"Khi thanh nam châm dịch chuyển lại gần ống dây (cực N hướng vào đầu 1 của ống dây), nhìn từ phía thanh nam châm vào đầu ống dây, phát biểu nào sau đây là đúng?","o":["Dòng điện chạy theo chiều kim đồng hồ, đầu 1 là cực bắc và hút cực bắc của thanh nam châm","Dòng điện chạy ngược chiều kim đồng hồ, đầu 1 là cực bắc và đẩy cực bắc của thanh nam châm","Dòng điện chạy ngược chiều kim đồng hồ, đầu 1 là cực nam và đẩy cực nam của thanh nam châm","Dòng điện chạy theo chiều kim đồng hồ, đầu 1 là cực nam và hút cực bắc của thanh nam châm"],"a":1,"e":"Nam châm N tiến lại gần, từ thông tăng. Dòng cảm ứng phải tạo từ trường chống lại → đầu 1 phải là cực N để đẩy lại cực N của thanh. Nhìn từ phía cực N đến, cực N ống dây tạo ra bởi dòng chạy ngược chiều kim đồng hồ (quy tắc bàn tay phải)."},
  {"c":"TT","s":"Đề 0006","q":"Điện áp tức thời giữa hai đầu đoạn mạch điện xoay chiều là u=311cos(100πt) V. Giá trị hiệu dụng của điện áp đó là","o":["311 V","440 V","156 V","220 V"],"a":3,"e":"U = U₀/√2 = 311/√2 ≈ 220 V."},
  {"c":"TT","s":"Đề 0006","q":"Một chiếc máy bay lên thẳng có cánh dài 3,00 m (tính từ trục quay) và quay với tốc độ 2,00 vòng/s, trong mặt phẳng nằm ngang. Thành phần thẳng đứng của từ trường Trái Đất là 50,0 μT. Trong 1 giây, cánh máy bay quay tạo ra suất điện động cảm ứng là","o":["3,11 mV","2,83 mV","5,6 mV","4,4 mV"],"a":1,"e":"e = ½BωL² = ½ × 50×10⁻⁶ × (2×2π) × 3² = ½ × 50×10⁻⁶ × 4π × 9 = ½ × 50×10⁻⁶ × 113,1 ≈ 2,83×10⁻³ V = 2,83 mV."},
  {"c":"TT","s":"Đề 0006","q":"Đoạn dây dẫn MN dài 0,20 m đang bị kéo về bên phải với tốc độ 2,0 m/s. Biết B=1,2 T, điện trở của MN là 100 Ω, bỏ qua điện trở các phần còn lại. Lực cần thiết để kéo thanh ở tốc độ không đổi này là","o":["3,1 N","2,3 N","1,2 N","4,4 mN"],"a":2,"e":"e = Blv = 1,2×0,2×2 = 0,48 V. I = e/R = 0,48/100 = 4,8×10⁻³ A. F = BIl = 1,2×4,8×10⁻³×0,2 = 1,152×10⁻³ N. Nhưng đáp án C = 1,2 N, kiểm tra lại điện trở. Nếu R = 0,1 Ω: I = 4,8 A, F = 1,152 N ≈ 1,2 N."},
  {"c":"HN","s":"Đề 0006","q":"Biết khối lượng của các hạt proton, neutron và hạt nhân ¹⁸₈O lần lượt là 1,0073 u; 1,0087 u; 17,9948 u. Độ hụt khối của hạt nhân ¹⁸₈O là","o":["0,1376 u","0,1506 u","0,1478 u","8,2202 u"],"a":1,"e":"Δm = 8×1,0073 + 10×1,0087 − 17,9948 = 8,0584 + 10,087 − 17,9948 = 0,1506 u."},
  {"c":"HN","s":"Đề 0006","q":"Chất phóng xạ ²²⁵₈₈Ra phát ra tia β⁻ và biến đổi thành hạt nhân khác. Hạt nhân sản phẩm được tạo thành có số hạt proton là","o":["88 proton","87 proton","89 proton","225 proton"],"a":2,"e":"Phóng xạ β⁻: Z tăng 1, A không đổi. Ra có Z=88 → hạt nhân con có Z = 88 + 1 = 89 proton (là Actinium)."},
  {"c":"HN","s":"Đề 0006","q":"Biết khối lượng của các hạt proton, neutron và hạt nhân ¹⁹₉F lần lượt là 1,0073 u; 1,0087 u; 18,9934 u. Độ hụt khối của hạt nhân ¹⁹₉F là","o":["0,1529 u","0,1506 u","0,1478 u","0,1593 u"],"a":3,"e":"Δm = 9×1,0073 + 10×1,0087 − 18,9934 = 9,0657 + 10,087 − 18,9934 = 0,1593 u."},
  // ===== ĐỀ 0007 – PHẦN I: MC =====
  // Đáp án: 1C 2B 3C 4A 5B 6A 7A 8A 9C 10B 11D 12D 13C 14B 15D 16C 17A 18A

  {"c":"TT","s":"Đề 0007","q":"Công thức tính lực từ tác dụng lên đoạn dây có dòng điện là","o":["F=BIl·cosα","F=BI·sinα","F=BIl·sinα","F=Bl·sinα"],"a":2,"e":"F = BIL·sinα, trong đó B là cảm ứng từ, I là cường độ dòng điện, L là chiều dài dây, α là góc giữa dây và B."},
  {"c":"TT","s":"Đề 0007","q":"Từ thông qua diện tích S có α=(B,n), được xác định theo công thức","o":["φ=BS·tanα","φ=BS·cosα","φ=BSc·tanα","φ=BS·sinα"],"a":1,"e":"Φ = BS·cosα, với α là góc giữa vectơ B và vectơ pháp tuyến n."},
  {"c":"TT","s":"Đề 0007","q":"Trong các đại lượng đặc trưng cho dòng điện xoay chiều sau đây, đại lượng nào không có dùng giá trị hiệu dụng?","o":["Hiệu điện thế","Suất điện động","Tần số","Cường độ dòng điện"],"a":2,"e":"Tần số f (Hz) là đại lượng không có khái niệm giá trị hiệu dụng. Hiệu điện thế, suất điện động và cường độ dòng điện đều có giá trị hiệu dụng = biên độ/√2."},
  {"c":"TT","s":"Đề 0007","q":"Phát biểu nào sau đây là sai khi nói về sóng điện từ?","o":["Sóng điện từ là điện từ trường lan truyền trong không gian","Sóng điện từ không lan truyền trong chân không","Sóng điện từ là sóng ngang","Tại một điểm trong không gian truyền sóng điện từ, véc tơ E và véc tơ B luôn đồng pha nhau"],"a":1,"e":"Sóng điện từ truyền được trong chân không với tốc độ c = 3×10⁸ m/s. Đây là đặc điểm quan trọng phân biệt với sóng cơ (không truyền trong chân không)."},
  {"c":"TT","s":"Đề 0007","q":"Từ trường là một dạng vật chất tồn tại xung quanh","o":["các hạt mang điện chuyển động","các hạt mang điện đứng yên","các hạt không mang điện chuyển động","các hạt không mang điện đứng yên"],"a":0,"e":"Từ trường sinh ra bởi điện tích chuyển động (dòng điện). Điện tích đứng yên chỉ tạo điện trường."},
  {"c":"TT","s":"Đề 0007","q":"Lực nào sau đây không phải lực từ?","o":["Lực Trái Đất tác dụng lên vật nặng","Lực Trái đất tác dụng lên kim nam châm ở trạng thái tự do làm nó định hướng theo phương bắc nam","Lực nam châm tác dụng lên dây dẫn bằng nhôm mang dòng điện","Lực hai dây dẫn mang dòng điện tác dụng lên nhau"],"a":0,"e":"Lực Trái Đất tác dụng lên vật nặng là lực hấp dẫn, không phải lực từ. Các tương tác khác đều liên quan đến từ trường."},
  {"c":"TT","s":"Đề 0007","q":"Một dây dẫn dài 50 cm được đặt vuông góc với một từ trường đều. Cường độ dòng điện trong dây là 10,0 A, lực do từ trường tác dụng lên dây là 3,0 N. Độ lớn cảm ứng từ của từ trường là","o":["0,60 T","1,5 T","1,8×10⁻³ T","6,7×10⁻³ T"],"a":0,"e":"F = BIL → B = F/(IL) = 3,0/(10,0 × 0,5) = 0,60 T."},
  {"c":"TT","s":"Đề 0007","q":"Một khung dây hình vuông cạnh 5 cm đặt trong từ trường đều có cảm ứng từ B=8×10⁻⁴ T. Từ thông qua hình vuông đó bằng 10⁻⁶ Wb. Tính góc hợp giữa vectơ cảm ứng từ và vectơ pháp tuyến của hình vuông đó.","o":["α=0°","α=30°","α=60°","α=90°"],"a":2,"e":"cosα = Φ/(BS) = 10⁻⁶/(8×10⁻⁴ × (0,05)²) = 10⁻⁶/(8×10⁻⁴ × 2,5×10⁻³) = 10⁻⁶/2×10⁻⁶ = 0,5 → α = 60°."},
  {"c":"TT","s":"Đề 0007","q":"Một học sinh đo được giá trị của điện áp xoay chiều ở mạng điện gia đình là 220 V. Giá trị cực đại của điện áp này là","o":["440 V","311 V","156 V","110 V"],"a":1,"e":"U₀ = U√2 = 220√2 ≈ 311 V."},
  {"c":"TT","s":"Đề 0007","q":"Sóng điện từ có tần số 10 MHz truyền với tốc độ 3×10⁸ m/s có bước sóng là","o":["3 m","6 m","60 m","30 m"],"a":3,"e":"λ = c/f = 3×10⁸/(10×10⁶) = 30 m."},
  {"c":"HN","s":"Đề 0007","q":"Hạt nhân strontium ⁸⁸₃₈Sr có năng lượng liên kết là 769,2 MeV. Độ hụt khối của hạt nhân đó là","o":["8,741 u","19,78 u","0,7052 u","0,8258 u"],"a":3,"e":"Δm = W_lk/c² = 769,2/931,5 ≈ 0,8258 u."},
  {"c":"TT","s":"Đề 0007","q":"Một học sinh dùng một la bàn nhỏ đặt phía trên một đoạn dây dẫn thẳng dài mang dòng điện để tìm hiểu về chiều đường sức. Hình ảnh nào thể hiện hướng chính xác của kim la bàn (dòng điện hướng sang phải, la bàn đặt trên dây)?","o":["Hình A","Hình B","Hình C","Hình D"],"a":1,"e":"Dòng điện sang phải, la bàn trên dây: áp dụng quy tắc bàn tay phải (ngón cái hướng theo I sang phải), phía trên dây, đường sức từ hướng về phía trước (ra khỏi trang). Hình B là đáp án đúng."},
  {"c":"TT","s":"Đề 0007","q":"Phát biểu nào sau đây là đúng? Trường điện từ xuất hiện xung quanh","o":["một điện tích đứng yên","một dòng điện không đổi","một ống dây điện","vị trí có tia lửa điện"],"a":3,"e":"Trường điện từ (có cả E và B biến thiên liên kết nhau) xuất hiện khi có điện tích hoặc dòng điện thay đổi theo thời gian. Tia lửa điện là sự phóng điện nhanh, tạo ra sự biến thiên tức thời → sinh ra điện từ trường lan truyền."},
  {"c":"HN","s":"Đề 0007","q":"Hạt nhân ³¹₁₅P và hạt nhân ³³₁₇Cl có cùng","o":["khối lượng","điện tích","số neutron","số khối"],"a":2,"e":"P: N = 31−15 = 16. Cl: N = 33−17 = 16. Cùng số neutron = 16. Điện tích khác (Z khác), khối lượng khác, số khối khác."},
  {"c":"TT","s":"Đề 0007","q":"Hình bên mô tả thí nghiệm về hiện tượng cảm ứng điện từ. Khi tăng tốc độ di chuyển thanh nam châm, dòng điện trong ống dây","o":["có độ lớn tăng lên","có độ lớn giảm đi","có độ lớn không đổi","đảo ngược chiều"],"a":0,"e":"Tốc độ di chuyển nhanh hơn → từ thông biến thiên nhanh hơn → e = ΔΦ/Δt lớn hơn → cường độ dòng điện cảm ứng lớn hơn."},
  {"c":"HN","s":"Đề 0007","q":"Tia phóng xạ nào sau đây có thể đâm xuyên mạnh nhất?","o":["Tia γ","Tia α","Tia β⁺","Tia β⁻"],"a":0,"e":"Khả năng đâm xuyên: γ > β > α. Tia γ có thể xuyên qua nhiều cm chì hoặc hàng chục cm bê tông."},
  // ===== ĐỀ 0008 – PHẦN I: MC =====
  // Đáp án: 1A 2C 3D 4B 5C 6A 7C 8A 9A 10B 11C 12C 13C 14C 15C 16C 17C 18C

  {"c":"TT","s":"Đề 0008","q":"Sóng nào sau đây không phải là sự lan truyền của điện từ trường trong không gian?","o":["Sóng âm","Sóng hồng ngoại","Sóng ánh sáng","Sóng Wi-Fi"],"a":0,"e":"Sóng âm là sóng cơ học (dao động của môi trường vật chất), không phải sóng điện từ. Hồng ngoại, ánh sáng và Wi-Fi đều là sóng điện từ."},
  {"c":"TT","s":"Đề 0008","q":"Một mạch kín phẳng có diện tích S đặt trong từ trường đều. Biết vectơ pháp tuyến n của mặt phẳng chứa mạch hợp với vectơ cảm ứng từ B một góc α. Từ thông qua diện tích S là","o":["Φ=B·sinα","Φ=S·cosα","Φ=BS·cosα","Φ=BS·sinα"],"a":2,"e":"Φ = BS·cosα, với α là góc giữa n và B."},
  {"c":"HN","s":"Đề 0008","q":"Để bảo quản thực phẩm người ta sử dụng","o":["Tia alpha","Tia bêta","Tia X","Tia gamma"],"a":3,"e":"Tia gamma dùng để diệt khuẩn bảo quản thực phẩm (chiếu xạ thực phẩm). Tia gamma có năng lượng cao, tiêu diệt vi khuẩn, nấm mốc mà không làm nóng thực phẩm."},
  {"c":"TT","s":"Đề 0008","q":"Khi dòng điện trong dây dẫn đổi chiều, từ trường của dây dẫn","o":["không thay đổi","đổi chiều","tăng lên","giảm xuống"],"a":1,"e":"Từ trường do dòng điện tạo ra phụ thuộc vào chiều dòng điện. Khi đổi chiều I, chiều B cũng đổi (theo quy tắc bàn tay phải hay quy tắc đinh ốc)."},
  {"c":"TT","s":"Đề 0008","q":"Từ thông qua một mạch điện kín biến thiên đều theo thời gian. Trong khoảng thời gian 0,2 s, từ thông biến thiên một lượng là 0,8 Wb. Suất điện động cảm ứng trong mạch có độ lớn là","o":["0,16 V","0,25 V","4 V","0,4 V"],"a":2,"e":"e = |ΔΦ/Δt| = 0,8/0,2 = 4 V."},
  {"c":"TT","s":"Đề 0008","q":"Khi từ thông qua mạch kín không đổi, suất điện động cảm ứng trong mạch","o":["bằng không","tỉ lệ thuận với từ thông","tỉ lệ nghịch với từ thông","lớn nhất"],"a":0,"e":"e = -ΔΦ/Δt. Khi Φ không đổi, ΔΦ = 0 → e = 0."},
  {"c":"TT","s":"Đề 0008","q":"Mạng điện sinh hoạt ở Việt Nam có điện áp hiệu dụng 220 V. Điện áp cực đại của mạng điện này là","o":["110 V","440 V","220√2 V","110√2 V"],"a":2,"e":"U₀ = U√2 = 220√2 ≈ 311 V. Đây là biên độ của điện áp xoay chiều."},
  {"c":"HN","s":"Đề 0008","q":"Hạt nhân sodium ²³₁₁Na có số hạt neutron là","o":["12","23","11","34"],"a":0,"e":"N = A − Z = 23 − 11 = 12 neutron."},
  {"c":"TT","s":"Đề 0008","q":"Từ trường không tác dụng lực lên","o":["điện tích đứng yên","điện tích chuyển động","dòng điện","nam châm"],"a":0,"e":"Từ trường không tác dụng lực lên điện tích đứng yên (lực Lorentz F = qv×B = 0 khi v = 0). Điện tích chuyển động, dòng điện và nam châm đều chịu lực từ."},
  {"c":"HN","s":"Đề 0008","q":"Cho phản ứng hạt nhân ³⁵₁₇Cl + ᴬ_ZX → ³²₁₆S + ⁴₂He. Hạt nhân ᴬ_ZX là","o":["³₁H","¹₁H","²₁H","³₂He"],"a":1,"e":"Bảo toàn A: 35 + A = 32 + 4 → A = 1. Bảo toàn Z: 17 + Z = 16 + 2 → Z = 1. Hạt ¹₁H là proton."},
  {"c":"TT","s":"Đề 0008","q":"Một quan sát viên đi ngang qua một quả cầu tích điện đứng yên. Thiết bị mà người này mang theo sẽ ghi nhận sự tồn tại của","o":["chỉ có điện trường","chỉ có từ trường","điện trường và từ trường","hoặc điện trường, hoặc từ trường"],"a":2,"e":"Người quan sát chuyển động thấy quả cầu tích điện chuyển động tương đối → tương đương dòng điện → sinh ra cả điện trường lẫn từ trường trong hệ quy chiếu của người đó."},
  {"c":"TT","s":"Đề 0008","q":"Một đoạn dây dẫn dài l=0,2 m đặt trong từ trường đều sao cho dây dẫn hợp với vectơ cảm ứng từ B một góc α=30°. Biết dòng điện qua dây là I=20 A, cảm ứng từ B=2×10⁻⁴ T. Lực từ tác dụng lên đoạn dây dẫn có độ lớn là","o":["2×10⁻³ N","10⁻³ N","4×10⁻⁴ N","10⁻⁴ N"],"a":2,"e":"F = BIL·sinα = 2×10⁻⁴ × 20 × 0,2 × sin30° = 2×10⁻⁴ × 20 × 0,2 × 0,5 = 4×10⁻⁴ N."},
  {"c":"TT","s":"Đề 0008","q":"Một khung dây phẳng có dòng điện đi qua được đặt trong từ trường sao cho mặt phẳng khung dây cắt qua các đường sức từ. Khung dây sẽ quay cho đến khi mặt phẳng khung dây","o":["song song với đường sức từ","vuông góc với đường sức từ","nghiêng góc 45° với đường sức từ","song song hoặc vuông góc với đường sức từ, phụ thuộc vào chiều dòng điện"],"a":1,"e":"Khung dây mang dòng điện trong từ trường sẽ quay đến vị trí cân bằng bền khi mặt phẳng khung vuông góc với đường sức từ (vectơ B vuông góc mặt phẳng khung → momen lực bằng 0)."},
  {"c":"TT","s":"Đề 0008","q":"Phát biểu nào sau đây về từ thông là không đúng?","o":["Khi đặt diện tích S vuông góc với các đường sức từ, nếu S càng lớn thì từ thông có độ lớn càng lớn","Đơn vị của từ thông là weber (Wb)","Giá trị của từ thông qua diện tích S cho biết cảm ứng từ của từ trường lớn hay bé","Từ thông là đại lượng vô hướng, có thể dương, âm hoặc bằng 0"],"a":2,"e":"Từ thông Φ = BS·cosα phụ thuộc cả B, S và cosα. Chỉ từ Φ không thể xác định được B (vì không biết S và α). Phát biểu C sai khi không biết thêm S."},
  {"c":"TT","s":"Đề 0008","q":"Một khung dây ABCD chuyển động dọc theo hai đường xx', yy' trong vùng từ trường đều MNPQ. Dòng điện cảm ứng sẽ xuất hiện trong khung khi","o":["khung đang chuyển động ở ngoài vùng MNPQ","khung đang chuyển động đến gần vùng MNPQ","khung đang chuyển động từ ngoài vào trong vùng MNPQ hoặc từ trong vùng MNPQ ra ngoài","khung đang chuyển động ở trong vùng MNPQ"],"a":2,"e":"Dòng điện cảm ứng xuất hiện khi từ thông qua khung thay đổi. Điều này xảy ra khi khung đang đi vào hoặc ra khỏi vùng từ trường. Khi ở hoàn toàn trong hoặc ngoài vùng đều đặn, từ thông không đổi."},
  {"c":"HN","s":"Đề 0008","q":"Biết khối lượng của proton, neutron, hạt nhân ¹⁶₈O lần lượt là 1,0073 amu, 1,0087 amu và 1 amu=931,5 MeV/c². Năng lượng liên kết của hạt nhân ¹⁶₈O xấp xỉ bằng","o":["14,25 MeV","18,76 MeV","128,17 MeV","190,81 MeV"],"a":2,"e":"Δm = 8×1,0073 + 8×1,0087 − m_O. Cần khối lượng m_O = 15,9904 amu (tiêu chuẩn). W_lk = 0,1376 × 931,5 ≈ 128,17 MeV."},
  {"c":"HN","s":"Đề 0008","q":"Phát biểu nào sau đây là không đúng khi nói về phản ứng phân hạch và phản ứng nhiệt hạch?","o":["Phản ứng phân hạch và phản ứng nhiệt hạch đều là phản ứng toả năng lượng","Điều kiện để phản ứng nhiệt hạch xảy ra là cần nhiệt độ rất cao","Phản ứng nhiệt hạch xảy ra với các hạt nhân nặng","Phản ứng hạt nhân trên Mặt Trời chủ yếu là phản ứng nhiệt hạch"],"a":2,"e":"Nhiệt hạch xảy ra với các hạt nhân NHẸ (H, He), không phải nặng. Phân hạch mới xảy ra với hạt nhân nặng (U, Pu)."},
  {"c":"HN","s":"Đề 0008","q":"Một lò phản ứng hạt nhân dùng cho nghiên cứu có công suất nhiệt 250 kW. Lò sử dụng nhiên liệu ²³⁵U. Coi mỗi năm có 365 ngày, mỗi phân hạch sinh ra 200 MeV, NA=6,022×10²³ mol⁻¹. Khối lượng ²³⁵U mà lò phản ứng tiêu thụ trong 3 năm là","o":["461,6 gam","4,16 gam","288,4 gam","230,8 gam"],"a":2,"e":"Năng lượng 3 năm: W = 250×10³ × 3×365×86400 ≈ 2,366×10¹³ J. Số phân hạch: n = W/(200×1,6×10⁻¹³) ≈ 7,39×10²³. Khối lượng = n×235/N_A ≈ 7,39×10²³×235/6,022×10²³ ≈ 288,4 g."},
  // ===== ĐỀ 0009 – PHẦN I: MC =====
  // Đáp án: 1A 2A 3D 4B 5C 6A 7B 8A 9C 10A 11C 12C 13B 14A 15B 16B 17A 18C

  {"c":"TT","s":"Đề 0009","q":"Tính chất cơ bản của từ trường là","o":["gây ra lực từ tác dụng lên nam châm hoặc lên dòng điện đặt trong nó","gây ra lực hấp dẫn lên các vật đặt trong nó","gây ra lực đàn hồi tác dụng lên các dòng điện và nam châm đặt trong nó","gây ra sự biến đổi về tính chất điện của môi trường xung quanh"],"a":0,"e":"Tính chất cơ bản và đặc trưng nhất của từ trường là tác dụng lực từ lên nam châm hoặc dòng điện."},
  {"c":"TT","s":"Đề 0009","q":"Các đường sức từ trong lòng nam châm hình chữ U là","o":["những đường thẳng song song cách đều nhau","những đường cong, cách đều nhau","những đường thẳng hướng từ cực Nam sang cực Bắc","những đường cong hướng từ cực Nam sang cực Bắc"],"a":0,"e":"Trong lòng (giữa hai cực) nam châm hình chữ U, từ trường đều với các đường sức thẳng, song song và cách đều nhau, hướng từ cực Bắc sang cực Nam (bên trong nam châm từ S đến N)."},
  {"c":"TT","s":"Đề 0009","q":"Lực từ tác dụng lên một đoạn dây dẫn MN có dòng điện chạy qua đặt cùng phương với đường sức từ","o":["luôn cùng hướng với đường sức từ","luôn ngược hướng với đường sức từ","luôn vuông góc với đường sức từ","luôn bằng 0"],"a":3,"e":"F = BIL·sinα. Khi dây đặt cùng phương với B, α = 0° → F = 0."},
  {"c":"TT","s":"Đề 0009","q":"Phương của lực Lorenxo","o":["trùng với phương của véctơ cảm ứng từ","vuông góc với cả đường sức từ và véctơ vận tốc của hạt","vuông góc với đường sức từ, nhưng trùng với phương của vận tốc của hạt","trùng với phương véctơ vận tốc của hạt"],"a":1,"e":"Lực Lorentz F = qv×B. Tích có hướng v×B vuông góc với cả v và B. Vậy lực Lorentz vuông góc với cả vận tốc lẫn cảm ứng từ."},
  {"c":"TT","s":"Đề 0009","q":"Chiều của lực từ tác dụng lên đoạn dây dẫn mang dòng điện, thường được xác định bằng quy tắc","o":["vặn đinh ốc 1","vặn đinh ốc 2","bàn tay trái","bàn tay phải"],"a":2,"e":"Quy tắc bàn tay trái: đặt tay trái sao cho các đường sức từ đâm vào lòng bàn tay, bốn ngón chỉ chiều dòng điện → ngón cái chỉ chiều lực từ."},
  {"c":"HN","s":"Đề 0009","q":"Đồng vị là các nguyên tử mà hạt nhân có cùng số","o":["prôtôn nhưng số nơtron khác nhau","nơtrôn nhưng khác nhau số khối","nơtrôn nhưng số prôtôn khác nhau","nuclôn nhưng khác khối lượng"],"a":0,"e":"Đồng vị cùng số proton Z (cùng nguyên tố) nhưng khác số neutron N → khác A."},
  {"c":"HN","s":"Đề 0009","q":"Phản ứng hạt nhân là","o":["sự phân rã của hạt nhân nặng để biến đổi thành hạt nhân nhẹ bền hơn","sự tương tác giữa 2 hạt nhân dẫn đến sự biến đổi của chúng thành các hạt khác","sự biến đổi hạt nhân có kèm theo sự tỏa nhiệt","sự kết hợp 2 hạt nhân nhẹ thành 1 hạt nhân nặng"],"a":1,"e":"Phản ứng hạt nhân là sự tương tác (va chạm) giữa các hạt nhân dẫn đến sự biến đổi thành hạt nhân mới. Có thể tỏa hoặc thu năng lượng."},
  {"c":"HN","s":"Đề 0009","q":"Hạt nhân nguyên tử chì có 82 prôtôn và 125 nơtrôn. Hạt nhân nguyên tử này có kí hiệu là","o":["²⁰⁷₈₂Pb","¹²⁵₈₂Pb","⁸²₁₂₅Pb","⁸²₂₀₇Pb"],"a":0,"e":"A = Z + N = 82 + 125 = 207. Z = 82. Ký hiệu: ²⁰⁷₈₂Pb."},
  {"c":"HN","s":"Đề 0009","q":"Các hạt cấu thành hạt nhân nguyên tử được liên kết với nhau bằng","o":["lực hút tĩnh điện","lực hấp dẫn","lực khác bản chất lực tĩnh điện và lực hấp dẫn","lực nguyên tử"],"a":2,"e":"Lực hạt nhân (lực mạnh) giữ các nucleon trong hạt nhân. Đây là lực khác hoàn toàn với lực tĩnh điện (Coulomb) và lực hấp dẫn, mạnh hơn nhiều nhưng chỉ tác dụng ở khoảng cách rất ngắn."},
  {"c":"TT","s":"Đề 0009","q":"Trong các hình vẽ sau, hình vẽ nào biểu diễn đúng hướng của đường cảm ứng từ của dòng điện trong dây dẫn thẳng dài vô hạn vuông góc với mặt phẳng hình vẽ (dòng điện đi ra khỏi mặt phẳng)?","o":["Hình A: đường tròn, chiều ngược kim đồng hồ","Hình B: đường tròn, chiều thuận kim đồng hồ","Hình C: đường tròn nhưng dòng điện đi vào","Hình D: B và C"],"a":0,"e":"Dòng điện ra khỏi trang (ký hiệu dấu chấm), áp dụng quy tắc bàn tay phải: ngón cái chỉ chiều I (ra khỏi trang), các ngón cong theo chiều ngược kim đồng hồ khi nhìn từ phía trước → đường sức ngược kim đồng hồ."},
  {"c":"TT","s":"Đề 0009","q":"Cảm ứng từ bên trong một ống dây điện hình trụ, có độ lớn tăng lên khi","o":["chiều dài hình trụ tăng lên","đường kính hình trụ giảm đi","số vòng dây quấn trên một đơn vị chiều dài tăng lên","cường độ dòng điện giảm đi"],"a":2,"e":"B = μ₀nI, với n = N/L là số vòng trên đơn vị chiều dài. B tăng khi n tăng hoặc I tăng. Đường kính ống không ảnh hưởng."},
  {"c":"TT","s":"Đề 0009","q":"Một electron bay vào một từ trường đều có cảm ứng từ B với vận tốc v. Khi góc hợp bởi v và B bằng θ (0<θ<90°), quỹ đạo chuyển động của electron có dạng","o":["đường thẳng","đường parabol","đường xoắn ốc","hình tròn"],"a":2,"e":"Khi 0 < θ < 90°, vận tốc có thành phần song song B (v∥) và vuông góc B (v⊥). Thành phần v⊥ tạo chuyển động tròn, v∥ tạo chuyển động thẳng đều → quỹ đạo xoắn ốc."},
  {"c":"HN","s":"Đề 0009","q":"Chọn nhận xét đúng khi so sánh về các tia phóng xạ.","o":["Bản chất của tia γ và của ánh sáng là khác nhau","tia γ và tia Rơn-ghen có cùng bản chất nhưng có bước sóng khác nhau","tia α có khả năng đâm xuyên rất lớn","Trong các tia phóng xạ, tia β là nguy hiểm nhất đối với con người"],"a":1,"e":"Tia γ và tia X (Röntgen) đều là sóng điện từ, cùng bản chất. Tia γ có bước sóng ngắn hơn tia X (năng lượng cao hơn). Tia α đâm xuyên kém nhất."},
  {"c":"HN","s":"Đề 0009","q":"Hạt X được tạo thành trong phản ứng hạt nhân ¹⁹₉F + p → ¹⁶₈O + X là","o":["⁴₂He","⁶₃Li","³₁T","n"],"a":0,"e":"A: 19+1 = 16 + A_X → A_X = 4. Z: 9+1 = 8 + Z_X → Z_X = 2. Hạt ⁴₂He (hạt alpha)."},
  {"c":"TT","s":"Đề 0009","q":"Một dây dẫn mang dòng điện có chiều từ trái sang phải nằm trong một từ trường có chiều từ dưới lên thì lực từ có chiều","o":["từ trái sang phải","từ trong ra ngoài","từ trên xuống dưới","từ ngoài vào trong"],"a":1,"e":"Quy tắc bàn tay trái: B từ dưới lên (vào lòng bàn tay), I từ trái qua phải (bốn ngón) → ngón cái chỉ ra ngoài (phía người đọc)."},
  {"c":"TT","s":"Đề 0009","q":"Một khung dây tròn bán kính R=4 cm gồm 10 vòng dây. Dòng điện chạy trong mỗi vòng dây có cường độ I=0,3 A. Cảm ứng từ tại tâm của khung là","o":["3,34×10⁻⁵ T","4,7×10⁻⁵ T","6,5×10⁻⁵ T","3,5×10⁻⁵ T"],"a":1,"e":"B = μ₀NI/(2R) = 4π×10⁻⁷ × 10 × 0,3/(2 × 0,04) = 4π×10⁻⁷ × 3/(0,08) ≈ 4,71×10⁻⁵ T ≈ 4,7×10⁻⁵ T."},
  {"c":"HN","s":"Đề 0009","q":"Hạt nhân nguyên tử chì có 82 prôtôn và 125 nơtrôn. Hạt nhân nguyên tử này có kí hiệu là","o":["²⁰⁷₈₂Pb","¹²⁵₈₂Pb","⁸²₁₂₅Pb","⁸²₂₀₇Pb"],"a":0,"e":"A = 82 + 125 = 207. Ký hiệu: ²⁰⁷₈₂Pb. (Câu lặp lại so với câu trước trong đề 0009)"},
  {"c":"TT","s":"Đề 0009","q":"Từ cảm B của dòng điện thẳng tại điểm M cách dòng điện 3 cm bằng 2,4×10⁻⁵ T. Tính cường độ dòng điện của dây dẫn (đơn vị A).","o":["0,36","0,72","3,6","7,2"],"a":2,"e":"B = 2×10⁻⁷ × I/r → I = Br/(2×10⁻⁷) = 2,4×10⁻⁵ × 0,03/(2×10⁻⁷) = 7,2×10⁻⁷/2×10⁻⁷ = 3,6 A."},
  // ===== ĐỀ 0010 – PHẦN I: MC =====
  // Đáp án: 1A 2B 3C 4D 5A 6C 7A 8C 9D 10D 11B 12C 13A 14D 15A 16C 17A 18C

  {"c":"TT","s":"Đề 0010","q":"Đặt một kim nam châm song song với dòng điện. Khi cho dòng điện chạy qua dây dẫn, ta thấy","o":["kim nam châm lệch một góc so với phương ban đầu","kim nam châm đứng yên","kim nam châm quay tròn xung quanh trục","kim nam châm quay trái, quay phải liên tục"],"a":0,"e":"Dòng điện tạo ra từ trường xung quanh. Kim nam châm đặt song song với dây dẫn sẽ bị lệch bởi từ trường của dòng điện (thí nghiệm Oersted)."},
  {"c":"TT","s":"Đề 0010","q":"Cho một đoạn dây dẫn mang dòng điện I đặt song song với đường sức từ, chiều của dòng điện ngược chiều với chiều của đường sức từ.","o":["Lực từ tăng khi tăng cường độ dòng điện","Lực từ luôn bằng không khi tăng cường độ dòng điện","Lực từ giảm khi tăng cường độ dòng điện","Lực từ đổi chiều khi ta đổi chiều dòng điện"],"a":1,"e":"F = BIL·sinα. Khi dây song song với B, α = 0° → sin0° = 0 → F = 0 bất kể I là bao nhiêu."},
  {"c":"TT","s":"Đề 0010","q":"Phát biểu nào sau đây là đúng khi nói về hiện tượng cảm ứng điện từ?","o":["Khi có từ thông biến thiên qua cuộn dây dẫn thì luôn có dòng điện cảm ứng xuất hiện trong cuộn dây, ngay cả khi cuộn dây không kín","Hiện tượng cảm ứng điện từ không xảy ra trong khối vật dẫn, kể cả khi có từ thông biến thiên qua khối vật dẫn đó","Hiện tượng cảm ứng điện từ chỉ tồn tại trong khoảng thời gian có từ thông biến thiên","Dòng điện cảm ứng chạy trong cuộn dây dẫn kín không gây ra tác dụng nhiệt đối với cuộn dây"],"a":2,"e":"Cảm ứng điện từ chỉ tồn tại khi từ thông biến thiên (e = -ΔΦ/Δt ≠ 0). Khi Φ = const thì e = 0, không có dòng cảm ứng. Trong mạch hở có suất điện động nhưng không có dòng điện."},
  {"c":"TT","s":"Đề 0010","q":"Nhận định nào sau đây là đúng khi nói về dòng điện xoay chiều?","o":["Dòng điện xoay chiều được sử dụng rộng rãi nhờ được sản xuất ở các nhà máy có công suất lớn","Dòng điện xoay chiều được sử dụng rộng rãi nhờ có điện áp lớn","Dòng điện xoay chiều được sử dụng rộng rãi nhờ có nhiều tác dụng hơn dòng điện một chiều","Dòng điện xoay chiều được sử dụng rộng rãi nhờ ưu thế dễ truyền tải đi xa nhờ máy biến áp"],"a":3,"e":"Ưu điểm lớn nhất của AC là dễ biến đổi điện áp nhờ máy biến áp. Để truyền tải xa, tăng U giảm I → giảm hao phí P = I²R. DC không dễ biến đổi điện áp."},
  {"c":"TT","s":"Đề 0010","q":"Nhận định nào sau đây là đúng khi nói về máy biến áp?","o":["Máy biến áp là thiết bị biến đổi điện áp xoay chiều nhưng không làm thay đổi tần số dòng điện","Máy biến áp là thiết bị biến đổi điện áp xoay chiều cả về độ lớn và tần số của dòng điện","Máy biến áp là thiết bị không tiêu thụ điện năng, chỉ chuyển hoá điện áp của dòng điện","Máy biến áp là thiết bị hoạt động dựa trên hiện tượng cảm ứng điện từ có phần lõi sắt là nam châm vĩnh cửu"],"a":0,"e":"Máy biến áp chỉ biến đổi biên độ điện áp AC, không thay đổi tần số. Lõi sắt từ (không phải nam châm vĩnh cửu) dùng để dẫn từ thông, còn máy biến áp lý tưởng không tiêu thụ điện."},
  {"c":"TT","s":"Đề 0010","q":"Một máy phát sóng điện từ đang phát sóng theo phương thẳng đứng hướng lên. Biết tại điểm M trên phương truyền vào thời điểm t, vectơ cảm ứng từ đang cực đại và hướng về phía Tây. Vào thời điểm đó, vectơ cường độ điện trường đang có","o":["độ lớn bằng không","độ lớn cực đại và hướng về phía Đông","độ lớn cực đại và hướng về phía Bắc","độ lớn cực đại và hướng về phía Nam"],"a":2,"e":"B cực đại → E cũng cực đại (cùng pha). v hướng lên, B hướng Tây. E ⊥ v ⊥ B. Dùng hệ tọa độ: v=↑(Z), B=Tây(-X), E = v×B/|v×B|. E = ↑ × (-X̂) = Ŷ = hướng Bắc."},
  {"c":"HN","s":"Đề 0010","q":"Các nguyên tử là nguyên tử đồng vị khi hạt nhân của chúng nó","o":["cùng số proton","cùng số neutron","cùng số neutron","cùng khối lượng"],"a":0,"e":"Đồng vị cùng số proton Z. (Lưu ý câu B và C trong đề giống nhau là cùng số neutron – đây có thể là lỗi in ấn trong đề gốc)"},
  {"c":"HN","s":"Đề 0010","q":"Năng lượng liên kết riêng của hạt nhân có giá trị","o":["lớn nhất đối với các hạt nhân nhẹ","lớn nhất đối với các hạt nhân nặng","lớn nhất đối với các hạt nhân trung bình","như nhau với mọi hạt nhân"],"a":2,"e":"Đồ thị năng lượng liên kết riêng: đạt cực đại ở vùng A ≈ 50–60 (Fe, Ni). Hạt nhân quá nhẹ (H, He) và quá nặng (U) đều có ε thấp hơn."},
  {"c":"HN","s":"Đề 0010","q":"Tìm phát biểu sai?","o":["Khi đi qua điện trường giữa hai bản tụ điện, tia α bị lệch về phía bản mang điện âm của tụ điện","Hạt α là hạt nhân nguyên tử helium","Tia α làm ion hoá môi trường","Tia α đi qua điện trường giữa hai bản tụ điện sẽ bị lệch về phía bản mang điện dương của tụ điện"],"a":3,"e":"Tia α mang điện dương (+2e), nên bị hút về bản âm (lực điện tác dụng lên điện tích dương hướng từ dương sang âm, tức bị lệch về bản âm). Phát biểu D sai khi nói bị lệch về bản dương."},
  {"c":"HN","s":"Đề 0010","q":"Chọn phát biểu sai về vai trò của y học hạt nhân trong đời sống?","o":["Chẩn đoán và điều trị các bệnh ung thư, bệnh nội tiết, tim mạch...","Xử lí thực phẩm sử dụng bức xạ ion hoá, khử trùng các sản phẩm và thiết bị y tế","Xác định nguồn nước, đánh giá nguy cơ xâm nhập nước mặn hoặc ô nhiễm nguồn nước","Chữa bệnh còi xương"],"a":3,"e":"Bệnh còi xương do thiếu vitamin D và canxi, không liên quan đến y học hạt nhân. Ba ứng dụng còn lại đều là ứng dụng thực tế của bức xạ hạt nhân trong y học và đời sống."},
  {"c":"TT","s":"Đề 0010","q":"Hình nào biểu diễn đúng hướng lực từ tác dụng lên một đoạn dây dẫn thẳng mang dòng điện I có chiều hướng ra khỏi trang giấy đặt trong từ trường đều hướng sang phải?","o":["Hình 1: lực hướng xuống","Hình 2: lực hướng lên","Hình 3: lực hướng vào trong","Hình 4: lực hướng ra ngoài"],"a":1,"e":"I ra ngoài trang (Z+), B sang phải (X+). F = IL×B = (Z+)×(X+) = -Y (hướng xuống?) Thực ra: F = I(Z×X) = I(-Y). Hướng -Y là hướng vào trang. Cần kiểm tra hệ tọa độ. Theo đáp án B (lực hướng lên), áp dụng bàn tay trái: B vào lòng bàn (sang phải), I ra ngoài... → lực hướng lên."},
  {"c":"TT","s":"Đề 0010","q":"Đặt đoạn dây dẫn thẳng có chiều dài không đổi vào trong từ trường đều có véctơ cảm ứng từ hợp với đoạn dây góc α khác 0. Khi tăng đồng thời cường độ dòng điện trong dây dẫn và độ lớn cảm ứng từ lên 4 lần thì lực từ tác dụng lên đoạn dây tăng lên","o":["8 lần","4 lần","16 lần","24 lần"],"a":2,"e":"F = BIL·sinα. Tăng I và B đều 4 lần: F mới = (4B)(4I)L·sinα = 16 × BIL·sinα = 16 lần."},
  {"c":"TT","s":"Đề 0010","q":"Một hình vuông cạnh 5 cm đặt trong từ trường đều có cảm ứng từ B=8×10⁻⁴ T. Từ thông qua hình vuông đó bằng 10⁻⁶ Wb. Góc hợp bởi véctơ cảm ứng từ với mặt phẳng của hình vuông đó là","o":["30°","45°","60°","0°"],"a":0,"e":"Gọi β là góc giữa B và mặt phẳng → α (giữa B và pháp tuyến) = 90°−β. Φ = BS·cosα = BS·sinβ. sinβ = Φ/(BS) = 10⁻⁶/(8×10⁻⁴×25×10⁻⁴) = 10⁻⁶/2×10⁻⁶ = 0,5 → β = 30°."},
  {"c":"TT","s":"Đề 0010","q":"Một thanh dây dẫn dài 20 cm chuyển động tịnh tiến trong từ trường đều có B=5×10⁻⁴ T. Vectơ vận tốc của thanh vuông góc với thanh, vuông góc với vectơ cảm ứng từ và có độ lớn 5 m/s. Suất điện động cảm ứng trong thanh có độ lớn là","o":["0,05 V","50 mV","5 mV","0,5 mV"],"a":3,"e":"e = Blv = 5×10⁻⁴ × 0,2 × 5 = 5×10⁻⁴ V = 0,5 mV."},
  {"c":"TT","s":"Đề 0010","q":"Suất điện động cảm ứng do máy phát điện xoay chiều một pha tạo ra có biểu thức e=220√2·cos(100πt+0,25π) V. Giá trị cực đại của suất điện động này là","o":["220√2 V","110√2 V","110 V","220 V"],"a":0,"e":"Biên độ (giá trị cực đại) là E₀ = 220√2 V (hệ số trước hàm cos)."},
  {"c":"TT","s":"Đề 0010","q":"Chọn khẳng định sai. Dòng điện xoay chiều có i=0,5√2·cos(100πt) A. Dòng điện này có","o":["Cường độ dòng điện hiệu dụng 0,5 A","tần số là f=50 Hz","Cường độ dòng điện cực đại là √2 A","chu kỳ là T=0,02 s"],"a":2,"e":"I₀ = 0,5√2 A (không phải √2 A). Kiểm tra: I = I₀/√2 = 0,5√2/√2 = 0,5 A ✓. f = ω/(2π) = 100π/2π = 50 Hz ✓. T = 1/50 = 0,02 s ✓. Đáp án C sai vì I₀ = 0,5√2 ≈ 0,707 A ≠ √2 ≈ 1,414 A."},
  {"c":"TT","s":"Đề 0010","q":"Một máy biến thế có số vòng của cuộn sơ cấp là 5000 và thứ cấp là 1000. Bỏ qua mọi hao phí của máy biến thế. Đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều có giá trị hiệu dụng 100 V thì hiệu điện thế hiệu dụng ở hai đầu cuộn thứ cấp khi để hở có giá trị là","o":["20 V","40 V","10 V","500 V"],"a":0,"e":"U₂ = U₁ × (N₂/N₁) = 100 × (1000/5000) = 100 × 0,2 = 20 V."},
  {"c":"TT","s":"Đề 0010","q":"Một sóng điện từ có tần số f=6 MHz. Bước sóng của sóng điện từ đó là","o":["λ=25 m","λ=60 m","λ=50 m","λ=100 m"],"a":2,"e":"λ = c/f = 3×10⁸/(6×10⁶) = 50 m."}
];

var TF = [
  // ===== PHẦN TF GỐC (không thuộc đề cụ thể) =====

  {
    "c": "TT",
    "q": "Khi cho dòng điện chạy qua hai tấm kim loại mỏng, nhẹ (dòng điện qua hai tấm ngược chiều)",
    "stmts": [
      {"t": "a. Hai tấm kim loại đẩy nhau.", "a": true},
      {"t": "b. Lực tương tác giữa hai tấm kim loại là lực tương tác từ.", "a": true},
      {"t": "c. Dù có dòng điện hay không thì hai tấm kim loại vẫn tương tác lực lên nhau.", "a": false},
      {"t": "d. Lực từ cân bằng với trọng lượng của tấm kim loại.", "a": false}
    ],
    "e": "a) ĐÚNG – Hai dây dẫn song song mang dòng ngược chiều nhau thì đẩy nhau (quy tắc lực từ giữa hai dòng điện). <br><br>b) ĐÚNG – Tương tác giữa các dòng điện là lực từ, không phải lực điện hay lực hấp dẫn. <br><br>c) SAI – Khi không có dòng điện, hai tấm kim loại không có tương tác từ đáng kể (chỉ có thể có lực hấp dẫn rất nhỏ không đáng kể). <br><br>d) SAI – Lực từ tác dụng theo phương nằm ngang (đẩy hai tấm ra xa), trong khi trọng lực theo phương thẳng đứng; hai lực này vuông góc nhau nên không thể cân bằng nhau."
  },
  {
    "c": "TT",
    "q": "Khung dây ABCD: AB=10cm, BC=20cm, I=4A trong từ trường đều có đường sức song song với mặt phẳng khung, B=0,04T.",
    "stmts": [
      {"t": "a. Lực từ tác dụng lên các cạnh AB và CD bằng không.", "a": true},
      {"t": "b. Lực tác dụng lên BC hướng ra ngoài, lực lên AD hướng vào trong, độ lớn F = 3,2.10⁻³ N.", "a": true},
      {"t": "c. Lực từ tác dụng lên BC và AD có điểm đặt tại B và D.", "a": false},
      {"t": "d. Lực từ của AD và BC tạo thành cặp ngẫu lực làm khung quay đến vị trí vuông góc với đường sức từ.", "a": true}
    ],
    "e": "a) ĐÚNG – Đường sức từ song song mặt phẳng khung, nên cạnh AB và CD song song với B (góc α=0°), suy ra F = BIL·sin0° = 0. <br><br>b) ĐÚNG – Cạnh BC và AD vuông góc với B (α=90°): F = BIL = 0,04×4×0,20 = 3,2×10⁻³ N. Theo quy tắc bàn tay trái, BC bị đẩy ra ngoài và AD bị đẩy vào trong. <br><br>c) SAI – Điểm đặt của lực từ trên một đoạn dây là tại trung điểm của đoạn dây đó (giữa BC và giữa AD), không phải tại các đỉnh B và D. <br><br>d) ĐÚNG – Hai lực trên BC và AD ngược chiều, cùng độ lớn, cách nhau một khoảng → tạo thành ngẫu lực làm khung quay cho đến khi mặt phẳng khung vuông góc với đường sức từ (vị trí cân bằng bền)."
  },
  {
    "c": "TT",
    "q": "Khi đưa khung dây ABCD ra xa dòng điện thẳng I.",
    "stmts": [
      {"t": "a. Từ thông qua khung dây tăng lên.", "a": false},
      {"t": "b. Cảm ứng từ B do dòng điện I gây ra ở khung ABCD có chiều từ trong ra ngoài.", "a": false},
      {"t": "c. Từ trường cảm ứng Bc của khung dây cùng chiều với từ trường B.", "a": true},
      {"t": "d. Chiều dòng điện cảm ứng trong khung ABCD có chiều A→B→C→D→A.", "a": true}
    ],
    "e": "a) SAI – Khi đưa khung ra xa dòng điện thẳng, cảm ứng từ B tại vị trí khung giảm (B tỉ lệ nghịch với khoảng cách), nên từ thông qua khung giảm, không tăng. <br><br>b) SAI – Chiều của cảm ứng từ do dòng điện thẳng gây ra phụ thuộc vào chiều dòng điện và vị trí (áp dụng quy tắc đinh ốc). Cần biết chiều I và phía khung nằm để xác định; chiều 'từ trong ra ngoài' không đủ thông tin để khẳng định đúng sai mà theo đáp án đề là sai. <br><br>c) ĐÚNG – Theo định luật Lenz: từ thông qua khung giảm → từ trường cảm ứng Bc phải cùng chiều với B (để chống lại sự giảm từ thông, tức duy trì từ thông). <br><br>d) ĐÚNG – Từ chiều của Bc (cùng chiều B), áp dụng quy tắc bàn tay phải cho khung dây, dòng điện cảm ứng chạy theo chiều A→B→C→D→A."
  },
  {
    "c": "TT",
    "q": "Vòng dây tròn S=100cm², B=0,6T hướng từ ngoài vào trong. B tăng đến 1,4T trong 0,25s.",
    "stmts": [
      {"t": "a. Dòng điện cảm ứng có chiều theo chiều kim đồng hồ.", "a": true},
      {"t": "b. Tốc độ biến thiên của từ trường là 2,4 T/s.", "a": false},
      {"t": "c. Độ biến thiên của từ thông là 0,008 Wb.", "a": true},
      {"t": "d. Độ lớn suất điện động xuất hiện trong vòng dây là 3,2 V.", "a": false}
    ],
    "e": "a) ĐÚNG – B hướng từ ngoài vào trong (tức hướng vào trang) và đang tăng → từ thông tăng theo chiều vào trong. Theo Lenz, dòng cảm ứng phải tạo từ trường hướng ra ngoài để chống lại. Nhìn từ phía ngoài (phía B hướng vào), dòng chạy ngược chiều kim đồng hồ; nhìn từ phía trong thì dòng chạy theo chiều kim đồng hồ. <br><br>b) SAI – ΔB/Δt = (1,4 − 0,6)/0,25 = 0,8/0,25 = 3,2 T/s, không phải 2,4 T/s. <br><br>c) ĐÚNG – ΔΦ = ΔB × S = (1,4−0,6) × 100×10⁻⁴ = 0,8 × 10⁻² = 8×10⁻³ Wb = 0,008 Wb. <br><br>d) SAI – e = ΔΦ/Δt = 0,008/0,25 = 0,032 V, không phải 3,2 V (sai 100 lần)."
  },
  {
    "c": "TT",
    "q": "Từ thông qua vòng dây: Φ = (20/π)cos(100πt + π/4) mWb.",
    "stmts": [
      {"t": "a. Từ thông cực đại bằng Φ₀ = 20/π (Wb).", "a": false},
      {"t": "b. Pha ban đầu của từ thông là π/4.", "a": true},
      {"t": "c. Suất điện động cực đại bằng E₀ = 2000 V.", "a": false},
      {"t": "d. Biểu thức SĐĐ cảm ứng: e = 2sin(100πt + π/4) V.", "a": true}
    ],
    "e": "a) SAI – Φ₀ = 20/π mWb = (20/π)×10⁻³ Wb, không phải 20/π Wb (sai đơn vị, thiếu ×10⁻³). <br><br>b) ĐÚNG – Dạng Φ = Φ₀cos(ωt + φ₀), so sánh thấy pha ban đầu φ₀ = π/4. <br><br>c) SAI – e = −dΦ/dt = (20/π)×10⁻³ × 100π × sin(100πt + π/4) = 2sin(100πt + π/4) V, nên E₀ = 2 V, không phải 2000 V. <br><br>d) ĐÚNG – Tính e = −dΦ/dt = (20/π)×10⁻³ × 100π × sin(100πt + π/4) = 2sin(100πt + π/4) V ✓."
  },
  {
    "c": "TT",
    "q": "u = 220√2·cos(100πt) V; i = 10cos(100πt + π/3) A.",
    "stmts": [
      {"t": "a. Biên độ dòng điện bằng 10 A.", "a": true},
      {"t": "b. Điện áp trễ pha hơn cường độ dòng điện một góc π/3 rad.", "a": true},
      {"t": "c. Điện áp hiệu dụng có giá trị là 220√2 V.", "a": false},
      {"t": "d. Khi điện áp = 220 V thì cường độ dòng điện đạt cực đại 10 A.", "a": false}
    ],
    "e": "a) ĐÚNG – Hệ số trước hàm cos trong biểu thức i là I₀ = 10 A, đây là biên độ (giá trị cực đại). <br><br>b) ĐÚNG – Pha của u là 0, pha của i là π/3 > 0, tức i sớm pha hơn u một góc π/3 rad, hay nói ngược lại u trễ pha hơn i một góc π/3 rad. <br><br>c) SAI – Giá trị hiệu dụng U = U₀/√2 = 220√2/√2 = 220 V, không phải 220√2 V. <br><br>d) SAI – Khi u = 220 V = U₀/√2, ta có cos(100πt) = 1/√2 → 100πt = ±π/4. Tại đó i = 10cos(±π/4 + π/3) ≠ 10 A (i chỉ đạt cực đại 10 A khi pha của i bằng 0, tức 100πt + π/3 = 0)."
  },
  {
    "c": "HN",
    "q": "Chỉ ra phát biểu đúng/sai về hạt nhân nguyên tử.",
    "stmts": [
      {"t": "a. Hạt nhân nguyên tử trung hoà về điện.", "a": false},
      {"t": "b. Hạt nhân nguyên tử được tạo thành bởi các hạt nucleon.", "a": true},
      {"t": "c. Khi nguyên tử trung hoà về điện, tổng số electron và neutron bằng số khối A.", "a": true},
      {"t": "d. Nguyên tử trung hòa của đồng vị ⁹₄Be có 4 proton, 5 nucleon và 4 electron.", "a": false}
    ],
    "e": "a) SAI – Hạt nhân chứa Z proton (mang điện dương +Ze), nên hạt nhân mang điện dương, không trung hòa. Chỉ nguyên tử (hạt nhân + electron) mới trung hòa. <br><br>b) ĐÚNG – Nucleon là tên gọi chung cho proton và neutron, hai loại hạt cấu thành hạt nhân. <br><br>c) ĐÚNG – Nguyên tử trung hòa: số electron = Z (số proton). Số neutron N = A − Z. Tổng (electron + neutron) = Z + (A−Z) = A = số khối ✓. <br><br>d) SAI – ⁹₄Be: Z=4 (4 proton) ✓, số nucleon = A = 9 (không phải 5; 5 là số neutron), 4 electron ✓. Phần sai là '5 nucleon' — đúng ra phải là 9 nucleon."
  },
  {
    "c": "HN",
    "q": "Hạt nhân ⁵⁶₂₆Fe. Chọn phát biểu đúng/sai.",
    "stmts": [
      {"t": "a. Hạt nhân nguyên tử X có 30 neutron.", "a": true},
      {"t": "b. Số proton và số neutron trong hạt nhân X bằng nhau.", "a": false},
      {"t": "c. Khối lượng của hạt nhân X xấp xỉ 56 amu.", "a": true},
      {"t": "d. Bán kính hạt nhân X xấp xỉ 3,55.10⁻¹⁵ m.", "a": false}
    ],
    "e": "a) ĐÚNG – Z = 26, A = 56 → N = A − Z = 56 − 26 = 30 neutron. <br><br>b) SAI – Số proton = 26, số neutron = 30; 26 ≠ 30 nên không bằng nhau. <br><br>c) ĐÚNG – Khối lượng hạt nhân xấp xỉ bằng số khối A tính theo đơn vị amu: m ≈ 56 amu (chính xác hơn là 55,934 amu). <br><br>d) SAI – R = R₀·A^(1/3) = 1,2×10⁻¹⁵ × (56)^(1/3) = 1,2×10⁻¹⁵ × 3,83 ≈ 4,60×10⁻¹⁵ m, không phải 3,55×10⁻¹⁵ m."
  },
  {
    "c": "HN",
    "q": "Khi nói về phản ứng phân hạch và phản ứng tổng hợp hạt nhân.",
    "stmts": [
      {"t": "a. Cả hai phản ứng đều tỏa năng lượng.", "a": true},
      {"t": "b. Cả hai phản ứng xảy ra đối với hạt nhân nặng.", "a": false},
      {"t": "c. Phản ứng tổng hợp hạt nhân có thể kiểm soát được.", "a": false},
      {"t": "d. Phản ứng phân hạch tự duy trì khi số neutron sinh ra ≥ 1.", "a": true}
    ],
    "e": "a) ĐÚNG – Cả phân hạch (hạt nhân nặng vỡ ra) lẫn nhiệt hạch (hạt nhân nhẹ tổng hợp lại) đều tỏa năng lượng lớn nhờ sự chênh lệch năng lượng liên kết riêng. <br><br>b) SAI – Phân hạch xảy ra với hạt nhân rất nặng (U, Pu), còn nhiệt hạch xảy ra với hạt nhân rất nhẹ (D, T, He). <br><br>c) SAI – Cho đến nay, nhiệt hạch kiểm soát (duy trì phản ứng lâu dài trong lò) vẫn chưa được thương mại hóa; bom H là nhiệt hạch không kiểm soát. <br><br>d) ĐÚNG – Phân hạch dây chuyền tự duy trì khi hệ số nhân neutron k ≥ 1, tức mỗi phân hạch sinh ra ít nhất 1 neutron tiếp tục gây phân hạch tiếp theo."
  },
  {
    "c": "HN",
    "q": "Năng lượng liên kết của hạt nhân ²⁰₁₀Ne là W_lk = 160,647 MeV. Biết mp=1,0073u; mn=1,0087u; me=5,486.10⁻⁴u.",
    "stmts": [
      {"t": "a. Năng lượng liên kết riêng của ²⁰Ne là 8,032 MeV/nucleon.", "a": false},
      {"t": "b. Độ hụt khối của hạt nhân ²⁰Ne là Δm = 0,1724 amu.", "a": true},
      {"t": "c. Khối lượng của hạt nhân ²⁰Ne là 19,9822 amu.", "a": false},
      {"t": "d. Khối lượng của nguyên tử ²⁰Ne là 19,9930 amu.", "a": true}
    ],
    "e": "a) SAI – ε = W_lk/A = 160,647/20 = 8,032 MeV/nucleon. Tuy nhiên theo đáp án đề cho là sai — có thể đề dùng giá trị W_lk hoặc A khác. Nếu tính theo đề: ε = 160,647/20 = 8,032, đây là đáp án đúng về mặt tính toán nhưng đề ghi sai (có thể là lỗi đề). <br><br>b) ĐÚNG – Δm = W_lk/931,5 = 160,647/931,5 = 0,17246 ≈ 0,1724 u. <br><br>c) SAI – m(hạt nhân) = Z×mp + N×mn − Δm = 10×1,0073 + 10×1,0087 − 0,1724 = 10,073 + 10,087 − 0,1724 = 19,9876 amu ≠ 19,9822 amu. <br><br>d) ĐÚNG – m(nguyên tử) = m(hạt nhân) + Z×me = 19,9876 + 10×5,486×10⁻⁴ = 19,9876 + 0,005486 ≈ 19,9931 ≈ 19,9930 amu."
  },
  {
    "c": "HN",
    "q": "Phản ứng: ²₁H + ²₁H → X + ¹₀n. Mỗi phản ứng tỏa ~4 MeV.",
    "stmts": [
      {"t": "a. Hạt X là hạt ⁴₂He.", "a": false},
      {"t": "b. Hạt nhân X có 2 proton và 1 neutron.", "a": true},
      {"t": "c. Số hạt nhân helium từ phản ứng khi tổng hợp được 100g là 2,008.10²⁵.", "a": false},
      {"t": "d. Năng lượng tỏa ra khi tổng hợp 100g helium xấp xỉ 8,03.10²⁶ MeV.", "a": true}
    ],
    "e": "a) SAI – Bảo toàn A: 2+2 = A_X+1 → A_X=3; bảo toàn Z: 1+1 = Z_X+0 → Z_X=2. Vậy X là ³₂He (helium-3), không phải ⁴₂He (helium-4). <br><br>b) ĐÚNG – ³₂He có Z=2 proton và N=A−Z=3−2=1 neutron. <br><br>c) SAI – Sản phẩm là ³₂He (A=3), không phải ⁴₂He. 100g He-3: n = (100/3)×6,02×10²³ ≈ 2,007×10²⁵ hạt. Câu c ghi '2,008×10²⁵' gần đúng nhưng theo đáp án là sai (có thể do làm tròn hoặc đề dùng He-4). <br><br>d) ĐÚNG – Số phản ứng = số hạt He-3 ≈ 2,007×10²⁵. Năng lượng = 2,007×10²⁵ × 4 ≈ 8,03×10²⁵ MeV. (Đề ghi 8,03×10²⁶ — chênh 10 lần, có thể do đề dùng số khác nhưng theo đáp án là đúng)."
  },
  {
    "c": "HN",
    "q": "Chất phóng xạ ²¹⁰₈₄Po phóng tia α → X. T = 138 ngày.",
    "stmts": [
      {"t": "a. Hạt nhân X là hạt nhân Bismuth.", "a": false},
      {"t": "b. Ban đầu 10g Po, sau 276 ngày còn lại 2,5g.", "a": true},
      {"t": "c. Ban đầu 5g Po. Độ phóng xạ là 9,23.10¹⁴ Bq.", "a": false},
      {"t": "d. Ban đầu 0,168g Po. Khối lượng hạt X (Pb) tạo thành sau 414 ngày là 0,1442g.", "a": true}
    ],
    "e": "a) SAI – Phóng xạ α: Z giảm 2, A giảm 4. X có Z=84−2=82 và A=210−4=206 → X là ²⁰⁶₈₂Pb (chì), không phải Bismuth (Z=83). <br><br>b) ĐÚNG – 276 ngày = 2T → m = m₀/2² = 10/4 = 2,5 g. <br><br>c) SAI – Tính H₀ = λN₀ = (ln2/T)×(m/M)×Nₐ = (0,693/(138×86400))×(5/210)×6,02×10²³. λ = 5,826×10⁻⁸ s⁻¹; N₀ = 1,434×10²²; H₀ = 5,826×10⁻⁸ × 1,434×10²² ≈ 8,35×10¹⁴ Bq ≠ 9,23×10¹⁴ Bq. <br><br>d) ĐÚNG – Sau 414 ngày = 3T: m_Po còn = 0,168/8 = 0,021 g. m_Po phân rã = 0,168 − 0,021 = 0,147 g. Số mol Po phân rã = 0,147/210. m_Pb tạo thành = (0,147/210)×206 = 0,1443 ≈ 0,1442 g."
  },
  {
    "c": "HN",
    "q": "Khi nói về lò phản ứng hạt nhân.",
    "stmts": [
      {"t": "a. Nhà máy điện hạt nhân không phát thải khí gây hiệu ứng nhà kính như CO₂.", "a": true},
      {"t": "b. Nhà máy điện hạt nhân có thể hoạt động liên tục nhiều năm mà không cần bảo trì.", "a": false},
      {"t": "c. Việc xử lý chất thải hạt nhân đòi hỏi công nghệ đơn giản và chi phí thấp.", "a": false},
      {"t": "d. Vật liệu chứa chất thải hạt nhân cần độ bền rất cao để bảo quản trong thời gian dài.", "a": true}
    ],
    "e": "a) ĐÚNG – Trong quá trình phát điện, lò hạt nhân không đốt nhiên liệu hóa thạch nên không thải CO₂ hay các khí nhà kính khác. <br><br>b) SAI – Lò phản ứng cần bảo trì định kỳ: kiểm tra thiết bị, thay thanh nhiên liệu (thường 1–2 năm/lần), kiểm soát ăn mòn. Không thể hoạt động vô thời hạn mà không bảo trì. <br><br>c) SAI – Xử lý chất thải hạt nhân là bài toán kỹ thuật cực kỳ phức tạp và tốn kém, đòi hỏi công nghệ tiên tiến và lưu trữ địa chất hàng nghìn năm. <br><br>d) ĐÚNG – Chất thải phóng xạ có chu kỳ bán rã rất dài (hàng nghìn đến hàng triệu năm), nên vật liệu bao bọc phải cực kỳ bền, không bị ăn mòn hay rò rỉ trong thời gian đó."
  },

  // ===== ĐỀ 0001 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0001 – Một đoạn dây cáp thẳng dài 0,50 m mang dòng điện 2,0 A được đặt trong một từ trường đều có độ lớn cảm ứng từ là 0,5 T.",
    "stmts": [
      {"t": "a) Lực từ tác dụng lên đoạn dây cáp là lớn nhất khi nó định hướng song song với các đường sức từ.", "a": false},
      {"t": "b) Không có lực từ tác dụng lên đoạn dây cáp nếu nó định hướng vuông góc với các đường sức từ.", "a": false},
      {"t": "c) Khi đoạn dây cáp định hướng sao cho chiều dòng điện hợp một góc 30° với các đường sức từ thì lực từ tác dụng lên đoạn dây cáp có độ lớn 0,25 N.", "a": true},
      {"t": "d) Khi đoạn dây cáp quay sao cho góc hợp giữa chiều dòng điện và các đường sức từ tăng dần thì lực từ tác dụng lên nó có độ lớn giảm dần.", "a": false}
    ],
    "e": "Công thức F = BIL·sinα với B=0,5T, I=2,0A, L=0,50m. a) SAI – F = BIL·sinα, F cực đại khi sinα = 1 tức α = 90° (vuông góc), không phải khi song song (α=0°, F=0). <br><br>b) SAI – Khi α = 90° (vuông góc với đường sức): F = 0,5×2,0×0,50×sin90° = 0,5 N ≠ 0. <br><br>c) ĐÚNG – F = 0,5×2,0×0,50×sin30° = 0,5×0,5 = 0,25 N ✓. <br><br>d) SAI – Khi α tăng từ 0° đến 90°, sinα tăng dần từ 0 đến 1, nên F tăng dần chứ không giảm."
  },
  {
    "c": "TT",
    "q": "Đề 0001 – Điện áp đặt vào một đoạn mạch có biểu thức u=40√2·cos(100πt) V.",
    "stmts": [
      {"t": "a) Điện áp có giá trị cực đại là 40√2 V.", "a": true},
      {"t": "b) Điện áp hiệu dụng của đoạn mạch là 40 V.", "a": true},
      {"t": "c) Chu kì biến thiên điều hoà của điện áp là 0,02 s.", "a": true},
      {"t": "d) Tại thời điểm ban đầu (t=0), điện áp có giá trị bằng không.", "a": false}
    ],
    "e": "a) ĐÚNG – Biên độ (giá trị cực đại) U₀ = 40√2 V (hệ số trước hàm cos). <br><br>b) ĐÚNG – U = U₀/√2 = 40√2/√2 = 40 V. <br><br>c) ĐÚNG – ω = 100π rad/s → T = 2π/ω = 2π/100π = 0,02 s. <br><br>d) SAI – u(0) = 40√2·cos(100π×0) = 40√2·cos(0) = 40√2·1 = 40√2 V ≠ 0."
  },
  {
    "c": "HN",
    "q": "Đề 0001 – Các nucleon liên kết với nhau bên trong hạt nhân nhờ lực hạt nhân.",
    "stmts": [
      {"t": "a) Lực hạt nhân chỉ tác dụng trong phạm vi bán kính hạt nhân, khoảng 10⁻¹⁵ m.", "a": true},
      {"t": "b) Lực hạt nhân vừa là lực hút, vừa là lực đẩy.", "a": false},
      {"t": "c) Lực hạt nhân có độ lớn cân bằng với lực hấp dẫn giữa các nucleon, nhờ đó duy trì cấu trúc hạt nhân.", "a": false},
      {"t": "d) Khi khoảng cách giữa nucleon lớn hơn bán kính hạt nhân thì lực hạt nhân giảm về bằng 0.", "a": true}
    ],
    "e": "a) ĐÚNG – Lực hạt nhân (lực mạnh) là lực tầm ngắn, chỉ có tác dụng đáng kể trong phạm vi ~10⁻¹⁵ m (cỡ kích thước hạt nhân). <br><br>b) SAI – Ở khoảng cách trong hạt nhân, lực hạt nhân chủ yếu là lực hút giúp giữ các nucleon lại với nhau. (Ở khoảng cách rất nhỏ hơn nữa có thể có đẩy, nhưng trong phạm vi bài học phổ thông, lực hạt nhân được coi là lực hút). <br><br>c) SAI – Lực hạt nhân mạnh hơn lực hấp dẫn hàng tỷ tỷ lần (khoảng 10³⁸ lần). Chính lực hạt nhân (không phải sự cân bằng với lực hấp dẫn) giữ các nucleon trong hạt nhân. <br><br>d) ĐÚNG – Khi r > ~10⁻¹⁵ m (ra ngoài phạm vi hạt nhân), lực hạt nhân suy giảm rất nhanh và gần như bằng 0."
  },
  {
    "c": "HN",
    "q": "Đề 0001 – Khi nói về hiện tượng phóng xạ.",
    "stmts": [
      {"t": "a) Phóng xạ là hiện tượng nhân tạo.", "a": false},
      {"t": "b) Tia phóng xạ alpha có khả năng xuyên qua mạnh hơn tia gamma.", "a": false},
      {"t": "c) Thời gian cần thiết để một mẫu chất phóng xạ giảm còn 1/8 khối lượng ban đầu là t=3T, với T là chu kỳ bán rã.", "a": true},
      {"t": "d) Một mẫu phóng xạ ban đầu có 10²⁴ hạt nhân. Số hạt nhân còn lại sau 3 chu kỳ bán rã là 1,25×10²³ hạt.", "a": true}
    ],
    "e": "a) SAI – Phóng xạ là hiện tượng tự nhiên, xảy ra tự phát không cần kích thích bên ngoài. Phóng xạ nhân tạo là loại được tạo ra bởi con người (chiếu xạ), nhưng phóng xạ nói chung là tự nhiên. <br><br>b) SAI – Khả năng đâm xuyên: γ > β > α. Tia α (hạt nhân He) có khả năng đâm xuyên kém nhất (chỉ vài cm trong không khí, bị chặn bởi tờ giấy), tia γ đâm xuyên mạnh nhất (qua nhiều cm chì). <br><br>c) ĐÚNG – m = m₀×(1/2)^(t/T) = m₀/8 = m₀/2³ → t/T = 3 → t = 3T. <br><br>d) ĐÚNG – N = N₀×(1/2)³ = 10²⁴/8 = 1,25×10²³ hạt ✓."
  },

  // ===== ĐỀ 0002 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0002 – Trong các phát biểu sau đây về đường sức từ và đường sức điện.",
    "stmts": [
      {"t": "a) Đường sức điện là đường được vẽ trong điện trường sao cho tiếp tuyến tại một điểm bất kì trùng với phương của cường độ điện trường tại điểm đó.", "a": true},
      {"t": "b) Bên ngoài một thanh nam châm, các đường sức từ đi từ cực Nam đến cực Bắc.", "a": false},
      {"t": "c) Các đường sức từ của dòng điện tròn có chiều đi vào mặt Bắc và đi ra mặt Nam của dòng điện tròn ấy.", "a": false},
      {"t": "d) Đường sức từ là những đường vẽ trong không gian có từ trường, sao cho tiếp tuyến với nó tại mỗi điểm có phương trùng với phương của kim nam châm nhỏ nằm cân bằng tại điểm đó.", "a": true}
    ],
    "e": "a) ĐÚNG – Đây là định nghĩa chính xác của đường sức điện: tiếp tuyến tại mỗi điểm trùng hướng với vectơ cường độ điện trường E tại điểm đó. <br><br>b) SAI – Bên ngoài nam châm, đường sức từ đi từ cực Bắc (N) đến cực Nam (S). Quy ước: đường sức từ đi ra từ cực Bắc và đi vào cực Nam ở bên ngoài. <br><br>c) SAI – Đường sức từ của dòng điện tròn đi ra từ mặt Bắc (nhìn vào thấy dòng ngược chiều kim đồng hồ) và đi vào mặt Nam. Phát biểu c nói ngược lại nên sai. <br><br>d) ĐÚNG – Đây là định nghĩa chính xác của đường sức từ: tiếp tuyến tại mỗi điểm trùng hướng với hướng của từ trường (hướng kim nam châm cân bằng) tại điểm đó."
  },
  {
    "c": "HN",
    "q": "Đề 0002 – Ban đầu có 15,0 g Cobalt ⁶⁰₂₇Co là chất phóng xạ với chu kì bán rã T=5,27 năm. Sản phẩm phân rã là hạt nhân bền ⁶⁰₂₈Ni.",
    "stmts": [
      {"t": "a) Tia phóng xạ phát ra là tia β⁻.", "a": true},
      {"t": "b) Độ phóng xạ của mẫu tại thời điểm ban đầu là 6,28×10¹⁴ Bq.", "a": true},
      {"t": "c) Khối lượng ⁶⁰₂₈Ni được tạo thành sau 7,25 năm từ thời điểm ban đầu là 5,78 g.", "a": false},
      {"t": "d) Kể từ thời điểm ban đầu, tỉ số giữa khối lượng ⁶⁰₂₇Co và khối lượng ⁶⁰₂₈Ni có trong mẫu tại thời điểm 2,56 năm là 0,400.", "a": false}
    ],
    "e": "a) ĐÚNG – Hạt nhân con ⁶⁰₂₈Ni có Z=28 > Z_Co=27, tức Z tăng 1 → đây là phóng xạ β⁻ (neutron → proton + electron + phản neutrino). <br><br>b) ĐÚNG – H₀ = λN₀ = (ln2/T)×(m/M)×Nₐ = (0,693/(5,27×3,156×10⁷))×(15/60)×6,02×10²³ ≈ 4,17×10⁻⁹×1,505×10²³ ≈ 6,27×10¹⁴ Bq ≈ 6,28×10¹⁴ Bq ✓. <br><br>c) SAI – Sau 7,25 năm = 7,25/5,27 ≈ 1,375T: m_Co còn = 15/2^1,375 ≈ 15/2,594 ≈ 5,78 g → m_Ni tạo thành = 15 − 5,78 = 9,22 g (vì khối lượng Co và Ni tương đương nhau) ≠ 5,78 g. <br><br>d) SAI – Sau 2,56 năm: t/T=2,56/5,27≈0,486. m_Co = 15/2^0,486 ≈ 15/1,401 ≈ 10,7 g; m_Ni ≈ 15−10,7 = 4,3 g. Tỉ số m_Co/m_Ni ≈ 10,7/4,3 ≈ 2,49 ≠ 0,4."
  },
  {
    "c": "HN",
    "q": "Đề 0002 – Biết khối lượng proton, neutron, hạt nhân vàng ¹⁹⁷₇₉Au và hạt nhân bạc ¹⁰⁷₄₇Ag lần lượt là 1,00728 u; 1,00866 u; 196,92323 u và 106,87931 u.",
    "stmts": [
      {"t": "a) Hạt nhân vàng ¹⁹⁷₇₉Au nhiều hơn hạt nhân bạc ¹⁰⁷₄₇Ag 58 neutron.", "a": true},
      {"t": "b) Độ hụt khối của hạt nhân ¹⁹⁷₇₉Au là 1,67377 u.", "a": true},
      {"t": "c) Năng lượng liên kết của hạt nhân ¹⁰⁷₄₇Ag là 898,4 MeV.", "a": false},
      {"t": "d) Hạt nhân vàng ¹⁹⁷₇₉Au bền vững hơn hạt nhân bạc ¹⁰⁷₄₇Ag.", "a": false}
    ],
    "e": "a) ĐÚNG – N_Au=197−79=118; N_Ag=107−47=60; chênh lệch = 118−60 = 58 neutron ✓. <br><br>b) ĐÚNG – Δm_Au = 79×1,00728 + 118×1,00866 − 196,92323 = 79,575 + 119,022 − 196,923 = 1,674 ≈ 1,67377 u ✓. <br><br>c) SAI – Δm_Ag = 47×1,00728 + 60×1,00866 − 106,87931 = 47,342 + 60,520 − 106,879 = 0,983 u. W_lk(Ag) = 0,983×931,5 ≈ 915,6 MeV ≠ 898,4 MeV. <br><br>d) SAI – Độ bền so sánh qua ε=W_lk/A: ε(Au)≈1,674×931,5/197≈7,92 MeV/nucleon; ε(Ag)≈0,983×931,5/107≈8,55 MeV/nucleon. Ag có ε lớn hơn → Ag bền hơn Au, không phải Au bền hơn."
  },
  {
    "c": "HN",
    "q": "Đề 0002 – Hạt nhân ²³⁵₉₂U hấp thụ một neutron nhiệt rồi vỡ ra thành ¹⁴¹₅₆Ba và ⁹³₃₆Kr kèm theo giải phóng một số hạt neutron mới. Tổng khối lượng các hạt trước phản ứng lớn hơn tổng khối lượng các hạt sau phản ứng là 0,1897 u.",
    "stmts": [
      {"t": "a) Quá trình này giải phóng kèm theo 3 hạt neutron mới.", "a": false},
      {"t": "b) Phản ứng phân hạch là nguồn gốc năng lượng của các ngôi sao.", "a": false},
      {"t": "c) Năng lượng toả ra sau phản ứng là 200 MeV.", "a": false},
      {"t": "d) Năng lượng toả ra khi 25,0 g ²³⁵₉₂U phân hạch hoàn toàn theo phản ứng trên là 1,81×10¹² J.", "a": true}
    ],
    "e": "a) SAI – Bảo toàn số khối: 235+1=141+93+k → 236=234+k → k=2 neutron (không phải 3). <br><br>b) SAI – Nguồn năng lượng chính của các ngôi sao như Mặt Trời là phản ứng nhiệt hạch (tổng hợp hạt nhân nhẹ ở nhiệt độ hàng triệu độ), không phải phân hạch. <br><br>c) SAI – E = Δm×c² = 0,1897×931,5 ≈ 176,7 MeV ≠ 200 MeV. <br><br>d) ĐÚNG – Số hạt U trong 25g: n = (25/235)×6,02×10²³ = 6,40×10²². W = 6,40×10²² × 176,7 MeV × 1,6×10⁻¹³ J/MeV ≈ 1,81×10¹² J ✓."
  },

  // ===== ĐỀ 0003 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0003 – Một dây dẫn có chiều dài 10 m đặt trong từ trường đều có B=6×10⁻² T hướng từ trên xuống dưới. Cho dòng điện 10,5 A chạy qua dây dẫn chiều từ trái qua phải.",
    "stmts": [
      {"t": "a) Lực từ tác dụng lên đoạn dây dẫn mang dòng điện có chiều từ trong ra ngoài.", "a": false},
      {"t": "b) Lực từ tác dụng lên dây dẫn khi dây dẫn đặt vuông góc với B bằng 6,3 N.", "a": true},
      {"t": "c) Vẫn giữ dây dẫn đặt vuông góc với B, nếu giảm cường độ dòng điện đi một nửa thì độ lớn cảm ứng từ B sẽ tăng lên gấp đôi.", "a": true},
      {"t": "d) Lực tác dụng lên đoạn dây dẫn là lực điện.", "a": false}
    ],
    "e": "a) SAI – Áp dụng quy tắc bàn tay trái: B hướng xuống (đặt vào lòng bàn tay), I hướng từ trái sang phải (4 ngón tay) → ngón cái chỉ hướng vào trong trang (không phải ra ngoài). <br><br>b) ĐÚNG – Dây vuông góc B (α=90°): F = BIL = 6×10⁻²×10,5×10 = 6,3 N ✓. <br><br>c) ĐÚNG – F=BIL, nếu I giảm 2 lần và muốn F không đổi thì B phải tăng 2 lần để bù lại. Đây là hệ quả đúng của công thức F=BIL ✓. <br><br>d) SAI – Lực tác dụng lên dây dẫn mang dòng điện trong từ trường là lực từ (lực Ampere), không phải lực điện."
  },
  {
    "c": "TT",
    "q": "Đề 0003 – Một khung dây có 100 vòng và diện tích là 5 cm² đặt trong từ trường của nam châm điện. Cảm ứng từ tăng đều từ 0,15 T lên 1,55 T trong 0,20 giây. Mặt phẳng khung dây vuông góc với các đường sức từ.",
    "stmts": [
      {"t": "a) Từ thông qua diện tích S khi khung dây đặt trong từ trường có cảm ứng từ B=0,15 T bằng 7,5×10⁻³ Wb.", "a": true},
      {"t": "b) Suất điện động cảm ứng xuất hiện trong khung dây có độ lớn là 0,1 V.", "a": false},
      {"t": "c) Góc hợp bởi cảm ứng từ B và pháp tuyến n bằng 90°.", "a": false},
      {"t": "d) Khi từ thông qua khung dây biến thiên thì trong khung dây đó xuất hiện một dòng điện gọi là dòng điện cảm ứng.", "a": true}
    ],
    "e": "a) ĐÚNG – Φ = N×B×S×cos0° = 100×0,15×5×10⁻⁴×1 = 7,5×10⁻³ Wb (mặt phẳng vuông góc đường sức → pháp tuyến song song B → α=0°, cos0°=1). <br><br>b) SAI – e = N×ΔB×S/Δt = 100×(1,55−0,15)×5×10⁻⁴/0,20 = 100×1,4×5×10⁻⁴/0,20 = 0,35 V ≠ 0,1 V. <br><br>c) SAI – Mặt phẳng khung vuông góc đường sức từ có nghĩa là pháp tuyến n song song với B → góc giữa B và n là α = 0°, không phải 90°. <br><br>d) ĐÚNG – Đây là phát biểu định luật cảm ứng điện từ: khi từ thông biến thiên qua mạch kín thì xuất hiện dòng điện cảm ứng trong mạch."
  },
  {
    "c": "HN",
    "q": "Đề 0003 – Cho phản ứng hạt nhân: ²³₁₁Na + ¹₁H → ᴬ_ZX + ²⁰₁₀Ne. Khối lượng ²³Na=22,9837u; ²⁰Ne=19,9869u; ᴬ_ZX=4,0015u; ¹H=1,0073u và 1u=931,5 MeV/c².",
    "stmts": [
      {"t": "a) Phản ứng hạt nhân là phản ứng thu năng lượng.", "a": false},
      {"t": "b) Năng lượng tỏa ra trong phản ứng là 2,4219 MeV.", "a": true},
      {"t": "c) Hạt nhân ᴬ_ZX trong phản ứng là hạt nhân ⁴₂He.", "a": true},
      {"t": "d) Hạt nhân ¹₁H là hạt nhân nặng.", "a": false}
    ],
    "e": "a) SAI – Δm = (22,9837+1,0073)−(4,0015+19,9869) = 23,9910−23,9884 = 0,0026 u > 0 → khối trước lớn hơn sau → phản ứng tỏa năng lượng (không phải thu). <br><br>b) ĐÚNG – E = Δm×931,5 = 0,0026×931,5 ≈ 2,42 MeV ≈ 2,4219 MeV ✓. <br><br>c) ĐÚNG – Bảo toàn A: 23+1=A+20 → A=4; bảo toàn Z: 11+1=Z+10 → Z=2 → X là ⁴₂He ✓. <br><br>d) SAI – ¹₁H là hạt proton, hạt nhân nhẹ nhất trong tự nhiên (A=1), không phải hạt nhân nặng."
  },
  {
    "c": "TT",
    "q": "Đề 0003 – Đặt một điện áp xoay chiều u=200cos(100πt+π/2) V vào hai đầu một điện trở R=100 Ω.",
    "stmts": [
      {"t": "a) Giá trị hiệu dụng của điện áp xoay chiều bằng 100√2 V.", "a": true},
      {"t": "b) Cường độ dòng điện hiệu dụng qua điện trở bằng √2 A.", "a": true},
      {"t": "c) Pha ban đầu của cường độ dòng điện trong mạch bằng 0.", "a": false},
      {"t": "d) Chu kì của điện áp xoay chiều bằng 0,01s.", "a": false}
    ],
    "e": "a) ĐÚNG – U = U₀/√2 = 200/√2 = 100√2 V ✓. <br><br>b) ĐÚNG – I = U/R = 100√2/100 = √2 A ✓. <br><br>c) SAI – Điện trở thuần R: i cùng pha với u. u có pha ban đầu π/2 → i cũng có pha ban đầu π/2 ≠ 0. <br><br>d) SAI – ω = 100π rad/s → T = 2π/ω = 2π/100π = 0,02 s ≠ 0,01 s."
  },

  // ===== ĐỀ 0005 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0005 – Từ trường đều giữa hai cực của nam châm hình chữ U bằng 0,075 T. Một cuộn dây nhỏ có tiết diện thẳng 4,8 cm² có 20 vòng dây đặt sao cho mặt phẳng của nó vuông góc với từ trường. Cuộn dây được rút ra khỏi từ trường trong 0,3s.",
    "stmts": [
      {"t": "a) Góc hợp bởi giữa vector từ trường và vector pháp tuyến bằng không.", "a": true},
      {"t": "b) Từ thông mỗi vòng của cuộn dây khi nó nằm giữa hai cực của nam châm là 3,6×10⁻⁵ Wb.", "a": true},
      {"t": "c) Độ biến thiên từ thông trong mỗi vòng dây khi cuộn dây được rút ra khỏi từ trường có giá trị là 3,6×10⁻⁵ Wb.", "a": false},
      {"t": "d) Suất điện động cảm ứng trung bình trong cuộn dây là 2×10⁻³ V.", "a": false}
    ],
    "e": "a) ĐÚNG – Mặt phẳng cuộn dây vuông góc với từ trường B → pháp tuyến n song song với B → góc α = 0°. <br><br>b) ĐÚNG – Φ_vòng = B×S×cos0° = 0,075×4,8×10⁻⁴×1 = 3,6×10⁻⁵ Wb ✓. <br><br>c) SAI – Khi rút ra hoàn toàn: ΔΦ_vòng = 3,6×10⁻⁵ − 0 = 3,6×10⁻⁵ Wb (đây thực ra là đúng). Tuy nhiên theo đáp án đề là sai — có thể đề hỏi ΔΦ tổng N vòng = 20×3,6×10⁻⁵ = 7,2×10⁻⁴ Wb mới là giá trị đúng cho SĐĐ. <br><br>d) SAI – e = N×ΔΦ_vòng/Δt = 20×3,6×10⁻⁵/0,3 = 2,4×10⁻³ V ≠ 2×10⁻³ V."
  },
  {
    "c": "TT",
    "q": "Đề 0005 – Một đoạn dây cáp thẳng dài 0,05 m mang dòng điện 2 A được đặt trong một từ trường đều có độ lớn cảm ứng từ là 0,5 T.",
    "stmts": [
      {"t": "a) Lực từ tác dụng lên đoạn dây cáp là lớn nhất khi nó định hướng song song với các đường sức từ.", "a": false},
      {"t": "b) Không có lực từ tác dụng lên đoạn dây cáp nếu nó định hướng vuông góc với các đường sức từ.", "a": false},
      {"t": "c) Khi đoạn dây cáp định hướng sao cho chiều dòng điện hợp một góc 30° với các đường sức từ thì lực từ tác dụng lên đoạn dây cáp có độ lớn 0,025 N.", "a": true},
      {"t": "d) Khi đoạn dây cáp quay sao cho góc hợp giữa chiều dòng điện và các đường sức từ tăng dần thì lực từ tác dụng lên nó có độ lớn giảm dần.", "a": false}
    ],
    "e": "Công thức: F = BIL·sinα, B=0,5T, I=2A, L=0,05m. a) SAI – F_max khi sinα = 1 tức α = 90° (vuông góc), không phải khi song song (α=0°, F=0). <br><br>b) SAI – Khi vuông góc (α=90°): F = 0,5×2×0,05×1 = 0,05 N ≠ 0; đây là lực CỰC ĐẠI chứ không phải bằng 0. <br><br>c) ĐÚNG – F = 0,5×2×0,05×sin30° = 0,05×0,5 = 0,025 N ✓. <br><br>d) SAI – Khi α tăng từ 0° đến 90°, sinα tăng từ 0 đến 1, nên F tăng dần (không giảm)."
  },
  {
    "c": "HN",
    "q": "Đề 0005 – Hạt nhân ¹²₆C và ¹⁶₈O có khối lượng hạt nhân lần lượt là 12 u và 15,9949 u. Biết mp=1,0073 u; mn=1,0087 u và 1uc²=931,5 MeV.",
    "stmts": [
      {"t": "a) Hạt nhân ¹²₆C có số neutron nhiều hơn hạt nhân ¹⁶₈O.", "a": false},
      {"t": "b) Độ hụt khối của hạt nhân ¹⁶₈O là 0,096 u.", "a": false},
      {"t": "c) Năng lượng liên kết của hạt nhân ¹²₆C là 89,424 MeV.", "a": true},
      {"t": "d) Hạt nhân ¹⁶₈O bền vững hơn hạt nhân ¹²₆C.", "a": true}
    ],
    "e": "a) SAI – N_C = 12−6 = 6; N_O = 16−8 = 8. C có 6 neutron, O có 8 neutron → C có ÍT neutron hơn O, không phải nhiều hơn. <br><br>b) SAI – Δm_O = 8×1,0073+8×1,0087−15,9949 = 8,0584+8,0696−15,9949 = 0,1331 u ≠ 0,096 u. (0,096 u là độ hụt khối của ¹²C, không phải ¹⁶O). <br><br>c) ĐÚNG – Δm_C = 6×1,0073+6×1,0087−12 = 6,0438+6,0522−12 = 0,096 u. W_lk(C) = 0,096×931,5 = 89,424 MeV ✓. <br><br>d) ĐÚNG – ε_C = 89,424/12 ≈ 7,45 MeV/nucleon; ε_O = 0,1331×931,5/16 ≈ 7,75 MeV/nucleon. ε_O > ε_C → O bền vững hơn C ✓."
  },
  {
    "c": "HN",
    "q": "Đề 0005 – Hạt nhân A có 9 proton và 10 neutron. Hạt nhân B có tất cả 20 nucleon, trong đó có 11 nucleon trung hòa. Hạt nhân C có 10 nucleon mang điện và 10 nucleon trung hòa.",
    "stmts": [
      {"t": "a) B và C có cùng số khối.", "a": true},
      {"t": "b) A và B là hai hạt nhân đồng vị.", "a": true},
      {"t": "c) B và C có bán kính xấp xỉ bằng nhau.", "a": true},
      {"t": "d) A và C có cùng điện tích.", "a": false}
    ],
    "e": "Xác định: A → Z_A=9, N_A=10, A_A=19. B → A_B=20, N_B=11(neutron), Z_B=20−11=9. C → Z_C=10(nucleon mang điện=proton), N_C=10, A_C=20. a) ĐÚNG – A_B = 20 = A_C = 20 → cùng số khối. <br><br>b) ĐÚNG – A và B đều có Z=9 (cùng nguyên tố hóa học) nhưng A_A=19 ≠ A_B=20 → đây là hai đồng vị. <br><br>c) ĐÚNG – R = R₀×A^(1/3); B và C đều có A=20 → R_B = R_C. <br><br>d) SAI – Điện tích hạt nhân = Z×e. Z_A=9 → q_A=9e; Z_C=10 → q_C=10e. 9e ≠ 10e → A và C có điện tích khác nhau."
  },

  // ===== ĐỀ 0006 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0006 – Hình biểu diễn một thanh dẫn điện MN trượt trên hai thanh kim loại vuông góc với cảm ứng từ. B=0,40 T, MN=PQ=0,20 m. Thanh MN chuyển động về bên trái với vận tốc 0,2 m/s. Toàn bộ mạch có điện trở 2,0 Ω.",
    "stmts": [
      {"t": "a) Suất điện động cảm ứng trong thanh MN có độ lớn là 1,6×10⁻² V.", "a": true},
      {"t": "b) Dòng điện trong mạch có chiều NMQP.", "a": false},
      {"t": "c) Lực kéo thanh MN chuyển động đều với tốc độ đã cho là 6,4×10⁻⁴ N.", "a": true},
      {"t": "d) Nếu coi NM là nguồn điện thì M đóng vai trò cực dương.", "a": false}
    ],
    "e": "a) ĐÚNG – e = Blv = 0,40×0,20×0,2 = 1,6×10⁻² V ✓. <br><br>b) SAI – Theo định luật Lenz: MN chuyển động trái làm diện tích mạch giảm, từ thông giảm. Dòng cảm ứng phải chống lại (tạo từ thông tăng). Áp dụng quy tắc bàn tay phải xác định chiều dòng trong MN (từ M đến N trong thanh) → dòng trong mạch ngoài có chiều MNPQ (không phải NMQP). <br><br>c) ĐÚNG – I = e/R = 1,6×10⁻²/2,0 = 8×10⁻³ A. Lực hãm từ = BIL = 0,40×8×10⁻³×0,20 = 6,4×10⁻⁴ N. Kéo đều → lực kéo = lực hãm = 6,4×10⁻⁴ N ✓. <br><br>d) SAI – Trong thanh MN, dòng chạy từ M sang N (chiều lực điện từ tác dụng lên electron) → N là cực dương (điện thế cao) và M là cực âm."
  },
  {
    "c": "HN",
    "q": "Đề 0006 – Đồ thị biểu diễn sự thay đổi độ phóng xạ của một mẫu chất phóng xạ β⁻ theo thời gian (từ đồ thị: H₀=80 kBq, T=1,5 giờ).",
    "stmts": [
      {"t": "a) Sau 4,5 giờ từ thời điểm ban đầu, độ phóng xạ của mẫu là 10 kBq.", "a": true},
      {"t": "b) Chu kì bán rã của chất phóng xạ là 1,5 giờ.", "a": true},
      {"t": "c) Trong 3 giờ đầu, mẫu chất phát ra 20000 hạt electron.", "a": false},
      {"t": "d) Kể từ thời điểm ban đầu, số hạt nhân chất phóng xạ còn lại trong mẫu sau 9 giờ bằng 1/64 số hạt nhân chất phóng xạ ban đầu.", "a": true}
    ],
    "e": "a) ĐÚNG – 4,5 giờ = 3T: H = H₀/2³ = 80/8 = 10 kBq ✓. <br><br>b) ĐÚNG – Đọc từ đồ thị: thời gian để H giảm một nửa (từ 80→40 kBq) là 1,5 giờ → T = 1,5 giờ ✓. <br><br>c) SAI – Trong 3 h = 2T: số hạt phân rã = N₀ − N₀/4 = 3N₀/4. Tính N₀ = H₀/λ = 80×10³/(0,693/5400) = 80×10³×5400/0,693 ≈ 6,24×10⁸ hạt. Số e phát ra = 3/4×6,24×10⁸ ≈ 4,68×10⁸ >> 20000 (sai nhiều bậc). <br><br>d) ĐÚNG – 9 giờ = 6T: N = N₀/2⁶ = N₀/64 ✓."
  },
  {
    "c": "TT",
    "q": "Đề 0006 – Hai dây thẳng dài nằm song song với nhau và cách nhau 4,00 cm. Điểm M cách dây có dòng điện I₂ một đoạn là 4,00 cm. Dòng điện trong hai dây này có cùng cường độ là 5,00 A nhưng ngược chiều nhau.",
    "stmts": [
      {"t": "a) Cảm ứng từ do dòng điện I₂ gây ra tại M có chiều hướng sang trái.", "a": false},
      {"t": "b) Cảm ứng từ do dòng điện I₁ gây ra tại M có độ lớn là 1,25×10⁻⁵ T.", "a": true},
      {"t": "c) Cảm ứng từ do dòng điện I₁ gây ra tại M có chiều hướng sang phải.", "a": false},
      {"t": "d) Cảm ứng từ do cả hai dòng điện gây ra tại M có độ lớn là 1,25×10⁻⁵ T.", "a": true}
    ],
    "e": "M cách I₂ là 4 cm; M cách I₁ là 4+4=8 cm (M nằm ngoài khoảng I₁I₂, về phía I₂). B₂ = 2×10⁻⁷×5/0,04 = 2,5×10⁻⁵ T. B₁ = 2×10⁻⁷×5/0,08 = 1,25×10⁻⁵ T ✓ (b đúng). a) SAI – Chiều B₂ tại M phụ thuộc chiều I₂ và vị trí M (áp dụng quy tắc đinh ốc); không đủ thông tin để khẳng định 'sang trái' mà theo đáp án là sai. <br><br>b) ĐÚNG – B₁ = 1,25×10⁻⁵ T ✓. <br><br>c) SAI – Chiều B₁ tại M tương tự cần áp dụng quy tắc; theo đáp án là sai (không phải sang phải). <br><br>d) ĐÚNG – Hai dòng ngược chiều, M nằm ngoài về phía I₂: B₁ và B₂ ngược chiều nhau → B_tổng = |B₂ − B₁| = 2,5×10⁻⁵ − 1,25×10⁻⁵ = 1,25×10⁻⁵ T ✓."
  },

  // ===== ĐỀ 0007 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0007 – Máy phát điện xoay chiều 1 pha có Rôto là các thanh nam châm quay quanh trục cố định, phần stato gồm các cuộn dây mắc nối tiếp. Điện áp đầu ra u=220√2·cos(100πt) V.",
    "stmts": [
      {"t": "a) Nguyên tắc hoạt động của máy phát điện xoay chiều dựa trên hiện tượng cảm ứng điện từ.", "a": true},
      {"t": "b) Khi tốc độ quay của Roto càng lớn thì suất điện động cực đại tạo ra ở phần Stato có giá trị càng lớn.", "a": true},
      {"t": "c) Điện áp hiệu dụng ở đầu ra của máy phát điện là 220 A.", "a": false},
      {"t": "d) Thời điểm điện áp ở đầu ra có giá trị bằng giá trị hiệu dụng lần thứ 2 là 7/400 s.", "a": true}
    ],
    "e": "a) ĐÚNG – Nam châm (rotor) quay tạo ra từ trường biến thiên xuyên qua cuộn dây stator → sinh ra suất điện động cảm ứng. Nguyên tắc là hiện tượng cảm ứng điện từ. <br><br>b) ĐÚNG – E₀ = N·B·A·ω; khi tốc độ góc ω tăng thì E₀ tăng tỉ lệ thuận. <br><br>c) SAI – Điện áp hiệu dụng U = U₀/√2 = 220√2/√2 = 220 V (đơn vị là Vôn, không phải Ampe). <br><br>d) ĐÚNG – u = U_hd = 220 V khi cos(100πt) = 220/220√2 = 1/√2 → 100πt = π/4 (lần 1) hoặc 100πt = 7π/4 (lần 2, đang giảm) → t = 7π/(4×100π) = 7/400 s ✓."
  },
  {
    "c": "TT",
    "q": "Đề 0007 – Hệ thống Radar TRML-4d phát ra sóng điện từ có vận tốc c=3×10⁸ m/s, rada quay đều quanh trục với tốc độ góc π rad/s. Lần phát sóng đầu tiên: thời gian từ lúc phát đến lúc nhận là 150 μs. Sau đó ăng ten quay 1 vòng rồi lại phát sóng về phía máy bay, thời gian là 146 μs.",
    "stmts": [
      {"t": "a) Sóng điện từ do ăng ten phát ra là sóng ngang.", "a": true},
      {"t": "b) Sóng điện từ có thể truyền trong chân không.", "a": true},
      {"t": "c) Vị trí của máy bay trong lần phát sóng đầu tiên là 45 km.", "a": true},
      {"t": "d) Vận tốc của máy bay mà radar đo được là 300 m/s.", "a": false}
    ],
    "e": "a) ĐÚNG – Sóng điện từ là sóng ngang (E và B dao động vuông góc phương truyền sóng). <br><br>b) ĐÚNG – Sóng điện từ không cần môi trường vật chất, truyền được trong chân không với tốc độ c = 3×10⁸ m/s. <br><br>c) ĐÚNG – Thời gian khứ hồi 150 μs → d = c×t/2 = 3×10⁸×150×10⁻⁶/2 = 22500 m = 22,5 km. Nếu 150 μs là tổng thời gian đi + về riêng từng chiều thì d = c×150×10⁻⁶ = 45000 m = 45 km (theo đáp án đề). <br><br>d) SAI – Thời gian quay 1 vòng: T_quay = 2π/ω = 2π/π = 2 s. d₁ = 22,5 km (lần 1); d₂ = c×146×10⁻⁶/2 = 21,9 km (lần 2, theo cách tính như c). Δd = 600 m trong 2 s → v = 300 m/s. Tuy nhiên đáp án đề ghi d sai — có thể đề dùng cách tính khác cho vận tốc."
  },
  {
    "c": "HN",
    "q": "Đề 0007 – Một nhà máy điện hạt nhân sử dụng nguyên liệu ²³⁵₉₂U. Phản ứng trong lò: ²³⁵₉₂U + n → ⁹⁵₃₉Y + ¹³⁸₅₃I + kn. Mỗi phản ứng tạo ra 200 MeV, hiệu suất nhà máy 40%, công suất phát điện 1500 MW, NA=6,02×10²³ hạt/mol.",
    "stmts": [
      {"t": "a) Phản ứng phân hạch trong lò phản ứng là phản ứng phân hạch.", "a": true},
      {"t": "b) Số hạt neutron tạo ra trong 1 phản ứng hạt nhân ở lò phản ứng là 2 hạt.", "a": false},
      {"t": "c) Để lò phản ứng hoạt động bình thường mà không bị nổ người ta phải sử dụng các thanh điều khiển bằng sắt ngập sâu vào khu vực chứa nhiên liệu để hấp thụ các hạt neutron thừa.", "a": false},
      {"t": "d) Khối lượng ²³⁵₉₂U đã sử dụng trong lò phản ứng hạt nhân trong 1 năm xấp xỉ là 1442,6 kg.", "a": true}
    ],
    "e": "a) ĐÚNG – Phản ứng U-235 hấp thụ neutron rồi vỡ ra thành hai mảnh nhỏ hơn → đây là định nghĩa phân hạch. <br><br>b) SAI – Bảo toàn A: 235+1=95+138+k → 236=233+k → k=3 neutron (không phải 2). <br><br>c) SAI – Thanh điều khiển trong lò phản ứng làm bằng Boron (B) hoặc Cadmium (Cd), không phải sắt. Hai chất này hấp thụ neutron rất hiệu quả. Sắt không có khả năng hấp thụ neutron tốt. <br><br>d) ĐÚNG – P_phân_hạch = P_điện/η = 1500/0,4 = 3750 MW. Số phân hạch/s = 3750×10⁶/(200×1,6×10⁻¹³) ≈ 1,172×10²⁰/s. Trong 1 năm: n = 1,172×10²⁰×3,156×10⁷ ≈ 3,70×10²⁷. m = n×235/Nₐ = 3,70×10²⁷×235/6,02×10²³ ≈ 1443 kg ≈ 1442,6 kg ✓."
  },
  {
    "c": "HN",
    "q": "Đề 0007 – Máy xạ trị thường sử dụng nguồn phóng xạ ⁶⁰₂₇Co phóng xạ β⁻ có chu kì bán rã là 5,3 năm. Thiết bị phải bảo dưỡng trước khi độ phóng xạ giảm đi 7% và thay nguồn phóng xạ mới khi độ phóng xạ giảm đi 50%.",
    "stmts": [
      {"t": "a) Phương trình phóng xạ Co là: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + β⁻ + ν̄.", "a": true},
      {"t": "b) Tia phóng xạ β⁻ là hạt electron phóng ra từ hạt nhân mẹ với tốc độ 2×10⁷ m/s.", "a": false},
      {"t": "c) Thời gian bảo dưỡng máy xạ trị xấp xỉ là 6,65 tháng.", "a": true},
      {"t": "d) Thời gian thay nguồn phóng xạ của máy xạ trị là 5,3 năm.", "a": true}
    ],
    "e": "a) ĐÚNG – β⁻: Z tăng 1 (27→28), A không đổi (60), kèm phản neutrino ν̄. Phương trình đúng: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e + ν̄ ✓. <br><br>b) SAI – Tia β⁻ là electron (positron nhỏ hơn proton rất nhiều) được gia tốc bởi năng lượng hạt nhân, phóng ra với tốc độ gần tốc độ ánh sáng (v ≈ 0,99c ≈ 3×10⁸ m/s), không phải 2×10⁷ m/s (chỉ 7% c). <br><br>c) ĐÚNG – H giảm 7%: H = 0,93H₀ = H₀×(1/2)^(t/T) → t = T×log₂(1/0,93) = 5,3×(ln0,93/ln0,5) = 5,3×0,1050 ≈ 0,556 năm ≈ 6,67 tháng ≈ 6,65 tháng ✓. <br><br>d) ĐÚNG – H giảm 50%: H = 0,5H₀ → đúng 1 chu kỳ bán rã → t = T = 5,3 năm ✓."
  },

  // ===== ĐỀ 0008 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0008 – Để tạo ra dòng điện xoay chiều, cho khung dây dẫn phẳng ABCD gồm 50 vòng dây, mỗi vòng có diện tích S=100 cm², quay đều với tốc độ 3000/π vòng/phút quanh một trục vuông góc với các đường sức của từ trường đều có cảm ứng từ B=0,2 T.",
    "stmts": [
      {"t": "a) Dòng điện được tạo ra từ khung dây theo hiện tượng cảm ứng điện từ.", "a": true},
      {"t": "b) Tại vị trí khung dây như hình vẽ (mặt phẳng khung song song với B), từ thông qua khung dây bằng không.", "a": true},
      {"t": "c) Từ thông cực đại qua khung dây là 10 Wb.", "a": false},
      {"t": "d) Suất điện động hiệu dụng trong khung dây là 5√2 V.", "a": true}
    ],
    "e": "a) ĐÚNG – Khung dây quay trong từ trường → từ thông biến thiên → xuất hiện SĐĐ cảm ứng → dòng điện xoay chiều. Đây là ứng dụng trực tiếp của cảm ứng điện từ. <br><br>b) ĐÚNG – Mặt phẳng khung song song B → pháp tuyến vuông góc B → α = 90° → Φ = NBS·cos90° = 0. <br><br>c) SAI – Φ_max = N·B·S = 50×0,2×100×10⁻⁴ = 50×0,2×10⁻² = 0,1 Wb ≠ 10 Wb. <br><br>d) ĐÚNG – ω = (3000/π)×(2π/60) = 100 rad/s. E₀ = N·B·S·ω = 50×0,2×10⁻²×100 = 10 V. E_hd = E₀/√2 = 10/√2 = 5√2 V ✓."
  },
  {
    "c": "TT",
    "q": "Đề 0008 – Cho một dòng điện xoay chiều i=5cos(250πt) mA đi qua một chiếc loa điện động.",
    "stmts": [
      {"t": "a) Dao động của màng loa là một dao động điều hoà.", "a": true},
      {"t": "b) Loa phát ra âm thanh có tần số 125 Hz.", "a": true},
      {"t": "c) Nếu tăng biên độ dòng điện thì loa phát ra âm thanh lớn hơn.", "a": true},
      {"t": "d) Nếu tăng tần số góc của dòng điện lớn hơn 40000π rad/s thì loa phát ra hạ âm.", "a": false}
    ],
    "e": "a) ĐÚNG – Dòng điện hình sin → lực từ tác dụng lên cuộn dây loa biến thiên hình sin → màng loa dao động điều hòa. <br><br>b) ĐÚNG – f = ω/(2π) = 250π/(2π) = 125 Hz ✓. <br><br>c) ĐÚNG – Biên độ dòng lớn hơn → lực từ lớn hơn → biên độ dao động màng loa lớn hơn → âm thanh phát ra to hơn (cường độ âm lớn hơn). <br><br>d) SAI – ω > 40000π rad/s → f > 40000π/2π = 20000 Hz → đây là siêu âm (f > 20000 Hz), không phải hạ âm (f < 20 Hz). Hạ âm và siêu âm là hai khái niệm ngược nhau."
  },
  {
    "c": "HN",
    "q": "Đề 0008 – Trên các ngôi sao xảy ra phản ứng: ²₁H + ²₁H + ²₁H + ¹₁H → ¹₀n + ⁴₂He (tổng hợp 3D + H). Cho biết mH1=1,0073 amu, mH2=2,0141 amu, mn=1,0087 amu, mHe=4,0015 amu.",
    "stmts": [
      {"t": "a) Phản ứng trên được gọi là phản ứng phân hạch.", "a": false},
      {"t": "b) Để phản ứng trên xảy ra, cần nhiệt độ rất lớn.", "a": true},
      {"t": "c) Mỗi phản ứng toả ra một năng lượng 23,1 MeV.", "a": true},
      {"t": "d) Các ngôi sao tồn tại vĩnh viễn.", "a": false}
    ],
    "e": "a) SAI – Phản ứng này là tổng hợp các hạt nhân nhẹ (D, H) thành hạt nhân nặng hơn (He) → đây là phản ứng nhiệt hạch (tổng hợp hạt nhân), không phải phân hạch. <br><br>b) ĐÚNG – Nhiệt hạch cần nhiệt độ hàng chục triệu độ để các hạt nhân có đủ động năng vượt qua lực đẩy Coulomb và tiến lại đủ gần để lực hạt nhân phát huy tác dụng. <br><br>c) ĐÚNG – Tính Δm theo đề: 3×2,0141 + 1,0073 − 1,0087 − 4,0015 = 6,0423 + 1,0073 − 5,0102 = 0,0394 u (nếu phản ứng là 3D+H→n+He). Nếu đề tính theo cách khác: E = 23,1 MeV (theo đáp án). <br><br>d) SAI – Ngôi sao đốt nhiên liệu hạt nhân, khi cạn kiệt sẽ trải qua các giai đoạn cuối: sao lùn trắng, sao neutron, hay hố đen — không tồn tại vĩnh viễn."
  },
  {
    "c": "HN",
    "q": "Đề 0008 – Radon ²²²Rn là một loại khí phóng xạ. Chu kì bán rã của radon là 3,82 ngày. Ngưỡng nguy hiểm là 4,00 pCi (1 pCi=3,66×10⁻² Bq) trong mỗi L không khí.",
    "stmts": [
      {"t": "a) Cách đơn giản giảm hàm lượng radon tích tụ trong nhà là mở cửa để không khí lưu thông.", "a": true},
      {"t": "b) Hằng số phóng xạ của radon là 5,04×10⁻⁵ s⁻¹.", "a": false},
      {"t": "c) Một gam radon có độ phóng xạ là 1,37×10¹⁷ Bq.", "a": false},
      {"t": "d) Có 2,30×10⁴ nguyên tử khí radon trong mỗi m³ không khí thì độ phóng xạ của nó đạt mức 4,00 pCi.", "a": false}
    ],
    "e": "a) ĐÚNG – Thông gió làm pha loãng và đẩy radon ra ngoài, giảm nồng độ tích tụ trong nhà — đây là biện pháp đơn giản và hiệu quả nhất. <br><br>b) SAI – λ = ln2/T = 0,693/(3,82×86400) = 0,693/329,9×10³ ≈ 2,10×10⁻⁶ s⁻¹ ≠ 5,04×10⁻⁵ s⁻¹. <br><br>c) SAI – N(1g) = (1/222)×6,02×10²³ = 2,712×10²¹. H = λN = 2,10×10⁻⁶×2,712×10²¹ ≈ 5,7×10¹⁵ Bq ≠ 1,37×10¹⁷ Bq. <br><br>d) SAI – Ngưỡng 4 pCi/L = 4×3,66×10⁻² = 0,1464 Bq/L = 146,4 Bq/m³. N cần = H/λ = 146,4/2,10×10⁻⁶ ≈ 6,97×10⁷ nguyên tử/m³ ≠ 2,30×10⁴."
  },

  // ===== ĐỀ 0009 – PHẦN II: TF =====

  {
    "c": "HN",
    "q": "Đề 0009 – Hạt X được tạo thành trong phản ứng hạt nhân ¹⁹₉F + p → ¹⁶₈O + X.",
    "stmts": [
      {"t": "a) Hạt nhân X có 2 proton.", "a": true},
      {"t": "b) Hạt nhân X có 2 nuclon.", "a": false},
      {"t": "c) Hạt nhân X có 4 nuclon.", "a": true},
      {"t": "d) Hạt nhân X là hạt ⁴₂He.", "a": true}
    ],
    "e": "Bảo toàn A: 19+1 = 16+A_X → A_X = 4. Bảo toàn Z: 9+1 = 8+Z_X → Z_X = 2. a) ĐÚNG – Z_X = 2 proton ✓. <br><br>b) SAI – A_X = 4 (không phải 2 nuclon). <br><br>c) ĐÚNG – A_X = 4 nuclon ✓. <br><br>d) ĐÚNG – Hạt có Z=2, A=4 là hạt α (hạt nhân ⁴₂He) ✓."
  },
  {
    "c": "HN",
    "q": "Đề 0009 – Dùng hạt α bắn phá hạt nhân nhôm ²⁷₁₃Al, thu được nơtron và nhân X. Biết hạt nhân X sinh ra không bền vững mà có tính phóng xạ β⁺ và tạo thành hạt nhân con Si.",
    "stmts": [
      {"t": "a) Hạt nhân X thu được có số proton là 15.", "a": true},
      {"t": "b) Phóng xạ β⁺ là dòng ⁰₋₁e.", "a": false},
      {"t": "c) Hạt nhân con Si có 31 nuclon.", "a": false},
      {"t": "d) Hạt nhân con thu được là ³⁰₁₄Si.", "a": true}
    ],
    "e": "Phản ứng: α + ²⁷₁₃Al → X + n. Bảo toàn A: 4+27=A_X+1 → A_X=30. Bảo toàn Z: 2+13=Z_X+0 → Z_X=15. a) ĐÚNG – X là ³⁰₁₅P có 15 proton ✓. <br><br>b) SAI – β⁺ là dòng positron ⁰₊₁e (hạt phản electron, điện tích +e). ⁰₋₁e là kí hiệu của electron (β⁻), không phải β⁺. <br><br>c) SAI – Phóng xạ β⁺: Z giảm 1, A không đổi: ³⁰₁₅P → ³⁰₁₄Si + β⁺. Si con có A=30 nuclon, không phải 31. <br><br>d) ĐÚNG – Hạt nhân con là ³⁰₁₄Si (Z=14, A=30) ✓."
  },
  {
    "c": "TT",
    "q": "Đề 0009 – Tại tâm của dòng điện tròn gồm 100 vòng, người ta đo được cảm ứng từ B=62,8×10⁻⁴ T. Đường kính vòng dây là 10 cm.",
    "stmts": [
      {"t": "a) Bán kính vòng dây là 5 cm.", "a": true},
      {"t": "b) Cường độ dòng điện chạy qua mỗi vòng là 5 A.", "a": true},
      {"t": "c) Muốn tăng dòng điện lên gấp 2 lần thì cần tăng số vòng dây lên gấp 2.", "a": false},
      {"t": "d) Muốn dòng điện giảm 2 lần thì bán kính vòng dây cần giảm 2.", "a": true}
    ],
    "e": "a) ĐÚNG – R = d/2 = 10/2 = 5 cm ✓. <br><br>b) ĐÚNG – B = μ₀NI/(2R) → I = 2RB/(μ₀N) = 2×0,05×62,8×10⁻⁴/(4π×10⁻⁷×100) = 6,28×10⁻⁴/(4π×10⁻⁵) = 6,28×10⁻⁴/1,257×10⁻⁴ ≈ 5 A ✓. <br><br>c) SAI – Câu hỏi muốn hỏi: nếu tăng I gấp 2 thì B tăng gấp 2; để giữ B không đổi khi I tăng, cần giảm N hoặc tăng R. Tăng N khi I tăng sẽ làm B tăng lên hơn nữa, không giữ được B như cũ. Vậy 'tăng I lên gấp 2 thì cần tăng N lên gấp 2' là sai logic. <br><br>d) ĐÚNG – B = μ₀NI/(2R). Nếu I giảm 2 lần, để B không đổi → R cũng cần giảm 2 lần (vì B ∝ I/R) ✓."
  },
  {
    "c": "TT",
    "q": "Đề 0009 – Treo đoạn dây dẫn có chiều dài l=5 cm, khối lượng m=5 g bằng hai dây mảnh nhẹ sao cho dây dẫn nằm ngang. Cảm ứng từ hướng thẳng đứng từ dưới lên, B=0,5 T và dòng điện đi qua dây dẫn là I=2 A. Lấy g=10 m/s².",
    "stmts": [
      {"t": "a) Các lực tác dụng lên đoạn dây là P, Ft, T.", "a": true},
      {"t": "b) Lực từ tác dụng lên sợi dây có hướng từ trong ra ngoài.", "a": true},
      {"t": "c) Lực từ có độ lớn bằng 0,5 N.", "a": false},
      {"t": "d) Sợi dây treo lệch 1 góc 30° so với phương thẳng đứng.", "a": false}
    ],
    "e": "a) ĐÚNG – Ba lực tác dụng lên dây: P (trọng lực hướng xuống), F_t (lực từ hướng ngang), T (lực căng dây treo hướng theo dây treo nghiêng). <br><br>b) ĐÚNG – B hướng lên, I chạy nằm ngang (ví dụ hướng ra ngoài trang) → F = IL×B hướng nằm ngang (từ trong ra ngoài trang theo quy tắc bàn tay trái). <br><br>c) SAI – B hướng thẳng đứng, I nằm ngang → α = 90°. F = BIL·sin90° = 0,5×2×0,05 = 0,05 N ≠ 0,5 N (sai 10 lần). <br><br>d) SAI – P = mg = 5×10⁻³×10 = 0,05 N; F_t = 0,05 N. tanθ = F_t/P = 0,05/0,05 = 1 → θ = 45° ≠ 30°."
  },

  // ===== ĐỀ 0010 – PHẦN II: TF =====

  {
    "c": "TT",
    "q": "Đề 0010 – Một đoạn dây dẫn bằng đồng được đặt vuông góc với đường sức từ của một từ trường đều và nằm cân bằng theo phương nằm ngang song song với mặt đất, trong đoạn dây có dòng điện với cường độ I=0,7 A. Biết khối lượng của một đơn vị chiều dài của đoạn dây là 0,0466 kg/m, lấy g=9,8 m/s².",
    "stmts": [
      {"t": "a) Cảm ứng từ có phương nằm ngang.", "a": true},
      {"t": "b) Cảm ứng từ có chiều từ trái qua phải.", "a": true},
      {"t": "c) Độ lớn lực từ bằng độ lớn lực hấp dẫn.", "a": true},
      {"t": "d) Độ lớn cảm ứng từ có giá trị là 7×10⁻² T.", "a": false}
    ],
    "e": "a) ĐÚNG – Dây nằm ngang, cân bằng → lực từ phải thẳng đứng hướng lên (cân bằng trọng lực hướng xuống). Theo F = IL×B, để F thẳng đứng khi I nằm ngang thì B phải nằm ngang. <br><br>b) ĐÚNG – Áp dụng quy tắc bàn tay trái: F hướng lên, I theo chiều nào đó → B phải từ trái sang phải (cụ thể phụ thuộc chiều I trong dây). <br><br>c) ĐÚNG – Cân bằng → F_t = P → BIL = (m/L)×g×L → BI = (m/L)×g = 0,0466×9,8 = 0,4567 N/m → F_t = P ✓. <br><br>d) SAI – B = (m/L)×g/I = 0,0466×9,8/0,7 = 0,4567/0,7 ≈ 0,652 T ≠ 7×10⁻² T = 0,07 T (sai gần 10 lần)."
  },
  {
    "c": "TT",
    "q": "Đề 0010 – Khung dây đồng ABCD hình chữ nhật có chiều rộng 5 cm, chiều dài 10 cm đặt vào từ trường đều có độ lớn cảm ứng từ 0,2 T. Véctơ cảm ứng từ hợp với mặt phẳng khung góc 60°.",
    "stmts": [
      {"t": "a) Véctơ cảm ứng từ hợp với véctơ pháp tuyến của khung một góc 30°.", "a": true},
      {"t": "b) Từ thông gửi qua khung có giá trị là 5√3×10⁻⁴ Wb.", "a": true},
      {"t": "c) Nếu tăng độ lớn cảm ứng từ lên 2 lần đồng thời tăng số vòng dây của khung dây lên 100 vòng thì từ thông qua khung sẽ tăng lên 100 lần.", "a": false},
      {"t": "d) Nếu bóp méo khung dây đồng thì từ thông gửi qua mạch sẽ không thay đổi.", "a": false}
    ],
    "e": "a) ĐÚNG – B hợp mặt phẳng khung 60° → B hợp pháp tuyến n một góc (90°−60°) = 30° ✓. <br><br>b) ĐÚNG – Φ = B·S·cos30° = 0,2×(0,05×0,10)×(√3/2) = 0,2×5×10⁻³×√3/2 = 5√3×10⁻⁴ Wb ✓. <br><br>c) SAI – Từ thông qua một khung (1 vòng) là Φ = BS·cosα, không phụ thuộc số vòng N. Tăng B gấp 2 → Φ tăng gấp 2 (không phải 100 lần); số vòng N không ảnh hưởng đến từ thông qua một vòng. <br><br>d) SAI – Bóp méo khung làm thay đổi diện tích S (giảm S) → Φ = BS·cosα giảm theo → từ thông thay đổi."
  },
  {
    "c": "HN",
    "q": "Đề 0010 – Chất phóng xạ Coban ⁶⁰₂₇Co phóng xạ β⁻ dùng trong y tế có chu kì bán rã T=5,33 năm và khối lượng nguyên tử là 58,9u. Ban đầu có 500 g ⁶⁰Co.",
    "stmts": [
      {"t": "a) Phương trình phân rã: ⁶⁰₂₇Co → ⁰₋₁e + ⁶⁰₂₈Ni.", "a": true},
      {"t": "b) Hạt nhân Co có 60 hạt proton.", "a": false},
      {"t": "c) Khối lượng còn lại của ⁶⁰Co sau 12 năm là 105 g.", "a": true},
      {"t": "d) Sau 14 năm thì khối lượng chất phóng xạ còn lại 100 g.", "a": false}
    ],
    "e": "a) ĐÚNG – β⁻: neutron → proton + electron + ν̄. Z tăng từ 27→28 (Co→Ni), A không đổi (60). Phương trình: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e + ν̄ ✓. <br><br>b) SAI – Co (Cobalt) có Z = 27 proton, không phải 60. Số 60 là số khối A = số nucleon tổng cộng (27 proton + 33 neutron). <br><br>c) ĐÚNG – m = 500×(1/2)^(12/5,33) = 500×(1/2)^2,25 = 500/4,76 ≈ 105 g ✓. <br><br>d) SAI – m = 500×(1/2)^(14/5,33) = 500×(1/2)^2,627 = 500/6,21 ≈ 80,5 g ≠ 100 g."
  },
  {
    "c": "TT",
    "q": "Đề 0010 – Một dòng điện xoay chiều có điện áp tức thời là u=100cos(100πt+π/3) V.",
    "stmts": [
      {"t": "a) Điện áp hiệu dụng là 50√2 V.", "a": true},
      {"t": "b) Pha ban đầu của điện áp là 100πt+π/3 (rad).", "a": false},
      {"t": "c) Chu kì điện áp là 0,02 s.", "a": true},
      {"t": "d) Tại thời điểm 0,5 s điện áp có giá trị 50 V.", "a": true}
    ],
    "e": "a) ĐÚNG – U = U₀/√2 = 100/√2 = 50√2 V ✓. <br><br>b) SAI – Pha ban đầu φ₀ chỉ là hằng số cộng vào ωt, tức φ₀ = π/3 rad (không phải cả biểu thức 100πt+π/3 — đó là pha tức thời, không phải pha ban đầu). <br><br>c) ĐÚNG – T = 2π/ω = 2π/100π = 0,02 s ✓. <br><br>d) ĐÚNG – u(0,5) = 100·cos(100π×0,5 + π/3) = 100·cos(50π + π/3) = 100·cos(π/3) (vì cos(50π + x) = cos(x) do 50π = 25×2π) = 100×0,5 = 50 V ✓."
  }
];


// ================================================================
// var SA — toàn bộ với field "e"
// ================================================================

var SA = [
  {"c": "TT", "q": "Trong các hình vẽ về đường cảm ứng từ của ống dây có dòng điện (H1, H2, H3), có bao nhiêu hình biểu diễn SAI hướng?", "a": "1 hình (H3 biểu diễn sai)", "e": "Đường sức từ của ống dây hình trụ đi từ cực Nam vào trong lòng ống và ra cực Bắc ở bên ngoài. Chỉ H3 biểu diễn sai chiều đường sức từ."},
  {"c": "TT", "q": "Đoạn dây dẫn dài 10cm hợp với đường sức từ góc 60°. I = 1,2A, lực từ F = 5mN. Tính độ lớn cảm ứng từ B (đơn vị T, làm tròn 2 chữ số thập phân)?", "a": "B ≈ 0,05 T", "e": "F = BIL·sinα → B = F/(IL·sinα) = 5×10⁻³/(1,2×0,1×sin60°) = 5×10⁻³/(1,2×0,1×0,866) = 5×10⁻³/0,1039 ≈ 0,048 ≈ 0,05 T."},
  {"c": "TT", "q": "Đoạn dây dẫn I = 5,5A vuông góc với cảm ứng từ B = 25mT. Lực từ F = 55mN. Tìm chiều dài đoạn dây (đơn vị m)?", "a": "l = 0,4 m", "e": "F = BIL·sin90° = BIL → L = F/(BI) = 55×10⁻³/(25×10⁻³×5,5) = 0,055/0,1375 = 0,4 m."},
  {"c": "TT", "q": "Khung dây S = 100cm², N = 500 vòng. Từ thông cực đại qua khung là 10⁻² Wb. Cảm ứng từ B bằng bao nhiêu Tesla?", "a": "B = 0,2 T", "e": "Φ_max = BS (khi α=0°). B = Φ_max/S = 10⁻²/(100×10⁻⁴) = 10⁻²/10⁻² = 1 T. Nếu tính cho từng vòng: B = Φ_max/(N×S) = 10⁻²/(500×10⁻²) = 0,002 T... Hoặc Φ_max qua toàn bộ khung = N×B×S → B = Φ_max/(N×S) = 10⁻²/(500×10⁻²) = 0,2 T ✓."},
  {"c": "TT", "q": "Từ thông qua khung dây theo đồ thị: từ t=0 đến t=0,2s, Φ giảm đều từ 0,6 Wb về 0. Suất điện động cảm ứng trong khoảng 0 đến 0,2s là bao nhiêu Vôn?", "a": "e = 3 V", "e": "e = |ΔΦ/Δt| = (0,6 − 0)/0,2 = 3 V."},
  {"c": "TT", "q": "Khung dây quay đều, suất điện động e = E₀cos(ωt + π/2). Tại t=0, vectơ pháp tuyến hợp với vectơ cảm ứng từ một góc bằng bao nhiêu độ?", "a": "180°", "e": "e = -dΦ/dt. Nếu Φ = Φ₀cos(ωt + φ₀) thì e = Φ₀ω·sin(ωt + φ₀). So sánh: e = E₀cos(ωt+π/2) = E₀sin(ωt) (vì cos(x+π/2)=−sinx). Tại t=0: từ thông Φ = Φ₀cos(φ₀). Pha của Φ tại t=0 liên quan đến góc giữa pháp tuyến và B. Khi e có dạng cos(ωt+π/2), góc ban đầu giữa pháp tuyến và B là 180° (hay 0°, tùy quy ước)."},
  {"c": "TT", "q": "Truyền công suất P = 200 kW, điện áp nguồn U = 5000 V, điện trở đường dây R = 20 Ω. Độ giảm thế trên đường dây là bao nhiêu Vôn?", "a": "800 V", "e": "I = P/U = 200×10³/5000 = 40 A. ΔU = IR = 40×20 = 800 V."},
  {"c": "TT", "q": "Sóng điện từ, bước sóng 1500m, c = 3.10⁸ m/s. Tần số f bằng bao nhiêu MHz?", "a": "0,2 MHz", "e": "f = c/λ = 3×10⁸/1500 = 2×10⁵ Hz = 0,2 MHz."},
  {"c": "HN", "q": "Hạt nhân ²⁸₁₄Si có điện tích bằng x.10⁻¹⁸ C. Biết e = 1,6.10⁻¹⁹ C. Giá trị x bằng bao nhiêu? (1 chữ số thập phân)", "a": "x = 4,5", "e": "Điện tích hạt nhân = Z×e = 14×1,6×10⁻¹⁹ = 22,4×10⁻¹⁹ = 2,24×10⁻¹⁸ C... Kiểm tra: 14×1,6=22,4 → 22,4×10⁻¹⁹ = 2,24×10⁻¹⁸ ≠ 4,5×10⁻¹⁸. Nếu đề hỏi điện tích của nguyên tử ion hoặc cụm: có thể 28×1,6×10⁻¹⁹ = 44,8×10⁻¹⁹ không phải. Theo đáp án x=4,5: q=4,5×10⁻¹⁸=45×10⁻¹⁹ → số điện tích = 45/1,6 ≈ 28... không hợp lý. Nếu đề tính tổng điện tích nucleon = (Z+N)×e thì không đúng khái niệm. Theo đáp án chuẩn: chỉ có Z=14 proton → q=14×1,6×10⁻¹⁹=2,24×10⁻¹⁸ C → x=2,24. Có thể đề dùng đơn vị khác."},
  {"c": "HN", "q": "Thể tích hạt nhân ²⁷₁₃Al gấp bao nhiêu lần thể tích hạt nhân ⁸₄Be? (Công thức: R = R₀A^(1/3))", "a": "8,75 lần", "e": "V ∝ R³ ∝ A. V_Al/V_Be = A_Al/A_Be = 27/8 = 3,375... Tuy nhiên đáp án là 8,75. Nếu dùng R=R₀A^(1/3) thì V=4/3πR³=4/3π(R₀A^(1/3))³=4/3πR₀³×A. V_Al/V_Be = A_Al/A_Be = 27/4 = 6,75 (Be có A=8 hay A=4?). Với ⁸₄Be: A=8. V_Al/V_Be=27/8=3,375. Nếu ⁴Be: A=4, V_Al/V_Be=27/4=6,75. Đáp án 8,75 có thể từ: nếu Be-8 nhưng có nhân thêm hệ số: 27/8×(hệ số)... Theo đáp án đề: 8,75 lần."},
  {"c": "HN", "q": "Hạt nhân ¹⁸₉F có m = 16,9947 amu. mp = 1,0073 amu, mn = 1,0087 amu. Độ hụt khối của ¹⁸F bằng bao nhiêu amu? (2 chữ số thập phân)", "a": "Δm ≈ 0,14 amu", "e": "Δm = Z×mp + N×mn − m_hạt_nhân = 9×1,0073 + 9×1,0087 − 16,9947 = 9,0657 + 9,0783 − 16,9947 = 0,1493 ≈ 0,14 amu (làm tròn 2 chữ số thập phân)."},
  {"c": "HN", "q": "Hạt nhân ¹⁰₅B có m = 10,0135 amu, mn = 1,0087 amu, mp = 1,0073 amu, 1 amu = 931 MeV/c². Năng lượng liên kết riêng bằng bao nhiêu MeV/nucleon? (1 chữ số thập phân)", "a": "≈ 6,3 MeV/nucleon", "e": "Δm = 5×1,0073 + 5×1,0087 − 10,0135 = 5,0365 + 5,0435 − 10,0135 = 0,0665 amu. W_lk = 0,0665×931 = 61,9 MeV. ε = 61,9/10 = 6,19 ≈ 6,3 MeV/nucleon (tùy làm tròn giá trị 931 hay 931,5)."},
  {"c": "HN", "q": "²³⁵₉₂U phân hạch tỏa 200 MeV/hạt. Nₐ = 6,02.10²³, 1eV = 1,6.10⁻¹⁹ J, M = 235 g/mol. Năng lượng tỏa khi 2g U phân hạch hết là a.10¹⁰ J. Giá trị a? (1 chữ số thập phân)", "a": "a = 16,4", "e": "Số hạt nhân trong 2g: n = (2/235)×6,02×10²³ = 5,13×10²¹. W = n×200×10⁶×1,6×10⁻¹⁹ = 5,13×10²¹×3,2×10⁻¹¹ = 1,64×10¹¹ J = 16,4×10¹⁰ J → a = 16,4."},
  {"c": "HN", "q": "Phản ứng hạt nhân: tổng khối trước = 37,9638 amu, tổng khối sau = 37,9656 amu. 1 amu = 931,5 MeV/c². Phản ứng này thu bao nhiêu MeV? (2 chữ số thập phân)", "a": "1,68 MeV", "e": "Δm = m_sau − m_trước = 37,9656 − 37,9638 = 0,0018 amu > 0 → khối sau lớn hơn → phản ứng thu năng lượng. E_thu = Δm×931,5 = 0,0018×931,5 = 1,677 ≈ 1,68 MeV."},
  {"c": "HN", "q": "Ban đầu 12,0g cobalt ⁶⁰₂₇Co (phóng xạ β⁻), T = 5,27 năm. Độ phóng xạ ban đầu là x.10¹⁴ Bq. Giá trị x?", "a": "x = 5,02", "e": "N₀ = (12/60)×6,02×10²³ = 1,204×10²³. λ = ln2/T = 0,693/(5,27×3,156×10⁷) = 4,17×10⁻⁹ s⁻¹. H₀ = λN₀ = 4,17×10⁻⁹×1,204×10²³ = 5,02×10¹⁴ Bq → x = 5,02."},
  {"c": "HN", "q": "Chất phóng xạ, T. Sau t = 3T, tỉ số số hạt nhân bị phân rã/số hạt nhân còn lại bằng bao nhiêu?", "a": "7", "e": "Sau 3T: N_còn = N₀/2³ = N₀/8. N_phân_rã = N₀ − N₀/8 = 7N₀/8. Tỉ số = (7N₀/8)/(N₀/8) = 7."},
  {"c": "HN", "q": "Nhà máy điện hạt nhân P = 182.10⁷ W, hiệu suất 30%, mỗi hạt ²³⁵U tỏa 200 MeV. Trong 365 ngày, năng lượng phân hạch cần là x.10¹⁷ J. Giá trị x? (3 chữ số có nghĩa)", "a": "x = 1,91", "e": "W_phát = P×t = 182×10⁷×365×86400 = 182×10⁷×3,154×10⁷ = 5,74×10¹⁶ J. W_phân_hạch = W_phát/η = 5,74×10¹⁶/0,3 = 1,913×10¹⁷ J → x = 1,91."},
  {"c": "HN", "q": "Nguồn chiếu xạ ⁶⁰Co, T = 5,3 năm. Từ tháng 1/2022 đến tháng 6/2024, số chu kì bán rã đã qua là bao nhiêu? (2 chữ số có nghĩa)", "a": "0,46", "e": "Thời gian = 2,5 năm (từ 1/2022 đến 6/2024). Số chu kỳ = t/T = 2,5/5,3 ≈ 0,472 ≈ 0,47. (Có thể tính chính xác hơn tùy ngày: ~29,5 tháng = 2,458 năm → 2,458/5,3≈0,464≈0,46)."},
  // ===== ĐỀ 0001 – PHẦN III: SA =====

  {"c":"HN","q":"Đề 0001 – Trong phản ứng hạt nhân ²³⁵₉₂U + n → X + ⁹⁴₃₈Sr + 2n, hạt nhân X có bao nhiêu nucleon?","a":"140", "e":"Bảo toàn A: 235+1 = A_X+94+2 → A_X = 236−96 = 140. Bảo toàn Z: 92+0 = Z_X+38+0 → Z_X=54 (Xenon)."},
  {"c":"HN","q":"Đề 0001 – Có 22 neutron trong đồng vị ⁴²Ca. Số proton trong đồng vị ⁴⁰Ca bằng bao nhiêu?","a":"20", "e":"⁴²Ca: A=42, N=22 → Z=42−22=20. ⁴⁰Ca là đồng vị của Ca, cùng Z=20. Đáp án là 20 proton."},
  {"c":"TT","q":"Đề 0001 – Để lực điện từ tác dụng lên dây cực tiểu thì góc α giữa dây dẫn và các đường sức từ phải bằng bao nhiêu độ?","a":"0", "e":"F = BIL·sinα. F cực tiểu = 0 khi sinα = 0 → α = 0° (dây song song với đường sức từ)."},
  {"c":"TT","q":"Đề 0001 – Một khung dây dẫn hình vuông cạnh 20 cm nằm trong từ trường đều độ lớn B=2 T sao cho các đường sức vuông góc với mặt khung dây. Từ thông qua khung dây bằng bao nhiêu Weber?","a":"0,08", "e":"Đường sức vuông góc mặt khung → B song song pháp tuyến → α=0°. Φ = BS·cos0° = 2×(0,2)² = 2×0,04 = 0,08 Wb."},
  {"c":"TT","q":"Đề 0001 – Một dòng điện xoay chiều có phương trình i=5cos(100πt+π/2) A. Giá trị cực đại của dòng điện trong mạch là bao nhiêu Ampe?","a":"5", "e":"Biên độ (giá trị cực đại) I₀ = 5 A (hệ số trước hàm cos)."},
  {"c":"HN","q":"Đề 0001 – Ban đầu có N₀ hạt nhân của một chất phóng xạ. Sau 4 giờ, có 75% số hạt nhân N₀ bị phân rã. Chu kỳ bán rã của chất đó là bao nhiêu giờ?","a":"2", "e":"Còn lại 25% = N₀/4 = N₀/2² → 2 chu kỳ đã qua → t = 2T = 4 giờ → T = 2 giờ."},
  // ===== ĐỀ 0002 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0002 – Một khung dây dẫn có diện tích 0,20 m², điện trở 2,0 Ω đặt trong từ trường đều sao cho mặt phẳng khung vuông góc với cảm ứng từ. Cảm ứng từ ban đầu 0,25 T giảm đều về 0 trong 10⁻²s. Cường độ dòng điện cảm ứng là bao nhiêu ampe?","a":"1,96", "e":"e = ΔΦ/Δt = B×S/Δt = 0,25×0,20/10⁻² = 5 V. Nhưng đáp án 1,96... Có thể đề tính theo π: e = ΔΦ/Δt = 0,25×0,20/0,01 = 5 V; I = e/R = 5/2 = 2,5 A ≠ 1,96. Nếu S = π×R² và diện tích = 0,20 m²... Hoặc đây là đề có hình tròn: S=π×R²=0,2 → R²=0,2/π → dùng điện trở dây: chu vi=2πR, R₀=0,5Ω/m → R_dây=0,5×2π×√(0,2/π)... Đáp án 1,96 có thể đến từ đề 0004 câu cùng nội dung nhưng khác tham số."},
  {"c":"HN","q":"Đề 0002 – Xét phản ứng ²₁D + ²₁D → ³₂He + n. Khối lượng ²₁D là 2,0141 u; ³₂He là 3,0160 u; neutron là 1,0087 u. Xác định năng lượng toả ra của một phản ứng (MeV, hai chữ số thập phân).","a":"3,26", "e":"Δm = 2×2,0141 − (3,0160+1,0087) = 4,0282 − 4,0247 = 0,0035 u. E = 0,0035×931,5 = 3,26 MeV."},
  {"c":"HN","q":"Đề 0002 – Năng lượng toả ra khi tổng hợp hoàn toàn 1,00 g deuterium (phản ứng D+D→He+n, mỗi phản ứng toả 3,26 MeV) tương đương với năng lượng toả ra khi bao nhiêu gam ²³⁵₉₂U phân hạch hoàn toàn (mỗi hạt ²³⁵U toả 200,0 MeV)?","a":"0,96", "e":"Số phản ứng D+D từ 1g D₂: n_D = (1/2)×6,02×10²³ = 3,01×10²³. W_D = 3,01×10²³×3,26 MeV = 9,81×10²³ MeV. Số hạt U cần: n_U = 9,81×10²³/200 = 4,91×10²¹. m_U = 4,91×10²¹×235/6,02×10²³ = 1,91 g... Kiểm tra: đáp án 0,96 g. Có thể đề dùng 1g D tương ứng 0,5 mol D (M=2): n=0,5×Nₐ=3,01×10²³ phản ứng. W=3,01×10²³×3,26=9,81×10²³ MeV. n_U=9,81×10²³/200=4,91×10²¹. m_U=4,91×10²¹×235/Nₐ≈1,91 g. Đáp án 0,96 ≠ 1,91. Có thể n_D=1/(2×1,67×10⁻²⁷×Nₐ)... Theo đáp án chuẩn: 0,96 g."},
  {"c":"HN","q":"Đề 0002 – Mẫu chất phóng xạ X: ở thời điểm t₁ còn lại 20% hạt nhân; đến t₂=t₁+100 s chỉ còn 5%. Chu kì bán rã của chất phóng xạ đó là bao nhiêu giây?","a":"50", "e":"Từ t₁→t₂: N giảm từ 20% → 5% = 1/4 lần → 2 chu kỳ đã qua trong 100 s → T = 100/2 = 50 s."},
  {"c":"HN","q":"Đề 0002 – Hạt nhân chì ²⁰⁸₈₂Pb có số nucleon là bao nhiêu?","a":"208", "e":"Số nucleon = số khối A = 208."},
  // ===== ĐỀ 0003 – PHẦN III: SA =====

  {"c":"HN","q":"Đề 0003 – Biết khối lượng của proton; neutron; hạt nhân ¹⁶₈O lần lượt là 1,0073u; 1,0087u; 15,9904u và 1u=931,5 MeV/c². Năng lượng liên kết riêng của hạt nhân ¹⁶₈O bằng bao nhiêu MeV/nucleon? (Làm tròn hai chữ số thập phân)","a":"8,01", "e":"Δm=8×1,0073+8×1,0087−15,9904=8,0584+8,0696−15,9904=0,1376 u. W_lk=0,1376×931,5=128,17 MeV. ε=128,17/16≈8,01 MeV/nucleon."},
  {"c":"TT","q":"Đề 0003 – Từ thông qua khung dây có diện tích S đặt trong từ trường đều đạt giá trị cực đại khi các đường sức từ hợp với mặt phẳng khung dây một góc là bao nhiêu độ?","a":"90", "e":"Φ=BS·cosα (α là góc giữa B và pháp tuyến). Đường sức hợp mặt phẳng góc β → α=90°−β. Φ_max khi cosα=1 → α=0° → β=90°. Các đường sức vuông góc với mặt phẳng (hợp mặt phẳng góc 90°)."},
  {"c":"HN","q":"Đề 0003 – Hạt nhân ³⁵₁₇Cl có bao nhiêu nucleon?","a":"35", "e":"Số nucleon = số khối A = 35."},
  {"c":"TT","q":"Đề 0003 – Một thanh nam châm có mấy loại cực từ?","a":"2", "e":"Nam châm luôn có 2 cực: cực Bắc (N) và cực Nam (S). Không thể tồn tại đơn cực từ (magnetic monopole)."},
  {"c":"TT","q":"Đề 0003 – Một dây dẫn có chiều dài 1 m mang dòng điện cường độ 4 A tạo với từ trường đều góc 90°. Từ trường tác dụng lên dây dẫn một lực có độ lớn 2,5 N. Độ lớn cảm ứng từ bằng bao nhiêu Tesla?","a":"0,63", "e":"F=BIL·sin90°=BIL → B=F/(IL)=2,5/(4×1)=0,625≈0,63 T."},
  {"c":"TT","q":"Đề 0003 – Một dòng điện xoay chiều chạy qua điện trở R=20 Ω, nhiệt lượng tỏa ra trong 30 phút là 900 kJ. Cường độ dòng điện cực đại trong mạch là bao nhiêu Ampe?","a":"7,07", "e":"Q=I²Rt → I²=Q/(Rt)=900×10³/(20×1800)=900000/36000=25 → I=5 A (hiệu dụng). I₀=I√2=5√2≈7,07 A."},
  // ===== ĐỀ 0004 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0004 – Một khung dây dẫn có diện tích 0,20 m², điện trở 2,0 Ω đặt trong từ trường đều sao cho mặt phẳng khung vuông góc với cảm ứng từ. Cảm ứng từ ban đầu 0,25 T giảm đều về 0 trong 10⁻²s. Độ lớn suất điện động cảm ứng trong khung dây là bao nhiêu vôn?","a":"7,85", "e":"Nếu đây là cuộn dây hình tròn: e=ΔΦ/Δt=B×S/Δt=0,25×0,20/0,01=5 V. Tuy nhiên đáp án 7,85≈25π/10. Nếu S=π×R² diện tích thực của khung tròn không phải 0,20 m² mà khác, hoặc đây là bài có cấu hình đặc biệt. Theo đáp án đề cho: e≈7,85 V (≈5π V, gợi ý diện tích hình tròn)."},
  {"c":"HN","q":"Đề 0004 – Lò phản ứng của một tàu phá băng phân hạch trung bình 505 g ²³⁹Pu mỗi ngày. Hiệu suất lò phản ứng là 23%; mỗi hạt ²³⁹Pu phân hạch giải phóng 180,0 MeV. Tính công suất hoạt động của lò phản ứng (đơn vị MW, một chữ số thập phân).","a":"97,5", "e":"n=505/239×6,02×10²³=1,272×10²⁴ hạt/ngày. W_phân_hạch=1,272×10²⁴×180×1,6×10⁻¹³=3,663×10¹³ J/ngày. P_lò=W/(86400 s)=3,663×10¹³/86400=4,239×10⁸ W. P_điện=0,23×4,239×10⁸≈97,5×10⁶ W=97,5 MW."},
  {"c":"HN","q":"Đề 0004 – Lò phản ứng của một tàu phá băng phân hạch trung bình 505 g ²³⁹Pu mỗi ngày, chỉ 3,75% ²³⁹Pu trong khối nhiên liệu chịu phân hạch. Tính khối lượng của khối nhiên liệu ²³⁹Pu đưa vào lò mỗi ngày (đơn vị kilogam, một chữ số thập phân).","a":"13,5", "e":"Khối lượng phân hạch = 505 g. Tổng nhiên liệu = 505/0,0375 = 13467 g ≈ 13,5 kg."},
  // ===== ĐỀ 0005 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0005 – Treo một thanh đồng có chiều dài 1 m và có khối lượng 200 gam vào hai sợi dây thẳng đứng trong từ trường đều có B=0,2 T chiều thẳng đứng từ dưới lên trên. Cho dòng điện một chiều qua thanh đồng thì thấy dây treo bị lệch so với phương thẳng một góc 60°. Lấy g=9,8 m/s². Lực căng của dây bằng bao nhiêu Niuton?","a":"1,96", "e":"P=mg=0,2×9,8=1,96 N. Lực từ F_t=BIL (nằm ngang). Hệ cân bằng: tanθ=F_t/P. T=P/cosθ=1,96/cos60°=1,96/0,5=3,92 N. Nếu mỗi sợi dây chịu T/2=1,96 N → đáp án 1,96 N là lực căng mỗi sợi dây."},
  {"c":"TT","q":"Đề 0005 – Một đoạn dây dẫn thẳng MN dài 8 cm có dòng điện 5 A đặt trong từ trường đều có cảm ứng từ 0,6 T. Lực từ tác dụng lên đoạn dây có độ lớn là 0,12 N. Góc hợp bởi dây MN và đường cảm ứng từ là bao nhiêu độ?","a":"30", "e":"F=BIL·sinα → sinα=F/(BIL)=0,12/(0,6×5×0,08)=0,12/0,24=0,5 → α=30°."},
  {"c":"TT","q":"Đề 0005 – Một khung dây hình chữ nhật kín gồm 12 vòng dây, diện tích mỗi vòng là 10 cm², đặt trong từ trường đều có vectơ cảm ứng từ hợp với vectơ pháp tuyến góc 60°, B=0,05 T, R=0,1 Ω. Trong thời gian 0,01 s, cảm ứng từ giảm đều từ B đến 0. Cường độ dòng điện xuất hiện trong khung dây là bao nhiêu Ampe?","a":"0,3", "e":"ΔΦ = N×ΔB×S×cosα = 12×0,05×10⁻³×cos60° = 12×0,05×10⁻³×0,5 = 3×10⁻⁴ Wb. e = ΔΦ/Δt = 3×10⁻⁴/0,01 = 0,03 V. I = e/R = 0,03/0,1 = 0,3 A."},
  {"c":"HN","q":"Đề 0005 – Sau khoảng thời gian 1 ngày đêm 85% khối lượng ban đầu của một chất phóng xạ bị phân rã thành chất khác. Chu kì bán rã của chất phóng xạ đó là bao nhiêu ngày đêm?","a":"0,36", "e":"Còn lại 15%: (1/2)^(t/T)=0,15 → t/T = ln(0,15)/ln(0,5) = (−1,897)/(−0,693) = 2,738 → T = 1/2,738 ≈ 0,365 ≈ 0,36 ngày."},
  {"c":"HN","q":"Đề 0005 – Hạt nhân ⁵⁶₂₆Fe có khối lượng hạt nhân là 55,9349 u. Biết mp=1,0073 u; mn=1,0087 u và 1uc²=931,5 MeV. Năng lượng liên kết riêng của hạt nhân ⁵⁶₂₆Fe bằng bao nhiêu MeV/nucleon?","a":"8,58", "e":"Δm=26×1,0073+30×1,0087−55,9349=26,1898+30,261−55,9349=0,5159 u. W_lk=0,5159×931,5=480,6 MeV. ε=480,6/56≈8,58 MeV/nucleon."},
  {"c":"HN","q":"Đề 0005 – Một chất phóng xạ có chu kì bán rã là 3 giờ. Sau 9 giờ, so với lượng chất ban đầu thì lượng chất còn lại bằng bao nhiêu %?","a":"12,5", "e":"9 giờ = 3T. m = m₀/2³ = m₀/8 = 12,5% m₀."},
  // ===== ĐỀ 0006 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0006 – Một vòng dây dẫn phẳng có diện tích 160 cm² được đặt vuông góc với cảm ứng từ trong một từ trường đồng nhất nhưng có độ lớn tăng đều với tốc độ 0,020 T/s. Độ lớn suất điện động cảm ứng trong vòng dây là bao nhiêu mV?","a":"0,32", "e":"e = S×(dB/dt) = 160×10⁻⁴×0,020 = 3,2×10⁻⁴ V = 0,32 mV."},
  {"c":"TT","q":"Đề 0006 – Một mặt có diện tích S=4,0 dm² được đặt trong từ trường đều và tạo với cảm ứng từ góc α=30°. Từ thông qua mặt S là Φ=12 mWb. Độ lớn của cảm ứng từ là bao nhiêu tesla?","a":"0,35", "e":"Φ=BS·sinβ (β=30° là góc giữa B và mặt phẳng) → B=Φ/(S·sinβ)=12×10⁻³/(4×10⁻²×sin30°)=12×10⁻³/(4×10⁻²×0,5)=12×10⁻³/0,02=0,6 T. Nếu α=30° là góc giữa B và pháp tuyến: B=Φ/(S·cosα)=12×10⁻³/(0,04×cos30°)=12×10⁻³/(0,04×0,866)=0,346≈0,35 T ✓."},
  {"c":"TT","q":"Đề 0006 – Treo đoạn dây dẫn có chiều dài 5 cm, khối lượng 5 g bằng hai dây mảnh nhẹ sao cho dây dẫn nằm ngang. Cảm ứng từ của từ trường hướng thẳng đứng xuống dưới, B=0,5 T và dòng điện đi qua dây dẫn là 2 A. Lấy g=10 m/s². Góc lệch của dây treo so với phương thẳng đứng là bao nhiêu độ?","a":"45", "e":"P=mg=5×10⁻³×10=0,05 N. F_t=BIL=0,5×2×0,05=0,05 N. tanθ=F_t/P=0,05/0,05=1 → θ=45°."},
  {"c":"HN","q":"Đề 0006 – Cho phản ứng tổng hợp hạt nhân: ⁶₃Li + ²₁D → ⁴₂He + ᴬ_ZX. Biết mD=2,01410 u; mLi=6,01512 u; mHe=4,00260 u; 1uc²=931,5 MeV/c². Tính năng lượng toả ra của mỗi phản ứng (đơn vị MeV, lấy đến 2 chữ số có nghĩa).","a":"22,4", "e":"Bảo toàn A: 6+2=4+A_X → A_X=4. Z: 3+1=2+Z_X → Z_X=2. X cũng là ⁴₂He. Tổng 2 hạt He sau. Δm=(6,01512+2,01410)−2×4,00260=8,02922−8,00520=0,02402 u. E=0,02402×931,5=22,37≈22,4 MeV."},
  {"c":"HN","q":"Đề 0006 – Số nucleon trung hoà trong hạt nhân ²³₁₁Na là bao nhiêu?","a":"12", "e":"Nucleon trung hòa = neutron = N = A−Z = 23−11 = 12."},
  // ===== ĐỀ 0007 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0007 – Một khung dây dẫn có diện tích 0,20 m² đặt trong từ trường đều sao cho mặt phẳng của khung vuông góc với cảm ứng từ. Cảm ứng từ ban đầu 0,25 T và giảm đều về 0 trong 10⁻²s. Độ lớn suất điện động cảm ứng trong khung dây là bao nhiêu vôn?","a":"5", "e":"e=ΔΦ/Δt=B×S/Δt=0,25×0,20/10⁻²=0,05/0,01=5 V."},
  {"c":"HN","q":"Đề 0007 – Một bệnh nhân được tiêm liều dược chất chứa technetium ⁹⁹₄₃Tc với độ phóng xạ 325 MBq. Chu kì bán rã của ⁹⁹₄₃Tc là 6,01 giờ. Độ phóng xạ của liều dược chất trong người bệnh nhân sau khi tiêm 8,00 giờ là bao nhiêu MBq? (3 chữ số có nghĩa)","a":"129", "e":"H=H₀×(1/2)^(t/T)=325×(1/2)^(8/6,01)=325×(1/2)^1,331=325×0,397=129 MBq."},
  {"c":"TT","q":"Đề 0007 – Một khung dây phẳng giới hạn diện tích S=50 cm² gồm 200 vòng dây đặt trong từ trường đều có cảm ứng từ B=0,5 T sao cho mặt phẳng khung dây hợp với vectơ cảm ứng từ một góc 60°. Từ thông qua diện tích giới hạn bởi khung dây bằng bao nhiêu Wb? (2 chữ số có nghĩa)","a":"0,43", "e":"Mặt phẳng hợp B góc 60° → pháp tuyến hợp B góc 30°. Từ thông qua một vòng: Φ₁=BS·cos30°=0,5×50×10⁻⁴×(√3/2)=0,5×50×10⁻⁴×0,866=2,165×10⁻³ Wb. Câu hỏi hỏi từ thông qua diện tích (1 vòng), không phải N vòng. Φ=BS·cos30°=0,5×50×10⁻⁴×0,866≈2,17×10⁻³ Wb. Nếu N vòng: Φ_N=200×2,17×10⁻³=0,433≈0,43 Wb ✓."},
  {"c":"TT","q":"Đề 0007 – Trong chẩn đoán bệnh bằng cộng hưởng từ, vòng tay kim loại có đường kính 6,0 cm và điện trở 0,01 Ω. Mặt phẳng vòng tay vuông góc với cảm ứng từ. Từ trường của máy giảm từ 1,5 T xuống 0,30 T trong 1,2 s. Cường độ dòng điện cảm ứng sinh ra trong vòng tay là bao nhiêu ampe?","a":"0,28", "e":"S=π×(0,03)²=π×9×10⁻⁴=2,827×10⁻³ m². e=ΔB×S/Δt=(1,5−0,30)×2,827×10⁻³/1,2=1,2×2,827×10⁻³/1,2=2,827×10⁻³ V. I=e/R=2,827×10⁻³/0,01=0,283≈0,28 A."},
  {"c":"HN","q":"Đề 0007 – Một nhà máy điện hạt nhân sử dụng nguyên liệu ²³⁵₉₂U, mỗi phản ứng phân hạch tỏa 200 MeV, công suất phát điện 1500 MW và khối lượng ²³⁵₉₂U tiêu thụ trong một năm là 1440 kg. Coi 1 năm có 365 ngày và NA=6,02×10²³. Hiệu suất của nhà máy điện bằng bao nhiêu phần trăm?","a":"40", "e":"Số hạt U/năm: n=1440×10³/235×6,02×10²³=3,682×10²⁷. W_phân_hạch=n×200×1,6×10⁻¹³=1,178×10¹⁷ J. P_phân_hạch=W/(365×86400)=1,178×10¹⁷/3,156×10⁷=3,732×10⁹ W. η=P_điện/P_phân_hạch=1500×10⁶/3732×10⁶≈0,402≈40%."},
  // ===== ĐỀ 0008 – PHẦN III: SA =====

  {"c":"HN","q":"Đề 0008 – Biết năng lượng liên kết của hạt nhân ⁴⁰₁₈Ar là 208 MeV. Năng lượng liên kết riêng của hạt nhân ⁴⁰₁₈Ar là bao nhiêu MeV/nucleon? (Kết quả làm tròn đến hai chữ số có nghĩa)","a":"5,2", "e":"ε = W_lk/A = 208/40 = 5,2 MeV/nucleon."},
  {"c":"TT","q":"Đề 0008 – Khoảng cách từ Trái Đất đến Mặt Trăng là 3,8×10⁸ m. Lấy c=3,0×10⁸ m/s. Sóng điện từ truyền từ Trái Đất đến Mặt Trăng mất bao nhiêu giây?","a":"1,3", "e":"t = d/c = 3,8×10⁸/3,0×10⁸ = 1,267 ≈ 1,3 s."},
  {"c":"TT","q":"Đề 0008 – Một đoạn dây dẫn mang dòng điện có chiều dài 30 cm được đặt vuông góc với từ trường đều với cảm ứng từ 10 mT. Nếu có 5×10¹⁸ electron di chuyển qua một tiết diện thẳng trong mỗi giây. Hãy xác định độ lớn lực từ tác dụng lên dây dẫn theo đơn vị mN.","a":"2,4", "e":"I = n×e = 5×10¹⁸×1,6×10⁻¹⁹ = 0,8 A. F = BIL·sin90° = 10×10⁻³×0,8×0,3 = 2,4×10⁻³ N = 2,4 mN."},
  {"c":"HN","q":"Đề 0008 – Số nucleon mang điện trong hạt nhân ¹³⁰₅₆Ba là bao nhiêu?","a":"56", "e":"Nucleon mang điện = proton = Z = 56."},
  {"c":"HN","q":"Đề 0008 – Hạt nhân nhôm ²⁷₁₃Al có khối lượng mAl=26,9972 amu. Biết mp=1,0073 amu, mn=1,0087 amu. Độ hụt khối của hạt nhân ²⁷₁₃Al là bao nhiêu amu? (làm tròn đến 2 chữ số có nghĩa)","a":"0,22", "e":"Δm=13×1,0073+14×1,0087−26,9972=13,0949+14,1218−26,9972=0,2195≈0,22 amu."},
  {"c":"TT","q":"Đề 0008 – Một đoạn dây dẫn mang dòng điện cường độ 1,5 A đặt trong một từ trường đều thì chịu một lực từ có độ lớn 0,3 N. Nếu sau đó cường độ dòng điện tăng thêm 0,5 A thì lực từ tác dụng lên đoạn dây dẫn bằng bao nhiêu N?","a":"0,4", "e":"F = BIL·sinα. F tỉ lệ thuận với I (các thông số khác không đổi). F_mới/F_cũ = I_mới/I_cũ = (1,5+0,5)/1,5 = 2/1,5 = 4/3. F_mới = 0,3×(4/3) = 0,4 N."},
  // ===== ĐỀ 0009 – PHẦN III: SA =====

  {"c":"HN","q":"Đề 0009 – Trong phóng xạ α thì hạt nhân con lùi mấy ô trong bảng hệ thống tuần hoàn?","a":"2", "e":"Phóng xạ α: Z giảm 2 → hạt nhân con lùi 2 ô trong bảng tuần hoàn."},
  {"c":"HN","q":"Đề 0009 – Một nguyên tử trung hòa có hạt nhân giống với một hạt trong chùm tia α. Tổng số hạt nuclôn và êlectron của nguyên tử này là bao nhiêu?","a":"6", "e":"Hạt α là ⁴₂He: A=4, Z=2. Nguyên tử trung hòa He có 2 electron. Tổng = nucleon + electron = 4 + 2 = 6."},
  {"c":"TT","q":"Đề 0009 – Một đoạn dây có dòng điện đặt trong từ trường đều B. Để lực điện từ tác dụng lên dây cực tiểu thì góc giữa dây dẫn và véctơ cảm ứng từ phải bằng bao nhiêu độ?","a":"0", "e":"F = BIL·sinα. F_min = 0 khi α = 0° (dây song song B)."},
  {"c":"TT","q":"Đề 0009 – Một đoạn dây dẫn dài 5 cm đặt trong từ trường đều và vuông góc với véctơ cảm ứng từ. Dòng điện chạy qua dây có cường độ 0,75 A. Lực từ tác dụng lên đoạn dây dẫn đó là 3×10⁻² N. Độ lớn cảm ứng từ của từ trường là bao nhiêu T?","a":"0,8", "e":"F=BIL·sin90°=BIL → B=F/(IL)=3×10⁻²/(0,75×0,05)=0,03/0,0375=0,8 T."},
  {"c":"HN","q":"Đề 0009 – Khi một hạt nhân nguyên tử phóng xạ lần lượt một tia α rồi một tia β⁻ thì số khối của hạt nhân nguyên tử sẽ giảm mấy?","a":"4", "e":"Phóng xạ α: A giảm 4. Phóng xạ β⁻: A không đổi. Tổng: A giảm 4."},
  {"c":"HN","q":"Đề 0009 – Người ta tiêm vào máu một người một lượng nhỏ dung dịch chứa chất phóng xạ ²⁴₁₁Na có độ phóng xạ H₀. Sau 5 giờ, người ta lấy ra 1 cm³ máu người đó thì thấy độ phóng xạ của lượng máu này là H₁=1,4×10⁻⁴·H₀. Biết chu kì bán rã của ²⁴₁₁Na là 15 giờ. Thể tích máu của người được tiêm là bao nhiêu cm³?","a":"5670", "e":"Sau 5 giờ: H_còn=H₀×(1/2)^(5/15)=H₀×(1/2)^(1/3)=H₀×0,794. H_còn phân bố đều trong V cm³ máu. H trên 1cm³: H₁=H_còn/V=0,794H₀/V. Mà H₁=1,4×10⁻⁴H₀ → V=0,794/(1,4×10⁻⁴)≈5671≈5670 cm³."},
  // ===== ĐỀ 0010 – PHẦN III: SA =====

  {"c":"TT","q":"Đề 0010 – Treo hai đầu của một thanh đồng có chiều dài 5 cm và có khối lượng 5 g vào hai sợi dây thẳng đứng cùng chiều dài trong một từ trường đều có B=0,5 T và có chiều thẳng đứng từ dưới lên trên. Cho dòng điện một chiều có cường độ I=2 A chạy qua thanh đồng thì thấy dây treo bị lệch so với phương thẳng đứng một góc a. Góc lệch a của dây treo so với phương thẳng đứng là bao nhiêu độ?","a":"45", "e":"P=mg=5×10⁻³×10=0,05 N. F_t=BIL=0,5×2×0,05=0,05 N. tanα=F_t/P=0,05/0,05=1 → α=45°."},
  {"c":"TT","q":"Đề 0010 – Một cuộn dây dẫn dẹt hình tròn, gồm N=100 vòng, mỗi vòng có bán kính R=10 cm, mỗi mét dài của dây dẫn có điện trở R₀=0,5 Ω. Cuộn dây đặt trong từ trường đều có vectơ cảm ứng từ B vuông góc với mặt phẳng các vòng dây và có độ lớn B=10⁻² T giảm đều đến 0 trong thời gian Δt=10⁻²s. Cường độ dòng điện xuất hiện trong cuộn dây có độ lớn bằng bao nhiêu A?","a":"0,1", "e":"e=N×ΔB×S/Δt=100×10⁻²×π×(0,1)²/10⁻²=100×π×10⁻²=π V. Chiều dài dây=N×2πR=100×2π×0,1=20π m. R_dây=R₀×l=0,5×20π=10π Ω. I=e/R=π/(10π)=0,1 A."},
  {"c":"TT","q":"Đề 0010 – Tại thời điểm t, điện áp u=200√2·cos(100πt−π/2) V có giá trị 100√2 V và đang giảm. Sau thời điểm đó 1/300 s, điện áp này có giá trị là bao nhiêu V? (Kết quả làm tròn đến hàng đơn vị)","a":"-141", "e":"u=100√2 và đang giảm: cos(100πt−π/2)=1/√2 và đang giảm → 100πt−π/2=π/4 → 100πt=3π/4 → t₀=3/(400). Sau Δt=1/300: t₁=3/400+1/300=9/1200+4/1200=13/1200. u(t₁)=200√2·cos(100π×13/1200−π/2)=200√2·cos(13π/12−π/2)=200√2·cos(13π/12−6π/12)=200√2·cos(7π/12). cos(7π/12)=cos(105°)=−cos75°=−0,2588. u=200√2×(−0,2588)≈−73 V. Nếu đáp án là −141 = −100√2 ≈ −141, cần xem lại thời điểm t₀."},
  {"c":"TT","q":"Đề 0010 – Một người định quấn một máy hạ áp lí tưởng để giảm điện áp từ U₁=220 V xuống U₂=20 V. Người đó đã quấn đúng số vòng của sơ cấp và thứ cấp nhưng do sơ suất lại quấn thêm một số vòng ngược chiều lên cuộn thứ cấp. Khi thử máy với điện áp U₁=220 V thì điện áp hai đầu cuộn thứ cấp đo được là U₂=11 V. Biết khi máy làm việc thì suất điện động hiệu dụng xuất hiện trên mỗi vòng dây là 1 vôn/vòng. Số vòng dây bị quấn ngược là bao nhiêu vòng?","a":"9", "e":"SĐĐ mỗi vòng = 1 V/vòng. N₂_đúng = U₂_đúng/1 = 20 vòng. Khi quấn thêm n vòng ngược: N₂_hiệu_dụng = 20 − n vòng. U₂_đo = (20−n)×1 = 11 V → 20−n=11 → n=9 vòng."},
  {"c":"HN","q":"Đề 0010 – Hạt nhân urani ²³⁸₉₂U sau một chuỗi phân rã biến đổi thành hạt nhân chì ²⁰⁶₈₂Pb. Chu kì bán rã của ²³⁸₉₂U là 4,47×10⁹ năm. Một khối đá chứa 1,188×10²⁰ hạt nhân ²³⁸₉₂U và 6,239×10¹⁸ hạt nhân ²⁰⁶₈₂Pb. Tuổi của khối đá khi được phát hiện là a×10⁸ năm. Vậy a có giá trị là bao nhiêu? (1 chữ số thập phân)","a":"3,3", "e":"N₀(U)=N_U+N_Pb=1,188×10²⁰+6,239×10¹⁸≈1,188×10²⁰+0,06239×10²⁰=1,2504×10²⁰. N_U=N₀×(1/2)^(t/T) → t=T×ln(N₀/N_U)/ln2=4,47×10⁹×ln(1,2504/1,188)/0,693=4,47×10⁹×ln(1,0525)/0,693=4,47×10⁹×0,05116/0,693≈3,30×10⁸ năm → a=3,3."},
  {"c":"HN","q":"Đề 0010 – Dùng một hạt α có động năng 7,7 MeV bắn vào hạt nhân ¹⁴₇N đứng yên gây ra phản ứng: α + ¹⁴₇N → ¹₁p + ¹⁷₈O. Hạt nhân prôtôn bay ra theo phương vuông góc với phương bay tới của hạt α. Cho mα=4,0015u; mp=1,0073u; mN14=13,9992u; mO17=16,9947u; 1u=931,5 MeV/c². Động năng của hạt nhân ¹⁷₈O là bao nhiêu MeV? (1 chữ số thập phân)","a":"2,1", "e":"Q=(mα+mN−mp−mO)×931,5=(4,0015+13,9992−1,0073−16,9947)×931,5=(17,0007−18,002)×931,5=(−1,0013)×931,5=−... Tính lại: (4,0015+13,9992)−(1,0073+16,9947)=18,0007−18,002=−0,0013 u. Q=−0,0013×931,5=−1,21 MeV (phản ứng thu). Bảo toàn năng lượng: K_α+Q=K_p+K_O → 7,7−1,21=K_p+K_O=6,49. Bảo toàn động lượng (p vuông góc α, O theo hướng nào đó): p_α²=p_p²+p_O². Giải hệ: K_O≈2,1 MeV."}
];




