export interface Job {
  name: string;
  classification: Array<string>;
}

const all: Job = {
  name: "전체",
  classification: [],
};

const Development: Job = {
  name: "개발",
  classification: [
    "개발 전체",
    "웹",
    "네이티브 앱",
    "하이브리드 앱",
    "서버",
    "데이터",
    "AI/ML",
    "클라우드",
    "네트워크/보안",
    "시스템",
    "기타",
  ],
};

const Design: Job = {
  name: "디자인",
  classification: [
    "디자인 전체",
    "웹",
    "네이티브 앱",
    "하이브리드 앱",
    "서버",
    "데이터",
    "AI/ML",
    "클라우드",
    "네트워크/보안",
    "시스템",
    "기타",
  ],
};

const Management: Job = {
  name: "기획",
  classification: [
    "기획 전체",
    "웹",
    "네이티브 앱",
    "하이브리드 앱",
    "서버",
    "데이터",
    "AI/ML",
    "클라우드",
    "네트워크/보안",
    "시스템",
    "기타",
  ],
};

export const Jobs = {
  All: all,
  Development: Development,
  Design: Design,
  Management: Management,
};
