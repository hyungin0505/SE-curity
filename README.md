# SE-curity

## 프로젝트 개요
SE-curity는 개인 정보 유출 위험성을 분석하고 해당 위험에 대한 보안 권장 사항을 제공하는 웹 애플리케이션입니다.  
소셜 엔지니어링 공격을 방어하기 위한 목적으로 개발되었습니다.   
사용자의 이름, 이메일, 전화번호 등을 기반으로 웹 상에 정보가 노출되어 있는지 탐지하고, 보안 권장 사항을 제시합니다.   

## 스택
node.js + React + TypeScript
TailWindCSS

FastAPI

## 로컬에서 구동

1. 분석 서버
```bash
pip install fastapi uvicorn pydantic googlesearch-python typing
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

2. 프로젝트 설정
```bash
git clone https://github.com/hyungin0505/SE-curity
cd SE-curity
```
```bash
npm install
npm i --save-dev @types/js-cookie
npm run build
```
3. 프로젝트 실행
```bash
npm run start
```
```bash
# 디버깅 모드
npm run dev
```
