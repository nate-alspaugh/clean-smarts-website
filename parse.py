import urllib.request
from html.parser import HTMLParser

url = "https://www.cleansmarts.com/pricing"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

# find the text containing "$", "Foundation", "Expert"
import re
chunks = re.split(r'<(?:div|section|p|ul|li)[^>]*>', html)

data = []
for c in chunks:
    s = MLStripper()
    s.feed(c)
    text = s.get_data().replace("\n", " ").strip()
    if text:
        data.append(text)

with open('pricing_debug.txt', 'w') as f:
    for item in data:
        if any(x in item for x in ['Foundation', 'Expert', '$']):
            f.write(item + "\n")

