let obj = {
    students :
    [
        {no: 1, name: '홍길동', kor: 90, eng: 50},
        {no: 1, name: '고길동', kor: 80, eng: 40},
        {no: 1, name: '김길동', kor: 70, eng: 40},
        {no: 1, name: '이길동', kor: 60, eng: 50},
    ]
};

console.log(obj.students[2].name);

let jsonStr = JSON.stringify(obj);

console.log(jsonStr);

let jsonResult = JSON.parse(jsonStr);

let kakaoSampleStr = `{
    "meta": {
      "total_count": 4,
      "pageable_count": 4,
      "is_end": true
    },
    "documents": [
      {
        "address_name": "전북 익산시 부송동 100",
        "y": "35.97664845766847",
        "x": "126.99597295767953",
        "address_type": "REGION_ADDR",
        "address": {
          "address_name": "전북 익산시 부송동 100",
          "region_1depth_name": "전북",
          "region_2depth_name": "익산시",
          "region_3depth_name": "부송동",
          "region_3depth_h_name": "삼성동",
          "h_code": "4514069000",
          "b_code": "4514013400",
          "mountain_yn": "N",
          "main_address_no": "100",
          "sub_address_no": "",
          "x": "126.99597295767953",
          "y": "35.97664845766847"
        },
        "road_address": {
          "address_name": "전북 익산시 망산길 11-17",
          "region_1depth_name": "전북",
          "region_2depth_name": "익산시",
          "region_3depth_name": "부송동",
          "road_name": "망산길",
          "underground_yn": "N",
          "main_building_no": "11",
          "sub_building_no": "17",
          "building_name": "",
          "zone_no": "54547",
          "y": "35.976749396987046",
          "x": "126.99599512792346"
        }
      }
    ]
  }`;

  let kakaoSampleObj = JSON.parse(kakaoSampleStr);

console.log(kakaoSampleObj.documents[0].road_address.x, kakaoSampleObj.documents[0].road_address.y)
// let roadaddy;