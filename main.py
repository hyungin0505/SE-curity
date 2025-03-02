from typing import Optional, List
from fastapi import FastAPI
from pydantic import BaseModel
from googlesearch import search

app = FastAPI()

class UserInfo(BaseModel):
    name: str
    email: str
    number: str
    organization: str
    isDarkMode: Optional[bool] = False

def perform_organization_dorking(user_info: UserInfo) -> List[str]:
    dork_queries = [
        f'site:linkedin.com "{user_info.name}" "{user_info.organization}"'
    ]
    
    leaked_urls = [] 
    for query in dork_queries:
        try:
            for url in search(query, num_results=50): 
                leaked_urls.append(url)
        except Exception as e:
            print(f"[ERROR] Google Dorking 실패: {e}")

    return leaked_urls

def perform_sns_dorking(user_info: UserInfo) -> List[str]:
    sns_sites = [
        "instagram.com", "facebook.com", "thread.com", 
        "twitter.com", "tiktok.com", "pinterest.com", "linkedin"
    ]
    dork_queries =[]
    for site in sns_sites:
            query = f'"{user_info.name}" site:{site}'

    leaked_urls = [ ] 
    for query in dork_queries:
        try:
            for url in search(query, num_results=50): 
                leaked_urls.append(url)
        except Exception as e:
            print(f"[ERROR] Google Dorking 실패: {e}")

    return leaked_urls

def perform_private_dorking(user_info: UserInfo) -> List[str]:
    expected_id = user_info.email.split('@')[0]
    dork_queries = []
    dork_queries.append(f'intext:{expected_id}')
    dork_queries.append(f'intext:{user_info.number}')

    leaked_urls = [] 
    for query in dork_queries:
        try:
            for url in search(query, num_results=50): 
                leaked_urls.append(url)
        except Exception as e:
            print(f"[ERROR] Google Dorking 실패: {e}")

    return leaked_urls

@app.post("/analyze")
async def analyze_user_info(user_info: UserInfo):
    """
    사용자의 개인 정보를 입력받아 위험도를 분석하고 보안 조치를 추천하는 API
    """
    risk_level = "0"
    security_recommendations = []

    leaked_urls = perform_organization_dorking(user_info)
    if leaked_urls:
        security_recommendations.append("LinkedIn 등에서 소속 기관 등 노출 위험")
    if len(leaked_urls) > 0:
        risk_level = str(int(risk_level) + 5)
    else:
        risk_level = str(int(risk_level))

    leaked_urls = perform_sns_dorking(user_info)
    if leaked_urls:
        security_recommendations.append("SNS 게시물을 통해 정보 노출 위험")
        security_recommendations.append("SNS 비공개 계정 전환 등 조치 필요")
    if len(leaked_urls) > 5:
        risk_level = str(int(risk_level) + 20)
    elif len(leaked_urls) > 0:
        risk_level = str(int(risk_level) + 10)
    else:
        risk_level = str(int(risk_level))

    leaked_urls = perform_private_dorking(user_info)
    if leaked_urls:
        security_recommendations.append("구글링을 통해 정보 노출 위험")
        security_recommendations.append("검색 차단 요청 등 조치 필요")
    if len(leaked_urls) > 5:
        risk_level = str(int(risk_level) + 20)
    elif len(leaked_urls) > 0:
        risk_level = str(int(risk_level) + 10)
    else:
        risk_level = str(int(risk_level))

    if int(risk_level) > 50:
        risk_level = "높음"
    else:
        risk_level = "낮음"

    return {
        "risk_level": risk_level,
        "security_recommendations": security_recommendations
    }