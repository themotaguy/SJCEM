import requests
from bs4 import BeautifulSoup
result =  requests.get("https://www.f6s.com/events/india/mumbai/hackathons/computer-science")
print(result.status_code)
src =  result.content
soup = BeautifulSoup(src, "html.parser")
urls=[]
for div_tag in soup.find_all("div"):
    for a_tag in div_tag.find_all("a"):
        urls.append(a_tag)

print(urls)
