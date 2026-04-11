import urllib.request
from bs4 import BeautifulSoup

url = "https://www.cleansmarts.com/pricing"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read()
soup = BeautifulSoup(html, 'html.parser')

print("FOUNDATION PLAN")
for card in soup.find_all('div', string=lambda text: 'Foundation' in str(text) if text else False):
    parent = card.find_parent('div', class_='pricing-column') or card.find_parent('div')
    if parent:
        print(parent.get_text(separator="\n").strip()[:500])

print("\nEXPERT PLAN")
for card in soup.find_all('div', string=lambda text: 'Expert' in str(text) if text else False):
    parent = card.find_parent('div', class_='pricing-column') or card.find_parent('div')
    if parent:
        print(parent.get_text(separator="\n").strip()[:500])

print("\nLOOKING FOR BULLETS")
lists = soup.find_all('ul')
for ul in lists:
    print(ul.get_text(separator="\n").strip())

