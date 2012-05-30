.PHONY: export
export NOW:=$(shell date +%Y%m%d-%s)
export TAG:=push-${NOW}
export OUTPUT:=${HOME}/lophilo-com-${TAG}.zip 

export:
	@echo "tagging ${TAG}"
	git tag ${TAG} 
	@echo "exporting to ${OUTPUT}"
	git archive --format zip --output ${OUTPUT} ${TAG} 
