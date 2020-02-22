import requests
from bs4 import BeautifulSoup
result =  requests.get("https://www.indiaeducation.net/scholarships/")
print(result.status_code)
src =  result.content
soup = BeautifulSoup(src)
urls=[]
for span_tag in soup.find_all("li"):
    for b_tag in span_tag.find_all("a"):
        if " Scholarship " in b_tag.text:
            urls.append(b_tag)

print(urls)
