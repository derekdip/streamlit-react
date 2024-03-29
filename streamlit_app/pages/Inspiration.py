import streamlit as st
from streamlit_app import custom_component

st.set_page_config(layout="wide")
st.text_input(
  'Whats vibe your looking for?',
  placeholder='Chill, thrilling, nature, etc.'
)

st.text_input(
  'Location preferences if any.',
  placeholder=''
)
st.button(
  'Find Locations'
)
custom_component(name="hello world component",component_type="hello")
custom_component(name="card map",component_type="card_gallery",image_url="https://pm1.aminoapps.com/6806/1439924fd6806cee5609014d97c70520dcea4913v2_hq.jpg", location= "United States ",description="description of the location")
custom_component(name="single card",component_type="card",image_url="https://pm1.aminoapps.com/6806/1439924fd6806cee5609014d97c70520dcea4913v2_hq.jpg", location= "United States ",description="description of the location")
